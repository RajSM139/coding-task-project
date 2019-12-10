module.exports = {
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      required: false,
    },
    username: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    status: {
      type: 'integer',
      defaultsTo: 1,
    },
  },
  autoCreatedAt: true,
  autoUpdatedAt: true,
  tableName: 'Users',
};
