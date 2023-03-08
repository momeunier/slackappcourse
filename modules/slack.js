const axios = require("axios");
const config = require("../config.js");
const sendDM = async (userId, message) => {
  try {
    const conversationResponse = await axios.post(
      "https://slack.com/api/conversations.open",
      {
        users: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${config.botToken}`,
        },
      }
    );
    console.log(conversationResponse.data);

    const postResponse = await axios.post(
        "https://slack.com/api/chat.postMessage",
        {
          channel: conversationResponse.data.channel.id,
          text: message
        },
        {
          headers: {
            Authorization: `Bearer ${config.botToken}`,
          },
        }
      );
  
    console.log(postResponse.data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendDM,
};
