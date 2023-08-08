const { Company, User, Admin, Chat, Message, conn } = require("../db");

const findAllUsers = async () => {
  const users = await User.scope("withoutPassword").findAll();
  const companies = await Company.scope("withoutPassword").findAll();
  return [...users, ...companies];
};

const createNewAdmin = async (userData) => {
  if (await Admin.findOne({ where: { username: userData.username } }))
    throw new Error("This username already exists.");
  return await Admin.create(userData);
};

const totalChats = async (userType) => {
  //userType can be: "professional", "student", "company"
  return await Chat.findAll({
    attributes: [
      [conn.fn("COUNT", conn.col("chat_id")), "total_chats"],
      [
        // conn.fn("TO_CHAR", conn.col("created_at"), "YYYY-MM-DD HH24:MI"),
        conn.fn("DATE_TRUNC", "hour", conn.col("created_at")),
        "creation_date",
      ],
    ],
    include: [
      {
        model: User,
        as: "UserSent",
        where: { type: userType },
        attributes: [],
      },
      {
        model: User,
        as: "UserReceived",
        where: { type: "professional" },
        attributes: [],
      },
    ],
    group: [conn.fn("DATE_TRUNC", "hour", conn.col("created_at"))],
    // group: [conn.fn("TO_CHAR", conn.col("created_at"), "YYYY-MM-DD HH24:MI")],
  });
};

const totalMessages = async (userType) => {
  return await Message.findAll({
    attributes: [
      [conn.fn("COUNT", conn.col("message_id")), "total_messages"],
      [
        conn.fn("DATE_TRUNC", "hour", conn.col("message.createdAt")),
        "creation_date",
      ],
    ],
    include: [
      {
        model: User,
        as: "UserSender",
        where: { type: userType },
        attributes: [],
      },
      {
        model: User,
        as: "UserReceiver",
        where: { type: "professional" },
        attributes: [],
      },
    ],
    group: [conn.fn("DATE_TRUNC", "hour", conn.col("message.createdAt"))],
  });
};

module.exports = { findAllUsers, createNewAdmin, totalMessages, totalChats };
