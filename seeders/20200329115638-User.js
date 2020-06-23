'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const now = new Date();
      await queryInterface.bulkInsert(
          'Users', [
              {
                  name: "User1",
                  email: 'user1@boolfalse.com',
                  username: 'user1nick',
                  createdAt: now,
                  updatedAt: now,
              },
              {
                  name: "User2",
                  email: 'user2@boolfalse.com',
                  username: 'user2nick',
                  createdAt: now,
                  updatedAt: now,
              },
          ],
          {},
      )
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
