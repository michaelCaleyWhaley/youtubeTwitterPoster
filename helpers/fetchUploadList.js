import fetch from "node-fetch";

const fetchUploadList = async (uploadId) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&contentDetails&maxResults=1&playlistId=${uploadId}&key=${process.env.YT_API_KEY}`,
      { method: "GET" }
    );
    const json = await response.json();
    const { items } = json;
    const reducedItems = items.map(
      ({
        snippet: {
          publishedAt,
          title,
          thumbnails: { medium },
          position,
          resourceId: { videoId },
        },
      }) => ({ publishedAt, title, thumbnail: medium, position, videoId })
    );

    return reducedItems;
  } catch (e) {
    return { error: e };
  }
};

export default fetchUploadList;
