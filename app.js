const express= require('express')
const session= require('express-session')
const sql= require('mysql')
const body_parser=require('body-parser');


const userRouter=require('./routes/UserRoutes')

const app=express();


app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.use((req,res,next)=> {
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'*');
    res.setHeader("Access-Control-Allow-Headers",'*');
    next();
});


app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false
    }
}));
app.use((req,res,next)=>{
    console.log("start");
    next()
})

app.use('/person',userRouter)

const connection= sql.createConnection({
    host:"localhost",
    user:"root",
    password:"23121997",
    database:"therightdoctor"
});

const pool=sql.createPool({
    host:"localhost",
    user:"root",
    password:"23121997",
    database:"therightdoctor"
});

module.exports=pool;
app.listen(2000);
