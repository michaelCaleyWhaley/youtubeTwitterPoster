import fs from "fs";
import path from "path";

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();

const writeLastPublished = (lastPublished) => {
  fs.writeFile(`${__dirname}/store/post.txt`, lastPublished, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
    // eslint-disable-next-line no-console
    console.log(`Last published written`);
  });
};

export default writeLastPublished;
