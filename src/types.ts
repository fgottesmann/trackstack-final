import { ObjectId } from 'bson';

export type Track = {
  _id?: ObjectId;
  id: string;
  title: string;
  artist: string;
  imgSrc?: string;
  url: string;
};

export type Users = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
