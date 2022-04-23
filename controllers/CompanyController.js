const response = require("express");
const { conn } = require("./MysqlConnection");
const getConnection = async () => {
  await conn.connect((err) => {
    if (err) return;
  });
};
getConnection();
const findAll = (req, res = response) => {
  try {
    conn.query("SELECT * FROM company", (err, rows) => {
      return res.json({
        error: false,
        msg: "Todo bien",
        data: rows,
      });
    });
  } catch (error) {
    res.json({
      error: true,
      msg: "Error",
    });
  }
};

const save = (req, res = response) => {
  const { nombre } = req.body;
  try {
    conn.query("INSERT INTO company(name) values(?)", [nombre], () => {
      return res.json({
        error: false,
        msg: "Compañia registrada correctamente",
      });
    });
  } catch (error) {
    res.json({
      error: true,
      msg: "Error",
    });
  }
};

const update = (req, res = response) => {
  const { nombre, id } = req.body;
  try {
    conn.query(
      "UPDATE company set name = ? where id = ?",
      [nombre, id],
      (err, result) => {
        return res.json({
          error: false,
          msg: "Compañia modificada correctamente",
        });
      }
    );
  } catch (error) {
    res.json({
      error: true,
      msg: "Error",
    });
  }
};

const deleteCompany = (req, res = response) => {
  const { id } = req.body;
  try {
    conn.query("delete from company where id = ?", [id], () => {
      return res.json({
        error: false,
        msg: "Compañia eliminada correctamente",
      });
    });
  } catch (error) {
    res.json({
      error: true,
      msg: "Error",
    });
  }
};

module.exports = {
  findAll,
  save,
  update,
  deleteCompany,
};
