module.exports		=	function(app){
	const express			=	require('express');
	const router			=	express.Router();


	router.get('/', function(req, res){
		let pageID			=	req.query.id;
		let arr_title		=	[
			'number 1',
			'number 2',
			'number 3'
		];

		let arr_links		=	[
			'/board?id=0',
			'/board?id=1',
			'/board?id=2'
		]


		res.send(arr_title[pageID]);

		res.render('board/list');
	});
	
	return router;
};