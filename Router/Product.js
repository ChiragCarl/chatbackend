const express=require('express');
const router=express.Router();

const {getList,saveProduct}=require('../Controller/Product');

router.get('/getProduct',getList);

router.post('/addProduct',saveProduct);
//alternative
//router.route('/getProduct').get(getList);


module.exports=router;

