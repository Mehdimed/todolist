import { render, screen } from '@testing-library/react';
import Navbar from './Navbar'

test('affiche bien la navbar' , () => {
    render(<Navbar />);
  const elem = document.querySelector('#navbar')
  expect(elem).toBeVisible();
})