/* eslint-disable no-console */
import fs from "fs";
import path from "path";

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();

const writeLastPublished = (lastPublished) => {
  fs.writeFile(`${__dirname}/store/post.txt`, lastPublished, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`Last published written`);
  });
};

export default writeLastPublished;
