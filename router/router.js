const express= require("express");
const router= express.Router()
const locationApi=require("../controller/location")
const mealtypeApi=require("../controller/mealtype")
const getrestApi=require("../controller/restaurant")
const userApi=require("../controller/user");
const menuApi= require("../controller/menuItem");
const paymentApi =require('../controller/payment')

router.get("/getAllLocations",locationApi.fetchLocations);
router.get("/getAllMealtype",mealtypeApi.getAllMealtype);
router.get("/getAllRest",getrestApi.restApi);
router.post("/postUser",userApi.signup)
router.post("/loginUser",userApi.signin)
router.get("/restBycity/:city",getrestApi.findByCityApi)
router.get("/getMealtypeById/:mealtype_id",getrestApi.findMealtypeById)
router.get("/restById/:_id",getrestApi.findByIdApi);
router.get("/restByLocationId/:location_id",getrestApi.findByLocationIdApi)


router.get("/getAllrestByQuery",getrestApi.getAllRestaurantsByQuery)
router.post("/filter",getrestApi.filter)

router.get('/menu/:name',menuApi.MenuApi)

// router.post('/paymentcharge',paymentApi.Payment)

module.exports=router