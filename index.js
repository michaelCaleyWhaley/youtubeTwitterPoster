import { config } from "dotenv";
import {
  fetchId,
  fetchUploadList,
  readLastPublished,
  writeLastPublished,
  postTweet,
} from "./helpers/index.js";

config();

async function twitterYoutubePoster() {
  try {
    const uploadId = await fetchId();
    const [lastUpload] = await fetchUploadList(uploadId);
    const ytPublishedAt = lastUpload.publishedAt;
    const lastPublished = await readLastPublished();
    const hasAlreadyPosted = ytPublishedAt === lastPublished;
    if (hasAlreadyPosted) {
      // eslint-disable-next-line no-console
      console.log(`LOG: hasAlreadyPosted`);
      return;
    }
    writeLastPublished(ytPublishedAt);
    const { title, videoId } = lastUpload;
    postTweet(`${title} https://youtu.be/${videoId}`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("e: ", e);
  }
}
twitterYoutubePoster();
