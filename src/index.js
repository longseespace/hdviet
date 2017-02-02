// @flow
import axios from 'axios';
import querystring from 'querystring';
import cappedMap from 'lodash/fp/map';
const map = cappedMap.convert({ cap: false });
import { newModelFromJson } from './helper';
import type {
  User,
  MovieParams,
  MovieList,
  Playlist,
} from './types';

const API_URL = 'http://rest.hdviet.com/api/v3/';
const AUTH_API_URL = 'https://id.hdviet.com/authentication/login';

export async function loginAnonymously() : Promise<User> {
  const { data } = await axios.post(AUTH_API_URL);
  if (data.error) {
    throw new Error(data.error);
  }
  return newModelFromJson(data.data);
}

export async function login(
  email: string,
  password: string,
  key: string,
  captcha: string
) : Promise<User> {
  const { data } = await axios.post(AUTH_API_URL, querystring.stringify({
    email,
    password,
    key,
    captcha,
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (data.error) {
    throw new Error(data.error);
  }
  return newModelFromJson(data.data);
}

const api = axios.create({
  'baseURL': API_URL,
  'timeout': 30000, // 30seconds
});

class HDViet {
  accessToken: string;

  constructor() {
    this.accessToken = '';
  }

  async loginAnonymously() : Promise<User> {
    const user = await loginAnonymously();
    this.accessToken = user.accessToken;
    api.defaults.headers.common.Authorization = this.accessToken;
    return user;
  }

  async login(email: string, password: string, key: string, captcha: string) : Promise<User> {
    const user = await login(email, password, key, captcha);
    this.accessToken = user.accessToken;
    api.defaults.headers.common.Authorization = this.accessToken;
    return user;
  }

  async getMovies(params: MovieParams) : Promise<MovieList> {
    const { data } = await api.get('movie/filter', { params });
    return {
      pager: newModelFromJson(data.data.metadata),
      movies: map(newModelFromJson, data.data.lists),
    };
  }

  async getPlaylist(movieId: number): Promise<Playlist> {
    const { data } = await api.get(`playlist/${movieId}`, {
      params: { w: 1920 },
    });
    return {
      url: data.data.playList,
      subtitles: map(newModelFromJson, data.data.subtitle),
    };
  }
}

export default HDViet;
