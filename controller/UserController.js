module.exports.getUsers=((req,res,next)=>{
    const connection=require('../app');
    let sql=`select * from persons`;
    connection.query(sql,[],(err,result)=>{
        if(!err){
            res.status(200).json({
                'status':'OK',
                'persons':result
            })
        }
        else{
            res.status(502).json({
                'status':502
            })
        }
    })
});


module.exports.getPerson=((req,res,next)=>{
    const connection=require('../app');
    const id=req.params.id;
    let sql=`Select * FROM persons WHERE id=?;`
    connection.query(sql,[],(err,result)=>{
        if(!err){
            res.status(200).json({
                'status':'OK',
                'persons':result
            })
        }
        else{
            res.status(502).json({
                'status':502
            })
        }
    })
});

module.exports.postPerson=((req,res,next)=>{
    const connection=require('../app');
    const fname=req.body.fname;
    const lname=req.body.lname;
    const contact=req.body.contact;
    const gender=req.body.gender;
    let sql=`INSERT INTO persons(first_name,last_name,contact_no,gender) VALUES (?,?,?,?);`
    connection.query(sql,[fname,lname,contact,gender],(err,result)=>{
        if(!err){
            res.status(200).json({
                'status':'OK'
            })
        }
        else{
            res.status(502).json({
                'status':502
            })
        }
    })
})

module.exports.putPerson=((req,res,next)=>{
    const connection=require('../app');
    const id=req.params.id;
    const fname=req.body.fname;
    const lname=req.body.lname;
    const contact=req.body.contact;
    const gender=req.body.gender;
    let sql=`UPDATE persons SET first_name =?,last_name =?,contact_no =?,gender =?  WHERE id = ?;`
    connection.query(sql,[fname,lname,contact,gender,id],(err,result)=>{
        if(!err){
            res.status(200).json({
                'status':'OK'
            })
        }
        else{
            console.log(err)
            res.status(502).json({
                'status':502
            })
        }
    })
});


module.exports.deletePerson= ((req,res,next)=>{
    const connection=require('../app');
    const id=req.params.id;
    let sql=`DELETE FROM persons WHERE id=?;`
    connection.query(sql,[id],(err,result)=>{
        if(!err){
            res.status(200).json({
                'status':'OK'
            })
        }
        else{
            console.log(err)
            res.status(502).json({
                'status':502
            })
        }
    })
})

