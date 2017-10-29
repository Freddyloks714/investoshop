'use strict'
const db = require('./db');

require('./models');

const syncedDbPromise = db.sync();

syncedDbPromise.then( () => console.log( 'Sequelized models synced to PostgresSQL' ))

module.exports = syncedDbPromise;
