import { ObjectId } from 'bson';

export type Track = {
  _id?: ObjectId;
  title: string;
  artist: string;
  albumCover: string | null;
};

export type Users = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
