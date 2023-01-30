import { CallClient, CallAgent } from "@azure/communication-calling";
import { AzureCommunicationTokenCredential } from "@azure/communication-common";
import { CommunicationIdentityClient } from "@azure/communication-identity";
import { ChatClient, ChatThreadClient } from "@azure/communication-chat";

let call;
let callAgent;
let chatClient;
let chatThreadClient;

const meetingLinkInput = document.getElementById('teams-link-input');
const threadIdInput = document.getElementById('thread-id-input');
const callButton = document.getElementById("join-meeting-button");
const hangUpButton = document.getElementById("hang-up-button");
const callStateElement = document.getElementById('call-state');

const messagesContainer = document.getElementById("messages-container");
const chatBox = document.getElementById("chat-box");
const sendMessageButton = document.getElementById("send-message");
const messagebox = document.getElementById("message-box");

var userId = '';
var messages = '';
//https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjJkNjEzNDgtNzlmMi00MDRlLThlNTUtZTk2MWJhY2QxNjgy%40thread.v2/0?context=%7b%22Tid%22%3a%2272f988bf-86f1-41af-91ab-2d7cd011db47%22%2c%22Oid%22%3a%228df0c469-611e-4ed8-9b42-b8cc13d90c22%22%7d
var thid='19:CJd-GwZ_Nm5-HAs_1yCPT9yQo0bPvqHor3kJ5lcxk701@thread.v2';
// var thid='19:meeting_YjJkNjEzNDgtNzlmMi00MDRlLThlNTUtZTk2MWJhY2QxNjgy@thread.v2';

async function init() {

	// const identityClient = new CommunicationIdentityClient(connectionString);

	// let identityResponse = await identityClient.createUser();
	// userId = identityResponse.communicationUserId;
	// console.log(`\nCreated an identity with ID: ${identityResponse.communicationUserId}`

	// let tokenResponse = await identityClient.getToken(identityResponse, [
	// 	"voip",
	// 	"chat",
	// ]);

	// const { token, expiresOn } = tokenResponse;
	// console.log(`\nIssued an access token that expires at: ${expiresOn}`);
	// console.log(token);

	// const callClient = new CallClient();
	// const tokenCredential = new AzureCommunicationTokenCredential(token);
	// callAgent = await callClient.createCallAgent(tokenCredential);
	callButton.disabled = false;

    // const createChatThreadRequest = {
    //     topic: "Calling Appl11ication"
    // };
    // const createChatThreadOptions = {
    //     participants: [
    //         {
    //             id: { communicationUserId: '8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-cbbf-c9cd-d68a-084822002b68' },
    //             displayName: 'testname'
    //         }
    //     ]
    // };
    // const createChatThreadResult = await chatClient.createChatThread(
    //     createChatThreadRequest,
    //     createChatThreadOptions
    // );
   	// thid = createChatThreadResult.chatThread.id;
	// console.log(thid);
}

init();

function sendmsg(e){
	console.log(e)
	if (e.sender.communicationUserId != userId) {
		renderReceivedMessage(e.content.message);
	 }
	 else {
		renderSentMessage(e.content.message);
	 }
}

