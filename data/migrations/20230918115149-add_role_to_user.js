'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('user', 'role', DataTypes.TEXT);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('user', 'role');
  }
};
