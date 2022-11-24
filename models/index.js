const User = require('./User');
const Product = require(`./Product`)

User.hasMany(Product,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(Comment,{
    foreignKey: `user_id`,
    onDelete: `CASCADE`
});
User.belongsTo(this.Location,{
    as: `user_location`
});
Product.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: `CASCADE`
});
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: `CASCADE`
});
Location.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: {
      model: User,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'user_location'
  });
  
module.exports = { User, Product, Comment, Location };