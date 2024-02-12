const { string } = require("i/lib/util.js");
const dataMapper = require("../dataMapper.js");

const searchController = {
  searchPage: async (req, res) => {
    res.render("search");
  },
  SearchElement: async (req, res) => {
    try {
      const element = req.query.element;
      const cards = await dataMapper.findCardElement(element);
      res.render("search", { cards: cards });
    } catch (error) {
      console.error(error, "Erreur lors de l'affichage de la recherche");
      res.status(500).send("Erreur lors de l'affichage de la recherche");
    }
  },
};

module.exports = searchController;
