const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // 'id' INTEGER, NOT NULL, PRIMARY KEY, AUTO_INCREMENT

    // 'product_id' INTEGER, REFERENCE 'product' model's 'id'

    // 'tag_id' INTEGER, REFERENCES 'tag' model's 'id'
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
