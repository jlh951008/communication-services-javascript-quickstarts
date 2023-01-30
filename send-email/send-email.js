const { EmailClient } = require("@azure/communication-email");

const connectionString = "endpoint=https://realestatecsresource.communication.azure.com/;accesskey=aI0GndKEkHwgxJndj7XSnNEEfXqOZMQi49azz27h33Swgfdau/4WcK5YBqIUeMiaUc1/c5xVmUcMfNwMdlpvyA==";
const client = new EmailClient(connectionString);
const sender = "DoNotReply@2e6b0cfc-424f-4090-b6e2-10a2d7cc9a62.azurecomm.net";
const emailContent = {
  subject: "Send email quick start test- JS sample",
  plainText: "Test Email from JS Send Email Sample Application\n\n This email is part of testing of email communication service. \\n Best wishes",
  html: "<html><head><title>ACS Email as a Service</title></head><body><h1>ACS Email as a Service - Html body</h1><h2>This email is part of testing of email communication service</h2></body></html>",
};
const toRecipients = {
  to: [
    { email: "isaacji@microsoft.com", displayName: "DoNotReply" },
  ],
};

async function main() {
  try {
    const emailMessage = {
      sender: sender,
      content: emailContent,
      recipients: toRecipients,
    };

    const sendResult = await client.send(emailMessage);

    if (sendResult && sendResult.messageId) {
      // check mail status, wait for 5 seconds, check for 60 seconds.
      const messageId = sendResult.messageId;
      if (messageId === null) {
        console.log("Message Id not found.");
        return;
      }

      console.log("Send email success, MessageId :", messageId);

      let counter = 0;
      const statusInterval = setInterval(async function () {
        counter++;
        try {
          const response = await client.getSendStatus(messageId);
          if (response) {
            console.log(`Email status for {${messageId}} : [${response.status}]`);
            if (response.status.toLowerCase() !== "queued" || counter > 12) {
              clearInterval(statusInterval);
            }
          }
        } catch (e) {
          console.log("Error in checking send mail status: ",e);
        }
      }, 5000);
    } else {
      console.error("Something went wrong when trying to send this email: ", sendResult);
    }
  } catch (e) {
    console.log("################### Exception occoured while sending email #####################", e);
  }
}

main();
