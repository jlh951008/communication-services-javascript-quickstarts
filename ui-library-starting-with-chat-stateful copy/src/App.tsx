import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import {
  createStatefulChatClient,
  FluentThemeProvider,
  ChatClientProvider,
  ChatThreadClientProvider,
  DEFAULT_COMPONENT_ICONS
} from '@azure/communication-react';
import React from 'react';
import ChatComponents from './ChatComponentsStateful';
import { registerIcons } from '@fluentui/react';

function App(): JSX.Element {
  const endpointUrl = 'https://realestatecsresource.communication.azure.com';
  const userAccessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwNiIsIng1dCI6Im9QMWFxQnlfR3hZU3pSaXhuQ25zdE5PU2p2cyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3M18wMDAwMDAxNC1iMzA3LTdmZDktZjZjNy01OTNhMGQwMDJkNmYiLCJzY3AiOjE3OTIsImNzaSI6IjE2NjY3Njg1NTkiLCJleHAiOjE2NjY4NTQ5NTksImFjc1Njb3BlIjoiY2hhdCx2b2lwIiwicmVzb3VyY2VJZCI6IjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3MyIsInJlc291cmNlTG9jYXRpb24iOiJ1bml0ZWRzdGF0ZXMiLCJpYXQiOjE2NjY3Njg1NTl9.PfoiHiOpTqUtPC7hxbM2hYWqgn3eGUHyGr5IWU8xe59zJrLVnmOh9ic_T6UdYwFJux57Je_fmX5i3LAV6WvRZBfAshgtjrieyjMWYWC-Ck-c1D6hTR3ujJiaZSZTOYf6AVkAvh8cE1FP40g-w4APGAS7UNP5UWB3BNgFS1nkhMYwqvo8qJL4jsFfltMNYAIxfi26P2g0q5K86Ct5xCS_K8hjii4EUjV6pmBz4nzrtt1LgHz2WJr8T-nMi1iK-Nnx-IDiGUjhKeSiJXWiAH7xdQe7znM14t9gEveZCCYd0wzznaCxbtbLxiFgzJyiIwLnXE2ncCRig-eodtETVMb6zA';
  const userId = '8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-b307-7fd9-f6c7-593a0d002d6f';
  const threadId = '19:mKJpYjqejw11SuuMRlxeVaJSVncsHPbsxFVVx1-0JBs1@thread.v2';
  const displayName = 'test222';

  registerIcons({ icons: DEFAULT_COMPONENT_ICONS });

  const tokenCredential = new AzureCommunicationTokenCredential(userAccessToken);
  //Instantiate the statefulChatClient
  const statefulChatClient = createStatefulChatClient({
    userId: { communicationUserId: userId },
    displayName: displayName,
    endpoint: endpointUrl,
    credential: tokenCredential
  });

  const chatThreadClient = statefulChatClient.getChatThreadClient(threadId);

  //Listen to notifications
  statefulChatClient.startRealtimeNotifications();


  return (
    <FluentThemeProvider>
      <ChatClientProvider chatClient={statefulChatClient}>
        <ChatThreadClientProvider chatThreadClient={chatThreadClient}>
          <ChatComponents />
        </ChatThreadClientProvider>
      </ChatClientProvider>
    </FluentThemeProvider>
  );
}

export default App;