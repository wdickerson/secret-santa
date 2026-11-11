import { render, screen } from '@testing-library/react';
import App, { DRAWN_NAMES } from './App';

test('renders App', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  expect(true).toBe(true);
});

test('DRAWN_NAMES keys contain exactly the nine expected names', () => {
  expect(Object.keys(DRAWN_NAMES).sort()).toEqual([
    'Aliana',
    'Anca',
    'Babu',
    'Didi',
    'Julie',
    'Logan',
    'Melanie',
    'Paul',
    'Will',
  ]);
});

test('DRAWN_NAMES contains every name exactly once in its values', () => {
  expect(Object.values(DRAWN_NAMES).sort()).toEqual([
    'Aliana',
    'Anca',
    'Babu',
    'Didi',
    'Julie',
    'Logan',
    'Melanie',
    'Paul',
    'Will',
  ]);
});

test('DRAWN_NAMES never assigns someone their own name', () => {
  for (const [name, drawnName] of Object.entries(DRAWN_NAMES)) {
    expect(drawnName).not.toBe(name);
  }
});

test('DRAWN_NAMES paths never form a complete cycle through every name', () => {
  const names = Object.keys(DRAWN_NAMES);

  for (const startingName of names) {
    const visited = new Set();
    let name = startingName;

    while (!visited.has(name)) {
      visited.add(name);
      name = DRAWN_NAMES[name];
    }

    expect(visited.size).toBeLessThan(names.length);
  }
});
