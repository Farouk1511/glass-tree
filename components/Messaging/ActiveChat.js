// import React from "react";
// import { Paper } from "@mui/material";
// import SenderBubble from "./SenderBubble";
// import OtherUserBubble from "./OtherUserBubble";


// const ActiveChat = ({ conversation,userId }) => {
//   return (
//     <Paper
//       elevation={0}
//       sx={{
//         height: "85%",
//         overflowY: "auto",
//         "&::-webkit-scrollbar": {
//           width: 0,
//         },
//         padding: 3,
//       }}
//     >
     
//       {conversation.messages.length > 0 && conversation.messages.map((message,i) =>
//         message.sender.uid === userId ? (
//           <SenderBubble message={message.content} key={i} />
//         ) : (
//           <OtherUserBubble message={message.content} key={i}/>
//         )
//       )}
//     </Paper>
//   );
// };

// export default ActiveChat;

import React from "react";
import { Paper } from "@mui/material";
import SenderBubble from "./SenderBubble";
import OtherUserBubble from "./OtherUserBubble";

const ActiveChat = ({ conversation,userId }) => {
  return (
    <Paper
      elevation={0}
      sx={{
       
        height: "85%",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: 0,
        },
        padding: 3,
      }}
    >
     
      {conversation?.messages?.map((message,i) =>
        message.sender.uid ===userId ? (
          <SenderBubble message={message.content} key={i} />
        ) : (
          <OtherUserBubble message={message.content} key={i}/>
        )
      )}
    </Paper>
  );
};

export default ActiveChat;