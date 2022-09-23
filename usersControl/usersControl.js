const users = require("../randomUsers/Users.json");
// const users = [
//   {
//     id: 1,
//     gender: "male",
//     name: "jabed",
//     contact: "01789274185",
//     address: "Dhaka",
//     photoUrl: "shorturl.at/bnpWX",
//   },
//   {
//     id: 2,
//     gender: "male",
//     name: "donald trump",
//     contact: "135368476",
//     address: "New York, NY",
//     photoUrl: "shorturl.at/aLOT4",
//   },
// ];

module.exports.getRandomUser = (req, res, next) => {
  const randomUser = Math.floor(Math.random() * 10) + 1;
  const newData = users.find((user) => user.id === Number(randomUser));
  res.send(newData);
};
module.exports.getAllUser = (req, res, next) => {
  const { limit, page } = req.query;
  console.log(limit, page);
  res.json(users.slice(0, limit));
  // const allUsers = users;
  // res.send(allUsers);
};

module.exports.saveNewUser = (req, res, next) => {
  const maxId = users.map((user) => user.id);
  const myMax = Math.max(...maxId) + 1;
  req.body.id = myMax;
  if (
    req.body.name &&
    req.body.gender &&
    req.body.contact &&
    req.body.address &&
    req.body.photoUrl
  ) {
    users.push(req.body);
    res.send(users);
  } else {
    next();
  }
};

module.exports.updateUser = (req, res, next) => {
  let { id } = req.body;
  const updateUser = users.find((user) => user.id === Number(id));
  console.log(updateUser);

  {
    req.body.name !== undefined ? (updateUser.name = req.body.name) : "";
  }
  {
    req.body.contact !== undefined
      ? (updateUser.contact = req.body.contact)
      : "";
  }
  {
    req.body.gender !== undefined ? (updateUser.gender = req.body.gender) : "";
  }
  {
    req.body.address !== undefined
      ? (updateUser.address = req.body.address)
      : "";
  }
  {
    req.body.photoUrl !== undefined
      ? (updateUser.photoUrl = req.body.photoUrl)
      : "";
  }
  console.log(updateUser);
  res.send(updateUser);
};


module.exports.bulkUpdate = (req, res, next) => {
  let userIds = req.body;
  const updateUsers = userIds.map((userId) => console.log(userId.id));
  const updateUser = users.find((user) => user.id === Number(updateUsers.id));
  // const newUpdate = updateUsers.map((updateUser) => {
  //   {
  //     req.body.name !== undefined ? (updateUser.name = req.body.name) : "";
  //   }
  // });
  // {
  //   req.body.name !== undefined ? (updateUser.name = req.body.name) : "";
  // }
  console.log(updateUsers.id);
  res.send(newUpdate);
};
module.exports.deleteUser = (req, res) => {
  let { id } = req.params;
  let filter = { _id: id };
  const newUsers = users.filter((user) => user.id !== Number(id));
  res.send(newUsers);
};
