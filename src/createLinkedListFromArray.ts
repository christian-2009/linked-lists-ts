interface LLNode {
  val: number;
  next: LLNode | null;
}

export function createLinkedListFromArray(values: number[]): LLNode | null {
  if (values.length === 0) {
    return null;
  }
  const linkedList: LLNode = { val: values[0], next: null };
  let current = linkedList;

  for (let i = 1; i < values.length; i++) {
    current.next = { val: values[i], next: null };
    current = current.next;
  }
  return linkedList;
}
