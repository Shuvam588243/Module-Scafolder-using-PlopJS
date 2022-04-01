module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    'Ticket',
    {
      column_name : {
        type: DataTypes.STRING, //Datetype of the Column STRING||INTEGER||BOOLEAN
        allowNull: true, //true||false
        unique: true, //true||false
      },
    },
    {
      timestamps: true, //true||false - Timestamp
      createdAt: true, //true||false  - Created Timestamp
      updatedAt: true, //true||false  - Updated Timestamp
    }
  );

  return Ticket;
};
