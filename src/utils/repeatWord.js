export function repeatWord (word, count) {
    let arr = [];
    while (count > 0) {
      arr.unshift(word + count);
      count = count - 1;
    }
    let str;
    str = arr.join(", ");
    return str;
}
