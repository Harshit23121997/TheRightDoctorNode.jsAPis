const express=require('express');
const app=express();

const router=express.Router();

const personGetController=require('../controller/UserController').getUsers;
const personPostController=require('../controller/UserController').postPerson;
const personPutController=require('../controller/UserController').putPerson;
const personDeleteController=require('../controller/UserController').deletePerson;
const personController=require('../controller/UserController').getPerson;

router.get('',personGetController)
router.post('',personPostController)
router.put('/:id',personPutController)
router.delete('/:id',personDeleteController)
router.delete('/:id',personController)


module.exports=router;