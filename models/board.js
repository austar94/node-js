const logger		=	require(__base + 'config/library/logger');
const getConn		=	require(__base + 'config/db/db_connect');

//게시판 목록
exports.get_boardList	=	async function(callback, data = new Array()){
	let set					=	'';
	let where				=	'';
	let values				=	new Array();

	let boardTitle			=	data.boardTitle;
	let boardIdx			=	data.boardIdx;

	if(boardIdx){
		where				+=	' AND boardIdx = ?';
		values[values.length]	=	boardIdx;
	}

	if(boardTitle){
		where				+=	' AND boardTitle = ?';
		values[values.length]	=	boardTitle;
	}

	logger.info('게시판 목록 불러오는 중...');
	try{
		let msg				=	await getConn("SELECT * FROM tbl_boardList WHERE 1=1" + where, values);
		logger.info('게시판 목록 불러오기 완료');
		return msg.getData();
	}
	catch(msg){
		throw new Error('게시판 목록 불러오기 실패');
	}
};