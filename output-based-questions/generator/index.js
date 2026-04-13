function* mystery() {
  yield 1;
  yield yield 2;
}
const it = mystery();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);