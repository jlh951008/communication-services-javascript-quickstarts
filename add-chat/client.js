// <Create a chat client>

const { AzureCommunicationTokenCredential } = require('@azure/communication-common');
const { ChatClient } = require('@azure/communication-chat');
const { ChatThreadClient } = require('@azure/communication-chat');

console.log('1111');
let endpointUrl = 'https://realestatecsresource.communication.azure.com';
let userAccessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwNiIsIng1dCI6Im9QMWFxQnlfR3hZU3pSaXhuQ25zdE5PU2p2cyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3M18wMDAwMDAxNC1mYWRjLTAzODYtNmEwYi0zNDNhMGQwMDM5NGMiLCJzY3AiOjE3OTIsImNzaSI6IjE2Njc5NzM2NjkiLCJleHAiOjE2NjgwNjAwNjksImFjc1Njb3BlIjoiY2hhdCx2b2lwIiwicmVzb3VyY2VJZCI6IjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3MyIsInJlc291cmNlTG9jYXRpb24iOiJ1bml0ZWRzdGF0ZXMiLCJpYXQiOjE2Njc5NzM2Njl9.UTYEXRu15q9kdXs8DRtoyUrmwAI2FvToV5wfUGxCT16e6S9kAeR8_4Yx-WlAaBJdiKHQKCNd_E6U-cDfhNK7ZhYU7f8AERwBbQKPp3jaWMdHQA5dfHYoT2kmLraZClcJJFpFVY-wjaT7wjAu6B-w30FslsU_lPYIuB_pBQZLeY3hENhqiU9Z-POk6BpIOH3LA8-y5l7uA5ul2iR4PWrhaG2QATBymIU1DLZxwh-QILsLschKB79N3tWX_HeZHAqFUtNbu6HXauczzgoxHJ6mCtkgDLnXksvFo4F4zbEKqHpglLR65MsFv528FVb8J_GIiSEwoR7GkdSDTL9BtVLygg';
let accessKey='aI0GndKEkHwgxJndj7XSnNEEfXqOZMQi49azz27h33Swgfdau/4WcK5YBqIUeMiaUc1/c5xVmUcMfNwMdlpvyA=='

let chatClient = new ChatClient(endpointUrl, new AzureCommunicationTokenCredential(userAccessToken));
console.log('Azure Communication Chat client created!');
const threads1 = chatClient.listChatThreads();
console.log(threads1);
// for (const i of threads1){
//     // console.log(i);
// }
// <Start a chat thread> 19:mKJpYjqejw11SuuMRlxeVaJSVncsHPbsxFVVx1-0JBs1@thread.v2
async function createChatThread() {
    const createChatThreadRequest = {
        topic: "Calling Appl11ication"
    };
    const createChatThreadOptions = {
        participants: [
            {
                id: { communicationUserId: '8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-fadc-0386-6a0b-343a0d00394c' },
                displayName: 'testname'
            }
        ]
    };
    const createChatThreadResult = await chatClient.createChatThread(
        createChatThreadRequest,
        createChatThreadOptions
    );
    const threadId = createChatThreadResult.chatThread.id;
    return threadId;
}

createChatThread().then(async threadId => {
    console.log(`Thread created:${threadId}`);

    // <Get a chat thread client>
    let chatThreadClient = chatClient.getChatThreadClient(threadId);
    console.log(`Chat Thread client for threadId:${threadId}`);

    // <List all chat threads>
    const threads = chatClient.listChatThreads();
    for await (const thread of threads) {
        console.log(`Chat Thread item:${thread.id}`);
    }

    // <Receive chat messages from a chat thread>
    chatClient.startRealtimeNotifications();
    chatClient.on("chatMessageReceived", async (e) => {
        console.log("Notification chatMessageReceived!");
    });

    // <Send a message to a chat thread>
    const sendMessageRequest =
    {
        content: 'Hello Geeta! Can you share the deck for the conference?'
    };
    let sendMessageOptions =
    {
        senderDisplayName: 'Jack',
        type: 'text'
    };

    const sendChatMessageResult = await chatThreadClient.sendMessage(sendMessageRequest, sendMessageOptions);
    const messageId = sendChatMessageResult.id;

    // <LIST MESSAGES IN A CHAT THREAD>
    const messages = chatThreadClient.listMessages();
    for await (const message of messages) {
        console.log(`Chat Thread message id:${message.id}`);
    }

    // <Add a user as a participant to the chat thread>
    const addParticipantsRequest =
    {
        participants: [
            {
                id: { communicationUserId: '8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-b208-14f0-e429-343a0d0026f3' },
                displayName: 'Jane'
            }
        ]
    };
    await chatThreadClient.addParticipants(addParticipantsRequest);

    // <List users in a chat thread>
    const participants = chatThreadClient.listParticipants();
    for await (const participant of participants) {
        console.log(`participants in thread:${participant.id.communicationUserId}`);
    }

    // <Remove user from a chat thread>
    await chatThreadClient.removeParticipant({ communicationUserId: '8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-b208-14f0-e429-343a0d0026f3' });
    const users = chatThreadClient.listParticipants();
    for await (const user of users) {
        console.log(`participants in thread available:${user.id.communicationUserId}`);
    }
});

