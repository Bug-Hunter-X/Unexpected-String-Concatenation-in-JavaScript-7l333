function foo(a, b) {
  // Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3

// Or using coercion
function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3