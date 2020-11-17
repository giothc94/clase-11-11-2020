const router = require("express").Router();

const query = require("../lib/mysql");

router.get("/", async (req, res) => {
  try {
    let SQL = "SELECT * FROM users;";
    let results = await query(SQL);
    res.status(200).json({
      message: "Lista de usuarios",
      data: results,
    });
  } catch (error) {

    console.log("ERROR::", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
