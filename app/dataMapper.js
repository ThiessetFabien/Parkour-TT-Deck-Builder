const database = require("./database");

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },
  async getCard(id) {
    const query = "SELECT * FROM card WHERE id=$1";
    const result = await database.query(query, [id]);
    return result.rows;
  },
  async findCardElement(element) {
    const query = "SELECT * FROM card WHERE element=$1";
    const result = await database.query(query, [element]);
    return result.rows;
  },
};

module.exports = dataMapper;
