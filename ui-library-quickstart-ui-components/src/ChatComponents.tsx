import {
  MessageThread,
  ChatMessage as WebUiChatMessage,
  SendBox,
  MessageStatus,
  MessageContentType,
  DEFAULT_COMPONENT_ICONS,
  MessageStatusIndicator
} from '@azure/communication-react';
import React, { useEffect } from 'react';
import { registerIcons } from '@fluentui/react';
import { ChatClient, ChatThreadClient,ChatMessage } from "@azure/communication-chat";
import { AzureCommunicationTokenCredential } from "@azure/communication-common";
import { findDOMNode } from 'react-dom';

let chatClient;
let chatThreadClient;



 export var ChatComponents = ()=> {

  useEffect(() => {
    registerIcons({ icons: DEFAULT_COMPONENT_ICONS });
  }, [])

  
   function init1() {
    const endpointUrl = "https://realestatecsresource.communication.azure.com";
    let token= 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwNiIsIng1dCI6Im9QMWFxQnlfR3hZU3pSaXhuQ25zdE5PU2p2cyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3M18wMDAwMDAxNC1jYmJmLWM5Y2QtZDY4YS0wODQ4MjIwMDJiNjgiLCJzY3AiOjE3OTIsImNzaSI6IjE2NjcxODMyOTAiLCJleHAiOjE2NjcyNjk2OTAsImFjc1Njb3BlIjoiY2hhdCx2b2lwIiwicmVzb3VyY2VJZCI6IjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3MyIsInJlc291cmNlTG9jYXRpb24iOiJ1bml0ZWRzdGF0ZXMiLCJpYXQiOjE2NjcxODMyOTB9.gaF-1Jjw1viJfMDcEZZzJWJgxjofbTxOyGqUj4sQOoFtGDuaEbvzj9mv0mKogpk-KAj3B0fIX1k2jbEzmXINGGhHFtjJozjdVwfo7boyLKy_84PRlVEzBpniw_Zvy_cD2u-VBPrCt6tXgadEY8QDjn-f-BC-FxWIV3yNenymsVf16PKAmh1oma69SHBt9msHQu_z8FJFQp8EDwaTEUKDL0u-11GaFw3x1oMYmVTUZVk_OHa_M4Y4Va-KnnQkMMyhYzz0FGIFCbF-0ADQQ6_xTbgUIxyVGuslJ-paD_9q6RnGr5BRLFW29t1Bt_iZvNXJwUVsQ19We3EfbrBBnphRlg'
    let userId='8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-cbbf-c9cd-d68a-084822002b68'
    
    var thid='19:iwFIDkIupBtDN-Vr1SsEd-nJA27tilxVshas8iq9dEE1@thread.v2';
    chatClient = new ChatClient(
      endpointUrl,
      new AzureCommunicationTokenCredential(token)
    );
    chatThreadClient =  chatClient.getChatThreadClient(thid);
    
    let msg=  chatThreadClient.listMessages();
    let outmsg: WebUiChatMessage[]=[
      {
        messageType: 'chat',
        contentType: 'text' as MessageContentType,
        senderId: '1',
        senderDisplayName: 'User1',
        messageId: Math.random().toString(),
        content: 'Hi everyone, I created this awesome group chat for us!',
        createdOn: new Date('2019-04-13T00:00:00.000+08:10'),
        mine: true,
        attached: false,
        status: 'seen' as MessageStatus
      },
      {
        messageType: 'chat',
        contentType: 'text' as MessageContentType,
        senderId: '2',
        senderDisplayName: 'User2',
        messageId: Math.random().toString(),
        content: 'Nice! This looks great!',
        createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
        mine: false,
        attached: false
      },
    ];
    return outmsg;
  }

  var msg11: WebUiChatMessage[] = [
    {
      messageType: 'chat',
      contentType: 'text' as MessageContentType,
      senderId: '1',
      senderDisplayName: 'User1',
      messageId: Math.random().toString(),
      content: 'Hi everyone, I created this awesome group chat for us!',
      createdOn: new Date('2019-04-13T00:00:00.000+08:10'),
      mine: true,
      attached: false,
      status: 'seen' as MessageStatus
    },
    {
      messageType: 'chat',
      contentType: 'text' as MessageContentType,
      senderId: '2',
      senderDisplayName: 'User2',
      messageId: Math.random().toString(),
      content: 'Nice! This looks great!',
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: false
    },
    {
      messageType: 'chat',
      contentType: 'text' as MessageContentType,
      senderId: '3',
      senderDisplayName: 'User3',
      messageId: Math.random().toString(),
      content: "Yeah agree, let's chat here from now on!",
      createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
      mine: false,
      attached: false
    }];
  //A sample chat history
  const GetHistoryChatMessages = (): WebUiChatMessage[] => {
    return  [
      {
        messageType: 'chat',
        contentType: 'text' as MessageContentType,
        senderId: '1',
        senderDisplayName: 'User1',
        messageId: Math.random().toString(),
        content: 'RealEstate',
        createdOn: new Date('2019-04-13T00:00:00.000+08:10'),
        mine: true,
        attached: false,
        status: 'seen' as MessageStatus
      },
      {
        messageType: 'chat',
        contentType: 'text' as MessageContentType,
        senderId: '2',
        senderDisplayName: 'User2',
        messageId: Math.random().toString(),
        content: 'Landlord Service',
        createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
        mine: false,
        attached: false
      },
      {
        messageType: 'chat',
        contentType: 'text' as MessageContentType,
        senderId: '3',
        senderDisplayName: 'User3',
        messageId: Math.random().toString(),
        content: "Chat Service",
        createdOn: new Date('2019-04-13T00:00:00.000+08:09'),
        mine: false,
        attached: false
      }
    ];
  };

  return (
    <div style={{ height: '30rem', width: '30rem' }}>
      {/* Chat thread component with message status indicator feature enabled */}
      <MessageThread userId={'1'} messages={GetHistoryChatMessages()} showMessageStatus={true}  />

      <SendBox
        disabled={false}
        onSendMessage={async () => {
          msg11=init1();
          console.log(msg11);
          var dom=findDOMNode(this);
          console.log(dom);
          return;
        }}
        onTyping={async () => {
          return;
        }}
      />
    </div>
  );
};