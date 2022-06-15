import {exampleHead, printLinkedList} from './printLinkedList'

test('test runs', () => {
  expect(printLinkedList(exampleHead)).toBe(undefined);
});