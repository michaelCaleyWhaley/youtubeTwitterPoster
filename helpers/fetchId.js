import fetch from "node-fetch";

const fetchId = async () => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?key=${process.env.YT_API_KEY}&part=contentDetails&id=${process.env.YT_CHANNEL_ID}`,
    { method: "GET" }
  );
  const json = await response.json();
  const {
    items: [
      {
        contentDetails: {
          relatedPlaylists: { uploads: uploadId },
        },
      },
    ],
  } = json;
  return uploadId;
};

export default fetchId;
