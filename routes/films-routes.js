const express = require('express');

const router = express.Router();

let FILMS = [
    {
        id: "1",
        auteur: "Van Dormael",
        annee: 2013,
        titre: "Nobody",
        imageUrl: "https://fr.web.img3.acsta.net/medias/nmedia/18/66/38/49/19211266.jpg",
        commentaire:"Film d'horreur"
    },
    {
        id : "2",
        auteur: "Gaiman",
        annee: 2011,
        titre: "L'étrange vie de Nobody Owens",
        imageUrl: "https://img.over-blog-kiwi.com/0/55/36/22/20190704/ob_1f6928_l-etrange-vie-de-nobody-owens.jpg",
        commentaire:"Comédie"
    }
];


//

// chemin racine : /api/films
router.get('/', (req, res, next) => {
    console.log('Liste des films!')
    //res.json({message : 'Mes Films'});
    res.json({FILMS});
});


module.exports = router;
