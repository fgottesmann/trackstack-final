import express from 'express';
import { findTrack, findTracks } from './tracks';

const router = express.Router();
router.get('/tracks', async (_req, res) => {
  const tracks = await findTracks();
  res.status(200).json(tracks);
});

router.get('/tracks/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const track = await findTrack({ id });
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
