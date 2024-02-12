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
    async getSearch(searchTerm) {
        const query = "SELECT * FROM cards WHERE name ILIKE $1";
        const result = await database.query(query);
        return result.rows;
    }
};


module.exports = dataMapper;
