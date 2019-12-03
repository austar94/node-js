// / 페이지 라우팅
const express			=	require('express'); 
const router			=	express.Router(); 
const index_controller	=	require(__base + 'controllers/chat/'); 

//각 호출 별
router.get('/', index_controller.index); 
router.get('/:id', index_controller.show); 


/* router.delete('/:id', index_controller.destroy); 
router.post('/', index_controller.create); 
router.put('/:id', index_controller.update);  */

module.exports = router;
