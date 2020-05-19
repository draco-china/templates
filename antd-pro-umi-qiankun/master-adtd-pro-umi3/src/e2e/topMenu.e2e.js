const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

describe('Homepage', () => {
  it('topmenu should have footer', async () => {
    const params = '?navTheme=light&layout=topmenu';
