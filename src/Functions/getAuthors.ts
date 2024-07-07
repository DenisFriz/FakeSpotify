import { IArtist } from "../GlobalTypes/PlaylistTypes";

export const getsAuthors = (arr: IArtist[]) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].name);
  }
  return res.join(", ");
};
