

const getList= async(req,res)=>{
        console.log('ok');
        res.status(200).json({
            message:'done'
        });
}

const saveProduct= async(req,res)=>{
    console.log(req.body);
    res.status(200).json({
        message:'done'
    });
}


module.exports={getList,saveProduct};