callButton.addEventListener("click", async () => {
	const connectionString = "endpoint=https://realestatecsresource.communication.azure.com/;accesskey=aI0GndKEkHwgxJndj7XSnNEEfXqOZMQi49azz27h33Swgfdau/4WcK5YBqIUeMiaUc1/c5xVmUcMfNwMdlpvyA==";
	const endpointUrl = "https://realestatecsresource.communication.azure.com";
	let token= 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwNiIsIng1dCI6Im9QMWFxQnlfR3hZU3pSaXhuQ25zdE5PU2p2cyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3M18wMDAwMDAxNC1mYWRjLTAzODYtNmEwYi0zNDNhMGQwMDM5NGMiLCJzY3AiOjE3OTIsImNzaSI6IjE2Njc5NzM2NjkiLCJleHAiOjE2NjgwNjAwNjksImFjc1Njb3BlIjoiY2hhdCx2b2lwIiwicmVzb3VyY2VJZCI6IjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3MyIsInJlc291cmNlTG9jYXRpb24iOiJ1bml0ZWRzdGF0ZXMiLCJpYXQiOjE2Njc5NzM2Njl9.UTYEXRu15q9kdXs8DRtoyUrmwAI2FvToV5wfUGxCT16e6S9kAeR8_4Yx-WlAaBJdiKHQKCNd_E6U-cDfhNK7ZhYU7f8AERwBbQKPp3jaWMdHQA5dfHYoT2kmLraZClcJJFpFVY-wjaT7wjAu6B-w30FslsU_lPYIuB_pBQZLeY3hENhqiU9Z-POk6BpIOH3LA8-y5l7uA5ul2iR4PWrhaG2QATBymIU1DLZxwh-QILsLschKB79N3tWX_HeZHAqFUtNbu6HXauczzgoxHJ6mCtkgDLnXksvFo4F4zbEKqHpglLR65MsFv528FVb8J_GIiSEwoR7GkdSDTL9BtVLygg'
	userId='8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-fadc-0386-6a0b-343a0d00394c'
	if (meetingLinkInput.value=='user1'){
		console.log(meetingLinkInput.value);
		token= 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwNiIsIng1dCI6Im9QMWFxQnlfR3hZU3pSaXhuQ25zdE5PU2p2cyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3M18wMDAwMDAxNC1mYWU1LWZlMjMtNGZmNy0zNDNhMGQwMDM3ZmUiLCJzY3AiOjE3OTIsImNzaSI6IjE2Njc5NzQzMjMiLCJleHAiOjE2NjgwNjA3MjMsImFjc1Njb3BlIjoiY2hhdCx2b2lwIiwicmVzb3VyY2VJZCI6IjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3MyIsInJlc291cmNlTG9jYXRpb24iOiJ1bml0ZWRzdGF0ZXMiLCJpYXQiOjE2Njc5NzQzMjN9.kej6cX4YuWuoVV0ImGpamvCIn_phGprdsFF9QmG9mPWdtrmgWtlpI3HqUA4H7NnpwHGthlazC4H43AyTh3Qh3sTVL59HyjXNxnvjNKYgg31DZNXbeUN4Ccf2jpqqgouUzc3K0sx7cOJQROWU6XtRmbNLY_k83D9Yn8LAaLbuGV9DWUkFZDbeGjkhoioG4NMXlUpN1vDcG9XpfxU6POvR1Gvv-E5fu0eskuEPK-42_MFRLuUCS2xLvGft0Cq7LLXr4TcAg5sayepjuI9SJwSo3uxGzF9tueGgCQkBotHsM7bK2x5Y3zBMDQvUwB394gOb7y90GJ7K-66xd1ND3pck9w'
		userId='8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-fae5-fe23-4ff7-343a0d0037fe'
	}
	// let token='eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwNiIsIng1dCI6Im9QMWFxQnlfR3hZU3pSaXhuQ25zdE5PU2p2cyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3M18wMDAwMDAxNC1jYmJmLWM5Y2QtZDY4YS0wODQ4MjIwMDJiNjgiLCJzY3AiOjE3OTIsImNzaSI6IjE2NjcxODMyOTAiLCJleHAiOjE2NjcyNjk2OTAsImFjc1Njb3BlIjoiY2hhdCx2b2lwIiwicmVzb3VyY2VJZCI6IjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3MyIsInJlc291cmNlTG9jYXRpb24iOiJ1bml0ZWRzdGF0ZXMiLCJpYXQiOjE2NjcxODMyOTB9.gaF-1Jjw1viJfMDcEZZzJWJgxjofbTxOyGqUj4sQOoFtGDuaEbvzj9mv0mKogpk-KAj3B0fIX1k2jbEzmXINGGhHFtjJozjdVwfo7boyLKy_84PRlVEzBpniw_Zvy_cD2u-VBPrCt6tXgadEY8QDjn-f-BC-FxWIV3yNenymsVf16PKAmh1oma69SHBt9msHQu_z8FJFQp8EDwaTEUKDL0u-11GaFw3x1oMYmVTUZVk_OHa_M4Y4Va-KnnQkMMyhYzz0FGIFCbF-0ADQQ6_xTbgUIxyVGuslJ-paD_9q6RnGr5BRLFW29t1Bt_iZvNXJwUVsQ19We3EfbrBBnphRlg'
	
	chatClient = new ChatClient(
		endpointUrl,
		new AzureCommunicationTokenCredential(token)
	);

	console.log('Azure Communication Chat client created!');
	// join with meeting link
	// call = callAgent.join({meetingLink: meetingLinkInput.value}, {});

	// call.on('stateChanged', () => {
	//     callStateElement.innerText = call.state;
	// })
	// toggle button and chat box states
	chatBox.style.display = "block";
	hangUpButton.disabled = false;
	callButton.disabled = true;

	messagesContainer.innerHTML = messages;


	// open notifications channel
	await chatClient.startRealtimeNotifications();

	// subscribe to new message notifications
	chatClient.on("chatMessageReceived", (e) => {
		console.log("Notification chatMessageReceived!");
		console.log(e.threadId);
      // check whether the notification is intended for the current thread
		// if (threadIdInput.value != e.threadId) {
		// 	return;
		// }
		console.log(e.sender.communicationUserId);
		console.log(userId);
		if (e.sender.communicationUserId != userId) {
		   renderReceivedMessage(e.message);
		}
		else {
		   renderSentMessage(e.message);
		}
	});

	chatThreadClient = await chatClient.getChatThreadClient(thid);
	let msg= await chatThreadClient.listMessages();
	var temp=(await msg.next()).value;
	sendmsg((await msg.next()).value);
	
	sendmsg(temp);
	console.log(chatThreadClient.getProperties());
	console.log(chatThreadClient.listParticipants());
	// const addParticipantsRequest =
    // {
    //     participants: [
    //         {
    //             id: { communicationUserId: '8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-fae5-fe23-4ff7-343a0d0037fe' },
    //             displayName: 'Isaac test'
    //         }
    //     ]
    // };
    // await chatThreadClient.addParticipants(addParticipantsRequest);
});

async function renderReceivedMessage(message) {
	messages += '<div class="container lighter">' + message + '</div>';
	messagesContainer.innerHTML = messages;
}

async function renderSentMessage(message) {
	messages += '<div class="container darker">' + message + '</div>';
	messagesContainer.innerHTML = messages;
}

hangUpButton.addEventListener("click", async () => 
	{
		// end the current call
		await call.hangUp();

		// toggle button states
		hangUpButton.disabled = true;
		callButton.disabled = false;
		callStateElement.innerText = '-';

		// toggle chat states
		chatBox.style.display = "none";
		messages = "";
	});

sendMessageButton.addEventListener("click", async () =>
	{
		let message = messagebox.value;

		let sendMessageRequest = { content: message };
		let sendMessageOptions = { senderDisplayName : threadIdInput.value };
		let sendChatMessageResult = await chatThreadClient.sendMessage(sendMessageRequest, sendMessageOptions);
		let messageId = sendChatMessageResult.id;

		messagebox.value = '';
		console.log(`Message sent!, message id:${messageId}`);
	});