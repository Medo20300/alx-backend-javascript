export default function setFromArray(arr) {
  const set = new Set(arr);

  set[Symbol.for('nodejs.util.inspect.custom')] = function() {
    return `Set { ${Array.from(this).join(', ')} }`;
  };

  return set;
}

