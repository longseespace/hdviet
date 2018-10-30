import HDViet from '../src';

describe('HDViet', () => {
  it('loginAnonymously() returns accessToken', async () => {
    const client = new HDViet();
    await client.loginAnonymously();
    expect(client.accessToken).toBeTruthy();
  });

  it('login() fails for bad logins', async () => {
    const client = new HDViet();
    try {
      await client.login('bad@email.com', 'notfound');
    } catch (e) {
      expect(e).toBeDefined();
    }
  });

  it('getMovies() returns correct data', async () => {
    const client = new HDViet();
    await client.loginAnonymously();
    const response = await client.getMovies({ genre: 1, page: 1, limit: 10 });
    expect(response.movies).toHaveLength(10);
  });
});
