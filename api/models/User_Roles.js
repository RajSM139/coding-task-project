module.exports = {
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      required: false,
    },
    userId: {
      type: 'integer',
      required: true,
    },
    userRole: {
      type: 'string',
    },
  },
  autoCreatedAt: true,
  autoUpdatedAt: true,
  tableName: 'Users_Roles',
};
