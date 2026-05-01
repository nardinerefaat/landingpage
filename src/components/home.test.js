 



import { render, screen } from '@testing-library/react';
import Home from './home';
import userEvent from '@testing-library/user-event';
import { DataContext } from '../context/DataContext'


test('displays headset images', () => {
  render(<Home />);
  // Check if images are rendered (headset components)
  const images = screen.getAllByRole('img');
  expect(images.length).toBeGreaterThan(0);
  // expect(screen.getByRole("heading")).toBeInTheDocument
});


test('Home browse button is rendered and clickable', async () => {
  render(<Home />)
  const section = document.createElement('div');
  section.id = 'featuredProducts';
  section.scrollIntoView = jest.fn();
  document.body.appendChild(section);

  const button = screen.getByTestId('browse-btn');
  expect(button).toBeInTheDocument();
  await userEvent.click(button);
  expect(section.scrollIntoView).toHaveBeenCalled();
})
