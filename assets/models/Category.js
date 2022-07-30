const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// 'Category' has many 'Product' models

Category.init(
  {
    // define columns
    // 'id' must be INTEGER, NOT NULL, PRIMARY KEY, AUTO_INCREMENT
    
    // 'catagory_name', STRING, NOT NULL
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
