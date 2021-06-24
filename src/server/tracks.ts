import { Collection } from 'mongodb';
import { Track } from '../types';
import { getCollection } from '../utils/database';

function getTrackCollection(): Collection<Track> {
  return getCollection<Track>('tracks');
}

export async function findTrack(track: Partial<Track>): Promise<Track | null> {
  return await getTrackCollection().findOne(track);
}
