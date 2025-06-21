class StringBuilder {
  #velue;
  constructor(initialValue) {
    this.#velue = initialValue;
  }
  getValue() {
    return this.#velue;
  }
  padEnd(str) {
    this.#velue += str;
  }
  padStart(str) {
    this.#velue = str + this.#velue;
  }
  padBoth(str) {
    this.#velue = str + this.#velue + str;
  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
