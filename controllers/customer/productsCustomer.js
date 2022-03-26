const {
  Product
} = require('../../models')
const { Op } = require("sequelize");

class ProductCustomerController {
  static async allProduct(req, res, next) {
    try {
      const { name } = req.headers;
      const options = {
        where: {},
      };

      if (name) {
        options.where.name = {
          [Op.iLike]: `%${name}%`,
        };
      }

      const products = await Product.findAll(options);
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = ProductCustomerController