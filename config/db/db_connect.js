const mysql				=	require('mysql');
const config			=	require('./db_config');
const pool				=	mysql.createPool(config);				//db connect
const logger			=	require(__base + 'config/library/logger');


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
const getConn = function(callback) {
  pool.getConnection(function(err, connection) {
    callback(err, connection);
  });
}

module.exports			=	getConn;