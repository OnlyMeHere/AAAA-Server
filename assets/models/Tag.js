const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

// 'Tag' belongs to many 'Product' models

Tag.init(
  {
    // define columns
    // 'id' INTEGER, NOT NULL, PRIMARY KEY, AUTO_INCRAMENT

    // 'tag_name' STRING
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
