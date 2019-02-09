'use strict'

const router = require('express').Router()

const Candy = require('../db/models/Candy')

router.get('/candies', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.send(candies);
  } catch (error) {
    next(error);
  }
})

router.get('/candies/:id', async (req, res, next) => {
  try {
    const candies = await Candy.findById(Number(req.params.id));
    res.send(candies);
  } catch (error) {
    next(error);
  }
})

router.put('/candies/:id', async (req, res, next) => {
  console.log(req.body)
  try {
    const candy = await Candy.findById(Number(req.params.id))
    const updateCandy = await candy.update(req.body)
    res.send(updateCandy)
  } catch (error) {
    next(error)
  }
})


// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
