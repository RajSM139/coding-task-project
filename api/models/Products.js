module.exports = {
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      required: false,
    },
    catId: {
      type: 'string',
      required: true,
    },
    productName: {
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
  tableName: 'Products',
};
