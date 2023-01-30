import {
  AzureCommunicationTokenCredential,
  CommunicationUserIdentifier,
} from "@azure/communication-common";
import {
  ChatComposite,
  fromFlatCommunicationIdentifier,
  useAzureCommunicationChatAdapter,
} from "@azure/communication-react";
import React, { useMemo } from "react";
import fileDownloadHandler from "./FileDownloadhandler";

import fileUploadHandler from "./FileUploadHandler";

function App(): JSX.Element {
  // Common variables
  const endpointUrl = "https://realestatecsresource.communication.azure.com";
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwNiIsIng1dCI6Im9QMWFxQnlfR3hZU3pSaXhuQ25zdE5PU2p2cyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3M18wMDAwMDAxNC1mYWRjLTAzODYtNmEwYi0zNDNhMGQwMDM5NGMiLCJzY3AiOjE3OTIsImNzaSI6IjE2Njc5NzM2NjkiLCJleHAiOjE2NjgwNjAwNjksImFjc1Njb3BlIjoiY2hhdCx2b2lwIiwicmVzb3VyY2VJZCI6IjBiNzRkMzUzLWYwNDItNDRjMS04ZGRkLTA1OGEzYWEzMzU3MyIsInJlc291cmNlTG9jYXRpb24iOiJ1bml0ZWRzdGF0ZXMiLCJpYXQiOjE2Njc5NzM2Njl9.UTYEXRu15q9kdXs8DRtoyUrmwAI2FvToV5wfUGxCT16e6S9kAeR8_4Yx-WlAaBJdiKHQKCNd_E6U-cDfhNK7ZhYU7f8AERwBbQKPp3jaWMdHQA5dfHYoT2kmLraZClcJJFpFVY-wjaT7wjAu6B-w30FslsU_lPYIuB_pBQZLeY3hENhqiU9Z-POk6BpIOH3LA8-y5l7uA5ul2iR4PWrhaG2QATBymIU1DLZxwh-QILsLschKB79N3tWX_HeZHAqFUtNbu6HXauczzgoxHJ6mCtkgDLnXksvFo4F4zbEKqHpglLR65MsFv528FVb8J_GIiSEwoR7GkdSDTL9BtVLygg";
  const userId = "8:acs:0b74d353-f042-44c1-8ddd-058a3aa33573_00000014-fadc-0386-6a0b-343a0d00394c";
  const threadId = "19:CJd-GwZ_Nm5-HAs_1yCPT9yQo0bPvqHor3kJ5lcxk701@thread.v2";
  const displayName = "xxx";

  // We can't even initialize the Chat and Call adapters without a well-formed token.
  const credential = useMemo(() => {
    try {
      return new AzureCommunicationTokenCredential(token);
    } catch {
      console.error("Failed to construct token credential");
      return undefined;
    }
  }, [token]);

  // Memoize arguments to `useAzureCommunicationChatAdapter` so that
  // a new adapter is only created when an argument changes.
  const chatAdapterArgs = useMemo(
    () => ({
      endpoint: endpointUrl,
      userId: fromFlatCommunicationIdentifier(
        userId
      ) as CommunicationUserIdentifier,
      displayName,
      credential,
      threadId,
    }),
    [userId, displayName, credential, threadId]
  );
  const chatAdapter = useAzureCommunicationChatAdapter(chatAdapterArgs);

  if (chatAdapter) {
    return (
      <div style={containerStyle}>
        <ChatComposite
          adapter={chatAdapter}
          options={{
            fileSharing: {
              uploadHandler: fileUploadHandler,
              downloadHandler: fileDownloadHandler,
              multiple: true,
            },
          }}
        />
      </div>
    );
  }
  if (credential === undefined) {
    return (
      <h3>Failed to construct credential. Provided token is malformed.</h3>
    );
  }
  return <h3>Initializing...</h3>;
}

const containerStyle = {
  height: "100%",
};

export default App;
