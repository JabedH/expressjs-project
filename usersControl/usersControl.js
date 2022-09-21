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
  console.log(req.body);
  next();
};
