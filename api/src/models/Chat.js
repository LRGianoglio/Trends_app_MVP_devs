const { DataTypes } = require("sequelize");
const User = require("./User");

module.exports = (sequelize) => {
  const Chat = sequelize.define(
    "chat",
    {
      chat_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // user1_id: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      //   reference: {
      //     model: User,
      //     key: "id",
      //   },
      // },
      // user2_id: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      //   reference: {
      //     model: User,
      //     key: "id",
      //   },
      // },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false }
  );

  return Chat;
};
