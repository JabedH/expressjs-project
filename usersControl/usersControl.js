const users = require("../randomUsers/Users.json");

module.exports.getRandomUser = (req, res, next) => {
  const randomUser = Math.floor(Math.random() * 10) + 1;
  const newData = users.find((user) => user.id === Number(randomUser));
  res.send(newData);
};
module.exports.getAllUser = (req, res, next) => {
  const { limit, page } = req.query;
  console.log(limit, page);
  res.json(users.slice(0, limit));
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
    res.status(200).send({
      success: true,
      message: "Success",
      data: users,
    });
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  } else {
    next();
  }
};

module.exports.updateUser = (req, res, next) => {
  let { id } = req.body;
  console.log(id);
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
  res.status(200).send({
    success: true,
    message: "Success",
    data: updateUser,
  });
  res.status(500).send({
    success: false,
    message: "Internal server error",
  });
};

module.exports.bulkUpdate = (req, res, next) => {
  let newData = req.body;
  const bulkUser = newData.map((userData) => {
    return userData.id;
  });

  const updateUser = users.find(
    (user) => user.id === bulkUser.forEach((eachId) => eachId)
  );
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
  res.status(200).send({
    success: true,
    message: "Success",
    data: updateUser,
  });
  res.status(500).send({
    success: false,
    message: "Internal server error",
  });
};

module.exports.deleteUser = (req, res) => {
  let { id } = req.params;
  let filter = { _id: id };
  const newUsers = users.filter((user) => user.id !== Number(id));
  res.status(200).send({
    success: true,
    message: "Success fully deleted",
    data: newUsers,
  });
  res.status(500).send({
    success: false,
    message: "Internal server error",
  });
};
