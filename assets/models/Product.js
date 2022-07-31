// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
// 'Product' belongs to 'Catagory'
// 'Product' belongs to many 'Tag' model.
// Using the 'ProductTag' through model, allow 'Products' to have multiple 'Tags' and 'Tags' to have many 'Products'

Product.init(
  {
    // 'id' INTEGER, NOT NULL, SET PRIMARY KEY, AUTO_INCREMENT
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // 'product_name' STRING, NOT NULL
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 'price' DECIMAL, NOT NULL, VALIDATES TRUE DECIMAL
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      isDecimal: true,
    },
    // 'stock' INTEGER, NOT NULL, DEFAULT VALUE 10, VALIDATES VALUE IS NUMARIC
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isInt: true,
    },
    // 'catigory_id' INTEGER, REFERENCE 'category' model's 'id'
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },

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
