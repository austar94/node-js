const logger		=	require(__base + 'config/library/logger');
const dbConnect		=	require(__base + 'config/db/db_connect');

//회원 목록
exports.get_userInfo		=	function(callback, data){
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

	dbConnect((err, connection) => {
		connection.query("SELECT * FROM tbl_userInfo WHERE 1=1" + where, values, (err, results) => {
			connection.release();
			if(err){
				throw err;
			}
			
			callback(results);
		});
	})
};