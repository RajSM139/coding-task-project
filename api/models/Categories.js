module.exports = {
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      required: false,
    },
    catName: {
      type: 'string',
      required: true,
    },
    status: {
      type: 'integer',
      defaultsTo: 1,
    },
  },
  autoCreatedAt: true,
  autoUpdatedAt: true,
  tableName: 'Categories',
};
