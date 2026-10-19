import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { getYoutubeEmbedUrl } from './pages/RecipePage';

test('renders the home page inside its router', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(
    screen.getByRole('heading', { name: /instant recipe/i }),
  ).toBeInTheDocument();
});

test('converts YouTube links to embed URLs and rejects other hosts', () => {
  expect(getYoutubeEmbedUrl('https://www.youtube.com/watch?v=abc123DEF_0')).toBe(
    'https://www.youtube.com/embed/abc123DEF_0',
  );
  expect(getYoutubeEmbedUrl('https://youtu.be/abc123DEF_0')).toBe(
    'https://www.youtube.com/embed/abc123DEF_0',
  );
  expect(getYoutubeEmbedUrl('https://example.com/watch?v=abc123DEF_0')).toBeNull();
});
