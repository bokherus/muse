import test from 'ava';
import {chunk} from './arrays.js';

test('chunk() - empty array', t => {
  const result = chunk([], 0);
  t.deepEqual(result, []);
});

test('chunk() - array size = 6, len = 3', t => {
  const result = chunk([1, 2, 3, 4, 5, 6], 3);
  t.deepEqual(result, [[1, 2, 3], [4, 5, 6]]);
});

