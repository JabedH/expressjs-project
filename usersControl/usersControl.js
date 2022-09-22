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
  // console.log(req.body);
  // const singleUser = users.map((user) => console.log(user));
  // const maxId = Math.max(users.id);
  const maxId = users.map((user) => user.id);
  const myMax = Math.max(...maxId) + 1;
  console.log(myMax);

  const newUserId = { id: myMax };
  const newInfo = req.body;
  users.push(req.body);
  users.push(req.body, req.body.newUserId);
  res.send(users);
};

module.exports.updateUser = (req, res, next) => {
  let { id } = req.body;
  const updateUser = users.find((user) => user.id === Number(id));

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
  req.send(updateUser);
};
