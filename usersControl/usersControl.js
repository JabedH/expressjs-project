// const users = require("../randomUsers/Users.json");
const users = [
  {
    id: 1,
    gender: "male",
    name: "jabed",
    contact: "01789274185",
    address: "Dhaka",
    photoUrl: "shorturl.at/bnpWX",
  },
  {
    id: 2,
    gender: "male",
    name: "donald trump",
    contact: "135368476",
    address: "New York, NY",
    photoUrl: "shorturl.at/aLOT4",
  },
];

module.exports.getAllUsers = (req, res, next) => {
  //   let { id } = req.params;
  //   const newData = users.find((user) => user.id === Number(id));
  const newData = users;
  res.send(newData);
};
