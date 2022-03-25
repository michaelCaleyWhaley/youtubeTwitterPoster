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
  const uploadId = await fetchId();
  const uploadList = await fetchUploadList(uploadId);
  const ytPublishedAt = uploadList[0].publishedAt;
  const lastPublished = await readLastPublished();
  const hasAlreadyPosted = ytPublishedAt === lastPublished;
  if (hasAlreadyPosted) return;
  writeLastPublished(ytPublishedAt);
  const { title, videoId } = uploadList[0];
  postTweet(`${title} https://youtu.be/${videoId}`);
}
twitterYoutubePoster();