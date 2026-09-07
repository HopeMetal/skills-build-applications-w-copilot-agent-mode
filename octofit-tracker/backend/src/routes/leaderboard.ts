import { Router } from 'express';
import { Leaderboard } from '../models.js';

const router = Router();

router.get('/', async (_request, response) => {
  response.json(
    await Leaderboard.find().populate('userId', 'username').sort({ points: -1 }).lean(),
  );
});

router.post('/', async (request, response) => {
  const entry = await Leaderboard.create(request.body);
  response.status(201).json(entry);
});

export default router;
