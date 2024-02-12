const database = require("./database");

const dataMapper = {
    async getAllCards() {
        const query = "SELECT * FROM card";
        const result = await database.query(query);
        return result.rows;
    },
    async getCard(id) {
        const query = "SELECT * FROM card WITH id=$1";
        const result = await database.query(query, [id]);
        return result.rows;
    }
};


module.exports = dataMapper;
