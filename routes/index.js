const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const customer = require('./customer')
const products = require('./products')
const carts = require('./carts')
const histories = require("./history")

router.use('/customer', customer)
router.use('/customer/products', products)

router.post('/afterpayment', (req, res) => {
  console.log(req.body);
  console.log("iiniiii udah berhasil payment");
  res.status(200).json({
    message: "berhasil payment"
  })
})
router.use(authentication)

router.use('/customer/carts', carts)
router.use('/customer/histories', histories)
module.exports = router