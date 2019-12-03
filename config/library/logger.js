const fs			=	require('fs');
const winston		=	require('winston');
require('winston-daily-rotate-file');
const moment		=	require('moment');
const path			=	require('path');
const mkDir			=	require('./mkDir');
const logDir		=	'log/' + `${moment().format("YYYY")}` +'/'+ `${moment().format("MM")}`;


//로그 디렉토리 없을 경우 생성
//mkdirSync 함수는 부모 디렉토리가 없을 경우 오류를 생성함.
//재귀함수를 이용해 순서대로 파일을 생성해야함(라이브러리로 대체)
if(!fs.existsSync(logDir))	mkDir.mkDirByPathSync(logDir);

const logFileName	=	path.join(logDir, '/' + `${moment().format("YYYY-MM-DD")}` + '.log')


//로그 생성
const logger		=	winston.createLogger({
    level				:	'debug', // 최소 레벨
    transports			:	[
		// 파일저장
        new winston.transports.DailyRotateFile({
            filename			:	logFileName,
            zippedArchive		:	true,					// 압축여부
            format				:	winston.format.printf(
				info				=>	`${moment().format("YYYY-MM-DD HH:mm:ss")} [${info.level.toUpperCase()}] - ${info.message}`
			)
        }),
        // 콘솔 출력
        new winston.transports.Console({
            format				:	winston.format.printf(
				info				=>	`${moment().format("YYYY-MM-DD HH:mm:ss")} [${info.level.toUpperCase()}] - ${info.message}`
			)
        })
    ]
});
 
module.exports		=	logger;