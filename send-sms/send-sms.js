const {SmsClient} = require('@azure/communication-sms');

// This code demonstrates how to fetch your connection string
// from an environment variable.
const connectionString = 'endpoint=https://realestatecsresource.communication.azure.com/;accesskey=aI0GndKEkHwgxJndj7XSnNEEfXqOZMQi49azz27h33Swgfdau/4WcK5YBqIUeMiaUc1/c5xVmUcMfNwMdlpvyA==';

// Instantiate the SMS client
const smsClient = new SmsClient(connectionString);

async function main(){
    const sendResults = await smsClient.send({
      from: "+18883545522",
      to: ["+8615651851639"],
      message: "Hello World 👋🏻 via SMS"
      });
    
      // individual messages can encounter errors during sending
      // use the "successful" property to verify
      for (const sendResult of sendResults) {
        if (sendResult.successful) {
          console.log("Success: ", sendResult);
        } else {
          console.error("Something went wrong when trying to send this message: ", sendResult);
        }
      }
}

main();