const mongoose = require('mongoose');

const db = async (uri)=> {
  try {
    await mongoose.connect(uri);
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error.message);
    process.exit(1); // Exit the process if connection fails
  }
}

module.exports = db;