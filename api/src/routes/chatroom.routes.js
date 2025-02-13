const { Router } = require("express");
const {
  createMessage,
  removeMessage,
  getListChatsByUser,
  messagesByChat,
  createGroup,
  editGroup,
  removeGroup,
  allGroups,
  addUserToGroup,
  editMessage,
  editUserRole,
  removeUserFromGroup,
  newGroupMessage,
  allGroupMessages,
  removeGroupMessage,
  editGroupMessage,
  userConversations,
} = require("../handlers/chatroom.handlers");
const {validateGroupOwner, validateId, validateProfileOwner, encryptMessage} = require("../middlewares");

const chatroomRoutes = Router();

chatroomRoutes.get("/chat/:id", validateId, getListChatsByUser);
chatroomRoutes.get("/chat/:chatId/messages", messagesByChat);
chatroomRoutes.post("/message", encryptMessage, createMessage);
chatroomRoutes.put("/chat/:chatId/message/:messageId", encryptMessage, editMessage);
chatroomRoutes.delete("/chat/:chatId/message/:messageId", removeMessage);

chatroomRoutes.get("/groups", allGroups);
chatroomRoutes.post("/groups", createGroup);
chatroomRoutes.put("/groups/:groupId", validateGroupOwner, editGroup) 
chatroomRoutes.delete("/groups/:groupId", validateGroupOwner, removeGroup);

chatroomRoutes.post("/groups/:groupId/users", validateGroupOwner, addUserToGroup);
chatroomRoutes.patch("/groups/:groupId/users/:userId", validateGroupOwner, editUserRole);
chatroomRoutes.delete("/groups/:groupId/users/:userId", validateGroupOwner, removeUserFromGroup);

chatroomRoutes.get("/groups/:groupId/messages", allGroupMessages);
chatroomRoutes.post("/groups/:groupId/messages", encryptMessage, newGroupMessage);
chatroomRoutes.put("/groups/:groupId/messages/:messageId", encryptMessage, editGroupMessage);
chatroomRoutes.delete("/groups/:groupId/messages/:messageId", removeGroupMessage);

chatroomRoutes.get("/conversations/:id", validateId, validateProfileOwner, userConversations);

module.exports = chatroomRoutes;
