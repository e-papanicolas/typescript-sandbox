function myFirstTypescriptFunc(name: string): void {
  console.log(`Hi, ${name}`);
}

// tuples of arrays
let monster: [
  string[],
  string[],
  string[][],
  string[][],
  string[][][][],
  string[][][][],
  number[][][][][][],
  number[],
  string[],
  boolean[],
  number[],
  string[],
  boolean[],
  number[][]
] = [
  [],
  [],
  [[]],
  [[]],
  [[[["X"]]]],
  [[[["X"]]]],
  [[[[[[1111111]]]]]],
  [],
  [],
  [],
  [],
  [],
  [],
  [[3]],
];
