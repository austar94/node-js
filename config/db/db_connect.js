const mysql				=	require('mysql2/promise');
const config			=	require('./db_config');
const pool				=	mysql.createPool(config);				//db connect
const logger			=	require(__base + 'config/library/logger');
const Message			=	require(__base + 'config/dto/Message');


logger.info('Connection pool created.');

pool.on('acquire', function (connection) {
  logger.info(`Connection ${connection.threadId} acquired`);
});

pool.on('enqueue', function () {
  logger.info('Waiting for available connection slot');
});

//실행 sql 기록
pool.on('release', function (connection) {
  logger.info(`Connection ${connection.threadId} released`);
});

//실행
const getConn	=	async function(sql, values){
	let msg					=	new Message();
	let connection			=	await pool.getConnection(async conn => conn);

	try{
		const [rows]		=	await connection.query(sql, values);
		connection.release();
		msg.setData(rows);
		msg.setResult(true);
		return msg;
	}
	catch(err){
		connection.release();
		logger.info(err);
		throw msg;
	}
}

module.exports = getConn;
/* const getConn = function(callback) {
  pool.getConnection(function(err, connection) {
    callback(err, connection);
  });
} */