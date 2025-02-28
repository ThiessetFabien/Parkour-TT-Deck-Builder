const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes',
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
  getOneCard: async (req, res) => {
    try {
      const id = req.params.id;
      const card = await dataMapper.getCard(id);
      if (card && card === id) {
        res.status(404).send('Carte non trouvée');
      } else {
        res.render('showCard', { card: card });
      }
    } catch (error) {
      console.error(error, 'Erreur d\'affichage d\'une carte');
      res.status(500);
    }
  },
};

module.exports = mainController;
