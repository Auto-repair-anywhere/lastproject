const sequelize=require("../index")

const Category=require("./Category")
const Product=require("./Product")
const User=require("./User")
const Wishlist=require("./WishList")
const Cart=require("./cart")
const Image=require("./Image")
const Payment=require("./payment")
const Comment=require("./comment")
const Rating = require("./rating")






User.hasMany(Product);
User.hasMany(Cart);
User.hasMany(Wishlist);
User.hasOne(Payment );
User.belongsToMany(Product, );
User.belongsToMany(Product, );


Category.hasMany(Product);


Product.belongsTo(User);
Product.belongsTo(Category);
Product.hasMany(Cart);
Product.hasMany(Wishlist);
Product.hasMany(Image);
Product.hasMany(Rating);
Product.hasMany(Comment);


Cart.belongsTo(User);
Cart.belongsTo(Product);


Image.belongsTo(Product);


Wishlist.belongsTo(User);
Wishlist.belongsTo(Product);


Rating.belongsTo(Product);
Rating.belongsTo(User);


Comment.belongsTo(Product);
Comment.belongsTo(User);


Payment.belongsTo(User);


sequelize.sync({ alter: true });


