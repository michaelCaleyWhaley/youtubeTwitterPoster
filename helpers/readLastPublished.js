import fs from "fs";
import path from "path";

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();

const readLastPublished = async () =>
  fs.readFileSync(`${__dirname}/store/post.txt`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    }
    return data;
  });

export default readLastPublished;
