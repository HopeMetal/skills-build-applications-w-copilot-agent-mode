import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const db = mongoose.connection;

export async function connectDatabase() {
  try {
    await mongoose.connect(connectionString, { serverSelectionTimeoutMS: 2000 });
    console.log('Connected to octofit_db');
  } catch (error) {
    console.warn('MongoDB unavailable; API started without database access.', error);
  }
}

db.on('error', console.error.bind(console, 'connection error:'));

export default db;
