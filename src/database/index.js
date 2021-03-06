import Sequelize from 'sequelize';

import User from '../app/models/User';
// Import other models here

import databaseConfig from '../config/database';

// reference imported models here
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
