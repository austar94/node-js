const logger		=	require(__base + 'config/library/logger');
const member		=	require(__base + 'models/member');

//메인 페이지
exports.index = function(req, res){

	//공지사항, 회원목록 등의 정보를 가져옴
	try{
		//검색 조건
		let search			=	{
			userName 			:	1
		};
		member.get_userInfo(function(results){

			logger.info('목록 불러오기 성공');
			console.log(results);
			//다른 목록이 있다면 더 가져옴 더 가져옴 더 가져옴..?
			res.end("Hello World");
		}, search);
		
	}
	//예외 사항 발생 시(db 오류, 예상치 못한 종료 등등..)
	catch(err){
		logger.info('목록 불러오기 실패');
		logger.info(err);
	}
}

