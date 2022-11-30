const User = require('./User');
const Product = require(`./Product`);
const Comment = require('./Comment');


User.hasMany(Product,{
  foreignKey: 'user_id',
  // onDelete: 'CASCADE'
});
User.hasMany(Comment,{
    foreignKey: `user_id`,
    // onDelete: `CASCADE`
});

Product.belongsTo(User, {
  foreignKey: 'user_id',
  // onDelete: `CASCADE`
});
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    // onDelete: `CASCADE`
});

  
module.exports = { User, Product, Comment };