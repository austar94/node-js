//express 모듈참조 즉시 instanciate
var app = require('express')();
//요청 처리
app.get('/', (req,res) => { res.send('요청주소 : index / ES6로 node 서버를 가동중입니다.')});
app.get('/1', (req,res) => { res.send('/1 요청을 처리합니다.')});
//port 리스닝
app.listen(3000, ()=>{console.log('ES6모드로 서버 가동 중')});