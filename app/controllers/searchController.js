const dataMapper = require("../dataMapper.js");

const searchController = {
    searchPage: async (req, res) => {
        try {
            const searchTerm = req.body.q;
            const result = await dataMapper.getSearch(searchTerm);
            if (result.length === 0) {
                res.status(200).send("Aucun résultat trouvé pour la recherche : " + searchTerm);
            } else {
                console.log(result);
                res.render("search", { result });
            }
        } catch (error) {
            console.error(error, "Erreur lors de l'affichage de la recherche");
            res.status(500).send("Erreur lors de l'affichage de la recherche");
        }
    }};

module.exports = searchController;
