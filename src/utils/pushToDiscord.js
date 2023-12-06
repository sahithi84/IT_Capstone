import axios from "axios";

export function pushToDiscord({ fieldName, discordData }) {
  const webhookUrl =
    "https://discord.com/api/webhooks/1162273125921198140/WVNSHWPxuxAE7tN0H9Qin-na4_8fNHUEpZezdcG_3iXZpaZlDHqy-aU8PxjFequSevTz";

  //An array of Discord Embeds.
  let embeds = [
    {
      title: "Discord Webhook Example",
      color: 5174599,
      footer: {
        text: `📅 ${new Date()}`,
      },
      fields: [
        {
          name: `${fieldName}`?.toUpperCase(),
          value: `\`\`\`json\n${JSON.stringify(discordData, null, 2)}\`\`\``,
        },
      ],
    },
  ];

  //Stringify the embeds using JSON.stringify()
  let data = JSON.stringify({ embeds });

  //Create a config object for axios, you can also use axios.post("url", data) instead
  var config = {
    method: "POST",
    url: webhookUrl, // https://discord.com/webhook/url/here
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  //Send the request
  axios(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
