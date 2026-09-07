import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      {
        username: 'alex.runner',
        email: 'alex.runner@mergington.edu',
        profile: { firstName: 'Alex', grade: 10, favoriteActivity: 'Running' },
      },
      {
        username: 'jordan.strong',
        email: 'jordan.strong@mergington.edu',
        profile: { firstName: 'Jordan', grade: 11, favoriteActivity: 'Strength training' },
      },
      {
        username: 'sam.cyclist',
        email: 'sam.cyclist@mergington.edu',
        profile: { firstName: 'Sam', grade: 9, favoriteActivity: 'Cycling' },
      },
    ]);

    await Team.create([
      { name: 'Summit Sprinters', members: [users[0]._id, users[2]._id] },
      { name: 'Iron Owls', members: [users[1]._id] },
    ]);

    await Activity.create([
      { userId: users[0]._id, type: 'Running', durationMinutes: 35, points: 70, recordedAt: new Date('2026-09-02') },
      { userId: users[1]._id, type: 'Strength training', durationMinutes: 45, points: 90, recordedAt: new Date('2026-09-03') },
      { userId: users[2]._id, type: 'Cycling', durationMinutes: 50, points: 100, recordedAt: new Date('2026-09-04') },
    ]);

    await Leaderboard.create([
      { userId: users[2]._id, points: 420 },
      { userId: users[1]._id, points: 390 },
      { userId: users[0]._id, points: 350 },
    ]);

    await Workout.create([
      {
        title: 'Track Intervals',
        description: 'Alternate one fast lap with one recovery lap for a focused cardio session.',
        difficulty: 'Intermediate',
        durationMinutes: 30,
        tags: ['cardio', 'running'],
      },
      {
        title: 'Foundations Circuit',
        description: 'Complete three rounds of squats, push-ups, lunges, and a plank hold.',
        difficulty: 'Beginner',
        durationMinutes: 20,
        tags: ['strength', 'bodyweight'],
      },
      {
        title: 'Endurance Ride',
        description: 'Ride at a steady conversational pace with short cadence pickups.',
        difficulty: 'Advanced',
        durationMinutes: 60,
        tags: ['cycling', 'endurance'],
      },
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
