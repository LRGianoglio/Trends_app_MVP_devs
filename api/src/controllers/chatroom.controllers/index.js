const deleteGroup = require("./deleteGroup");
const deleteGroupMessage = require("./deleteGroupMessage");
const deleteUserFromGroup = require("./deleteUserFromGroup");
const getAllGroupMessages = require("./getAllGroupMessages");
const getAllGroups = require("./getAllGroups");
const getChatsByUser = require("./getChatsByUser");
const getMessagesByChat = require("./getMessagesByChat");
const getUserConversations = require("./getUserConversations");
const patchUserRole = require("./patchUserRole");
const postGroup = require("./postGroup");
const postGroupMessage = require("./postGroupMessage");
const postMessage = require("./postMessage");
const postUserInGroup = require("./postUserInGroup");
const putGroup = require("./putGroup");
const putGroupMessage = require("./putGroupMessage");

module.exports = {
  postMessage,
  getChatsByUser,
  getMessagesByChat,
  postGroup,
  putGroup,
  deleteGroup,
  getAllGroups,
  postUserInGroup,
  patchUserRole,
  deleteUserFromGroup,
  postGroupMessage,
  getAllGroupMessages,
  deleteGroupMessage,
  putGroupMessage,
  getUserConversations,
};
