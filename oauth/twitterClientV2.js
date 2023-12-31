const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config({ path: __dirname + "/.env" });

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

const bearer = new TwitterApi(process.env.BEARER_TOKEN);

const twitterClient2 = client.readWrite;
const twitterBearer2 = bearer.readOnly;

module.exports = { twitterClient2, twitterBearer2 };
