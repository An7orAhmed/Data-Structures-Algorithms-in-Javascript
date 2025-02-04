
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  insert(key, value) {
    let index = this.hash(key);
    for (let i = 0; i < this.size; i++) {
      const currentIndex = (index + i) % this.size;
      if (this.table[currentIndex] === null) {
        this.table[currentIndex] = [key, value];
        return true;
      }
    }
    return false;
  }

  search(key) {
    let index = this.hash(key);
    for (let i = 0; i < this.size; i++) {
      const currentIndex = (index + i) % this.size;
      if (this.table[currentIndex] === null) {
        return null;
      }
      if (this.table[currentIndex][0] === key) {
        return this.table[currentIndex][1];
      }
    }
    return null;
  }

  remove(key) {
    let index = this.hash(key);
    for (let i = 0; i < this.size; i++) {
      const currentIndex = (index + i) % this.size;
      if (this.table[currentIndex] === null) {
        return null;
      }
      if (this.table[currentIndex][0] === key) {
        this.table[currentIndex] = null;
        return true;
      }
    }
    return null;
  }

  hash(key) {
    return key % this.size;
  }
}

