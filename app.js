const express			=	require('express');						//node_module에있는 express 모듈 호출
const bodyParser		=	require('body-parser');					//post를 사용하기 위한 body값을 긁음
const app				=	express();								//express 함수 실행
app.use(bodyParser.urlencoded({extended : false}));					//post설정을 위한 미들웨어 설정
app.locals.pretty		=	true;									//템플릿의 html 상의 코드 정렬
global.__base			=	__dirname + '/';						//기준 경로
const logger			=	require(__base + 'config/library/logger');		//로그


/**
 * //=========================================================================
 * pug 템플릿 사용 선언
 */
app.set('view engine', 'pug');										//pub 탬플릿 사용 요청
app.set('views', './views');										//템플릿 뷰 폴더 선언
/**
 * //=========================================================================
 */


 /**
  * //=========================================================================
  * 에러 처리
  */
/* app.use(function(req, res, next){
	throw new Error('잘못된 접근입니다.');
});
app.use(function(err, req, res, next){
	logger.info(err);
	res.send(err.message);
}); */



 /**
  * //======================================================================
  * 각 페이지별 라우트
  */
app.use('/', require('./routes/index.js'));						//메인페이지 라우트
app.use('/chat', require('./routes/chat.js'));					//체팅페이지 라우트
 /**
  * //======================================================================
  */


//정상적으로 웹앱의 해당 포트에 접속 했을 경우의 동작
app.listen(3000, function(){										//웹앱이 3000 포트를 바라봄
	logger.info('node js start, i see you');
	logger.info(app.get('env'));
});