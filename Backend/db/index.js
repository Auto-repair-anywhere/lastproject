const { Sequelize,DataTypes} = require('sequelize')
const mysql = require('mysql2')




const connection = new Sequelize('finalproject', 'root', '1234', {
    host:'localhost',
    dialect:'mysql'
})

connection.authenticate() 
.then(()=>{
    console.log("connection has been successfully establissshed");
})
.catch((err)=>{
    console.log(err);
})
const Admin = connection.define('admin', {
  idadmin: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const User = connection.define('user', {
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  Number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  lastname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(350),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const Car = connection.define('Car', {
  idcar: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  carname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  carplate: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  fueltype: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  carimage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, 
{
  freezeTableName: true,
  timestamps: false,
});

const Forum = connection.define('forum', {
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  title: {
      type: DataTypes.STRING(45),
      allowNull: false
  },
  content: {
      type: DataTypes.STRING(500),
      allowNull: false
  },
  image_url: {
      type: DataTypes.STRING(45),
      allowNull: true
  },
  category: {
      type: DataTypes.STRING(45),
      allowNull: false
  },
}, {
  freezeTableName: true,
  timestamps: true
});

const Comments = connection.define('comments', {
  idcomments: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const Conversation = connection.define('conversation', {},{timestamps: false});


const Request = connection.define('request', {
  idrequest: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  brand: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  problem: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  moredescription: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  milage: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  satisfaction: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  imageurl: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  latitude: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  longitude: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const Images = connection.define('images', {
  idimages: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  imageurl: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const Messages = connection.define('messages', {
  idmessages: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const Notifications = connection.define('notifications', {
  idnotifications: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  messge: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: 'false',
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const Paiment = connection.define('paiment', {
  idpaiment: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const Professional = connection.define('professional', {
  idprof: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(350),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  latitude: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  longitude: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const ProfessionalHasRequest = connection.define('professional_has_request', {

}, {
  freezeTableName: true,
  timestamps: false,
});

const UserHasRequest = connection.define('user_has_request', {

  assigned: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const Message = connection.define('message', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  recipientRead: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
},{timestamps: true});


Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);



User.hasMany(Request);
Request.belongsTo(User);
User.hasMany(Car)

Forum.belongsTo(User);
User.hasMany(Forum);

Forum.hasMany(Comments);
Comments.belongsTo(Forum);

Forum.belongsTo(User);
User.hasMany(Forum);

Comments.belongsTo(User);
User.hasMany(Comments);

Forum.hasMany(Images);
Images.belongsTo(Forum);

User.hasMany(Messages);
Messages.belongsTo(User);

Conversation.hasMany(Messages);
Messages.belongsTo(Conversation);

User.hasMany(Notifications);
Notifications.belongsTo(User);

User.hasMany(Paiment);
Paiment.belongsTo(User);

Professional.hasMany(ProfessionalHasRequest);
ProfessionalHasRequest.belongsTo(Professional);

Request.hasMany(ProfessionalHasRequest);
ProfessionalHasRequest.belongsTo(Request);

User.hasMany(UserHasRequest);
UserHasRequest.belongsTo(User);

Request.hasMany(UserHasRequest);
UserHasRequest.belongsTo(Request);


//connection.sync({alter: true})

module.exports = {
  Admin,
  User,
  Forum,
  Comments,
  Conversation,
  Request,
  Images,
  Messages,
  Notifications,
  Paiment,
  Professional,
  ProfessionalHasRequest,
  UserHasRequest,
  Car,
  connection
};
