const express       = require('express');
const router        = express.Router();
const Address       = require("../models/address" );


router.get('/', ( req, res, next ) => {
                              
  Address.find( {} , ( err, addressData ) => {
    if(err){
      return next(err)
    }else{
      return res.status(200).json( addressData )
    }
  })
})

router.get('/:id', ( req, res, next ) => {
  const addressID = req.params.id
                                 
  Address.findById( addressID , ( err, addressData ) => {
    if(err){
      return next(err)
    }else{
      return res.status(200).json( addressData )
    }
  })
})

router.post('/', ( req, res, next ) => {

  const newAddress = new Address({
    firstName : req.body.firstName,
    lastName  : req.body.lastName,
    address   : req.body.address,
    phoneNr   : req.body.phoneNr,
    addressLat: req.body.geoData.addressLat,
    addressLng: req.body.geoData.addressLng
  })

  newAddress.save(( err, newAddress ) => {
    if(err){
      return next(err)
    }else{
      return res.status(200).json( newAddress )
    }
  })
})

router.put('/:id', ( req, res, next ) => {
  const addressID = req.params.id

  const addressData = {
    firstName : req.body.firstName,
    lastName  : req.body.lastName,
    address   : req.body.address,
    phoneNr   : req.body.phoneNr,
    addressLat: req.body.geoData.addressLat,
    addressLng: req.body.geoData.addressLng
  }
                                    
  Address.findByIdAndUpdate( addressID , addressData , ( err, addressData ) => {
    if(err){
      return next(err)
    }else{
      return res.status(200).json( addressData )
    }
  })
})

module.exports = router
