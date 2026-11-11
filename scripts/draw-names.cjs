// Developer-only: run with node scripts/draw-names.cjs.
// Prints a drawing to copy into DRAWN_NAMES; does not change any files.
const { randomInt } = require('node:crypto');

const names = [
  'Didi',
  'Babu',
  'Anca',
  'Paul',
  'Aliana',
  'Will',
  'Melanie',
  'Logan',
  'Julie',
];

while (true) {
  const recipients = [...names];

  // Fisher-Yates shuffle: every permutation is equally likely.
  for (let i = recipients.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [recipients[i], recipients[j]] = [recipients[j], recipients[i]];
  }

  if (names.some((name, index) => name === recipients[index])) {
    continue;
  }

  const drawing = Object.fromEntries(
    names.map((name, index) => [name, recipients[index]])
  );

  // A full cycle would reach every participant from any starting name.
  const visited = new Set();
  let name = names[0];
  while (!visited.has(name)) {
    visited.add(name);
    name = drawing[name];
  }

  if (visited.size === names.length) {
    continue;
  }

  console.log('export const DRAWN_NAMES = {');
  for (const name of names) {
    console.log(`  ${name}: '${drawing[name]}',`);
  }
  console.log('}');
  break;
}