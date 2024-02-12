const dataMapper = require("../dataMapper");

const deckController = {
  createDeck: async (req, res) => {
    try {
      let deck = new Set();
      for (i = 0; i < 5; i++) {
        const card = await dataMapper.getCard(id);
        if (!deck.has(card)) {
          deck.add(card);
        } else {
          i--;
        }
      }
      deck.push(card);
      res.render("decks", { deck: deck });
    } catch (error) {}
  },
};

module.exports = deckController;
