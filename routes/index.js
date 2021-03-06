// / 페이지 라우팅
const express			=	require('express'); 
const router			=	express.Router(); 
const index_controller	=	require(__base + 'controllers/index/'); 


//view

//각 호출 별
router.get('/', index_controller.index);

/* router.get('/list', index_controller.get_testList); */
router.get('/list/:id', index_controller.get_memberList);
//view



/* router.get('/:id', index_controller.show); 
router.delete('/:id', index_controller.destroy); 
router.post('/', index_controller.create); 
router.put('/:id', index_controller.update); 
 */
module.exports = router;
