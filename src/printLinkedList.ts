interface LLNode {
  val: number;
  next: LLNode | null;
}

const C: LLNode = { val: 3, next: null };
const B: LLNode = { val: 2, next: C };
const A: LLNode = { val: 1, next: B };
export const exampleHead: LLNode = A;

export function printLinkedList(head: LLNode | null): void {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}
