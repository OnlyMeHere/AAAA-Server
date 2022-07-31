const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// 'Category' has many 'Product' models

Category.init(
  {
    // define columns
    // 'id' must be INTEGER, NOT NULL, PRIMARY KEY, AUTO_INCREMENT
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // 'catagory_name', STRING, NOT NULL
    catagory_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  },
);

module.exports = Category;
