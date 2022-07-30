// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
// 'Product' belongs to 'Catagory'
// 'Product' belongs to many 'Tag' models.
// Using the 'ProductTag' through model, allow 'Products' to have multiple 'Tags' and 'Tags' to have many 'Products'

Product.init(
  {
    // define columns
    // 'id' INTEGER, NOT NULL, SET PRIMARY KEY, AUTO_INCREMENT

    // 'product_name' STRING, NOT NULL

    // 'price' DECIMAL, NOT NULL, VALIDATES TRUE DECIMAL

    // 'stock' INTEGER, NOT NULL, DEFAULT VALUE 10, VALIDATES VALUE IS NUMARIC

    // 'catigory_id' INTEGER, REFERENCE 'catagory' model's 'id'

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
