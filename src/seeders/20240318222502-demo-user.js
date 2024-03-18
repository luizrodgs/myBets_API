'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
        nickname: 'luizrodgs',
        email: 'luizrodgs@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: 'esterzinha',
        email: 'ester@email.com',
        password: '654321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: 'cacabet',
        email: 'caca@hotmail.com',
        password: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: 'marciarodgs',
        email: 'marcinharodgs@email.com',
        password: 'rodgs123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
