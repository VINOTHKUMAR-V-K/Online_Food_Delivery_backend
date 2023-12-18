// var stripe=require('stripe')('sk_test_51ONb1XSAsiMYO5oLd48dJJvJztEbdCe89ggLRgRbn0w3PUpoEkD4F852b5jRL2BGJLej0TqHH1x9uPDVAUCR1PwW00oVVFbHYd');

// exports.Payment=async(req,res)=>{
//     try{
//        const payment = await stripe.paymentIntends.create({
//         amount:req.body.amount,
//         currency:'inr',
//         automatic_payment_methods:{
//             enabled:true
//         }
//        })
//        res.status(200).send({client_secret:payment.client_secret })
//     }catch{
//         res.status(500).send("external server error")
//     }
// }