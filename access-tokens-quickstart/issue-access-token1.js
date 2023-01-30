const { CommunicationIdentityClient } = require('@azure/communication-identity');
const { AzureKeyCredential } = require('@azure/core-auth');
const { DefaultAzureCredential } = require('@azure/identity');
const { AzureCommunicationTokenCredential } = require('@azure/communication-common');
const { ChatClient } = require('@azure/communication-chat');

const main = async () => {
    console.log('1111');
    let endpointUrl = 'https://realestatecsresource.communication.azure.com/';
    let userAccessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwNiIsIng1dCI6Im9QMWFxQnlfR3hZU3pSaXhuQ25zdE5PU2p2cyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3M18wMDAwMDAxNC1iMjMyLTU5YjUtOTEyYi0zNDNhMGQwMGZmYzkiLCJzY3AiOjE3OTIsImNzaSI6IjE2NjY3NTQ1OTAiLCJleHAiOjE2NjY4NDA5OTAsImFjc1Njb3BlIjoidm9pcCIsInJlc291cmNlSWQiOiIwYjc0ZDM1My1mMDQyLTQ0YzEtOGRkZC0wNThhM2FhMzM1NzMiLCJyZXNvdXJjZUxvY2F0aW9uIjoidW5pdGVkc3RhdGVzIiwiaWF0IjoxNjY2NzU0NTkwfQ.Qt9QwtkepplxieUVU4zTbCST-DXpf3Ucz5eVY0UdTcB0_OI__vAac_yi9_DOoUv5SKnkCU1MxakzpalJcONH4L8-ipEumYa8Q_cA_ASLAtaWTU7apLKDlU671L_2MtsFvXsTRFkPPdxKDQY3wgQ_P96hePWtnb4dHOEO3gi1Y8Sa_BU4sSEfw_zlkWBO-ORd_xLdNNrzBK_JcXXqVi7m6mG7TLO4bt04TiyhPWH6u1E71C_qBIGBn9RnETUrLoJ4gGDA20H70sMNHyyBgG_1yALEEvHf6fIOuIMsIMI5O-DO-PwnutisEeLRd3GLa4X4Y5d7V5SQ9AlmrLAoGG7bjg';
    
    let chatClient = new ChatClient(endpointUrl, new AzureCommunicationTokenCredential(userAccessToken));
    console.log('Azure Communication Chat client created!');

};

main().catch((error) => {
    console.log("Encountered an error");
    console.log(error);
})