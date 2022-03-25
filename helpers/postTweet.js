import Twitter from "twitter-lite";

const postTweet = async (message) => {
  const trConfig = {
    consumer_key: process.env.TR_CONSUMER_KEY,
    consumer_secret: process.env.TR_CONSUMER_SECRET,
    access_token_key: process.env.TR_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TR_ACCESS_TOKEN_SECRET,
  };

  const client = new Twitter(trConfig);

  try {
    await client.post("statuses/update", {
      status: `${message}`,
    });
    // eslint-disable-next-line no-console
    console.log("Successful tweet");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`e: `, e);
  }
};

export default postTweet;
