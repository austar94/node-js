const logger		=	require(__base + 'config/library/logger');
const getConn		=	require(__base + 'config/db/db_connect');

//회원 목록
exports.get_userInfo		=	async function(data = new Array()){
	let set					=	'';
	let where				=	'';
	let values				=	new Array();

	let userName			=	data.userName;
	let userIdx				=	data.userIdx;

	if(userIdx){
		where				+=	' AND userIdx = ?';
		values[values.length]	=	userIdx;
	}

	if(userName){
		where				+=	' AND userName = ?';
		values[values.length]	=	userName;
	}

	logger.info('회원 목록 불러오는 중...');
	try{
		let msg				=	await getConn("SELECT * FROM tbl_userInfo WHERE 1=1" + where, values);
		logger.info('회원 목록 불러오기 완료');
		return msg.getData();
	}
	catch(msg){
		logger.info('회원 목록 불러오기 실패');
		throw msg;
	}
};