import {createLinkedListFromArray} from './createLinkedListFromArray'

test('create linked list from array', () => {
  expect(createLinkedListFromArray([1,2,3])).toStrictEqual({val: 1, next: {val: 2, next: {val: 3, next: null}}});
  expect(createLinkedListFromArray([])).toStrictEqual(null);
  expect(createLinkedListFromArray([1])).toStrictEqual({val: 1, next: null})
});