export default function setFromArray(arr) {
  const set = new Set(arr);

  // Create a custom output for the Set object
  set[Symbol.for('nodejs.util.inspect.custom')] = () => `Set { ${Array.from(set).join(', ')} }`;

  return set;
}
