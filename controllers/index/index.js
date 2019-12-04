const logger		=	require(__base + 'config/library/logger');
const Message		=	require(__base + 'config/dto/Message');
const member		=	require(__base + 'models/member');
const board			=	require(__base + 'models/board');

//메인 페이지
exports.index = function(req, res){
	res.send('asdf');
}

exports.get_testList = function(req, res){
	res.send('asdf');
}


//메인페이지 리스트
exports.get_memberList = async function(req, res, next){
	let result				=	new Message();
	let memberList			=	'';
	let boardList			=	'';

	//공지사항, 회원목록 등의 정보를 가져옴
	try{
		var search			=	{
			userName			:	1
		};
		memberList			=	await member.get_userInfo(search);
		boardList			=	await board.get_boardList();

		logger.info(JSON.stringify(memberList));
		logger.info(JSON.stringify(boardList));
		logger.info('메인 불러오기 성공');
		result.setData([memberList, boardList]);
		result.setResult(true);
	}
	//예외 사항 발생 시(db 오류, 예상치 못한 종료 등등..)
	catch(msg){
		logger.info('메인 불러오기 실패');
		result.setUrl('/member');
	}

	//페이지 불러오기에 실패했을경우 오류 구문 띄우기
	/* try{
		res.json(err);
	}
	catch(err){
		let error			=	new Error('메인페이지 불러오기 실패');
		next(error);
	} */
	
}