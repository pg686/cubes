const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/cubes';

exports.initializeDatabase = () => mongoose.connect(connectionString);