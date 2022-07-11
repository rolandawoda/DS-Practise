const input = ["lint", "code", "love", "you"];

const encode = (list) => {
  let res = "";
  for (let i = 0; i < list.length; i++) {
    const str = list[i];
    res += String(str.length) + "#" + str;
  }
  return res;
};

const decode = (str) => {
  const res = [];
  let i = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "#") continue;
    const count = Number(str[i - 1]);
    res.push(str.substring(i + 1, count + i + 1));
    i += count;
  }
  return res;
};

const encodedString = encode(input);
console.log({ encodedString });
const decodedString = decode(encodedString);
console.log({ decodedString });
