import express from 'express';
import { findTrack } from './tracks';

const router = express.Router();

router.get('/tracks/:title', async (req, res, next) => {
  try {
    const { title } = req.params;
    const track = await findTrack({ title });
    if (!track) {
      res.status(404).send('Track not found');
      return;
    }

    res.status(200).json(track);
  } catch (error) {
    next(error);
  }
});

export default router;
