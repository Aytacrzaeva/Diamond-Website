const PaymentController=require("../controllers/payment.controller")
const express=require("express")
const router=express.Router()


router.post("/",PaymentController.payment)


module.exports=router