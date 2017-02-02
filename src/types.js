// @flow
export const GENDER_MALE = 0;
export const GENDER_FEMALE = 1;
export const GENDER_OTHER = 2;
export type Gender = 0 | 1 | 2;

export type User = {
  accessToken: string,
  userId: string,
  lastLogin: ?number,
  anonymous: boolean,

  joinedDate?: number,
  endDate?: number,
  gender?: Gender,
  ip?: string,
  address?: string,
  vipDay?: number,
  uuCode?: string,
  phone?: string,
  vip?: boolean,
  birthday?: ?number,
  avatar?: string,
  displayName?: string,
  email?: string,
  pinCode?: string,
}

export type Movie = {
  movieId: number,
  movieName: string,
  knownAs: string,
  plotVi: string,
  plotEn: string,
  bitRate: string,
}

export type Pager = {
  page: number,
  limit: number,
  totalRecord: number,
}

export type MovieList = {
  pager: Pager,
  movies: Array<Movie>
}

export type MovieGenre = 1 | 2;
export type MovieParams = {
  genre?: MovieGenre,
  page?: number,
  limit?: number,
}

export type Subtitle = {
  source: string,
  label: string,
  sub: string,
}

export type Playlist = {
  subtitles: Array<Subtitle>,
  url: string,
}
