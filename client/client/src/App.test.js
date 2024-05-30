// src/App.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Utility function to render the app with Router
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: Router });
};

test('renders home page with link to player', () => {
  renderWithRouter(<App />);
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();
});

test('renders player component when navigating to /player/:id', () => {
  renderWithRouter(<App />, { route: '/player/1' });
  const videoElement = screen.getByRole('video');
  expect(videoElement).toBeInTheDocument();
});

test('renders comment section in player component', async () => {
  renderWithRouter(<App />, { route: '/player/1' });
  const commentSection = await screen.findByText(/add a comment/i);
  expect(commentSection).toBeInTheDocument();
});

test('renders like button in player component', async () => {
  renderWithRouter(<App />, { route: '/player/1' });
  const likeButton = await screen.findByRole('button', { name: /like/i });
  expect(likeButton).toBeInTheDocument();
});