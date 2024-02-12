# Création d'une application
    gère nos cartes
    cherche des cartes selon plusieurs critères
    gère des decks (paquets de 5 cartes différentes)

## 0. analyse/mise en place
    + bdd : data/create_db.sql

## 1 détail d'une carte
    + depuis l'accueil, quand on clique sur un carte, on veut voir le détail
    KISS

## recherche
    + construire un deck de 5 cartes
    + utiliser les session
      + requête sql : toutes les données des cartes dans la session
    + ajouter une carte au deck (liens [+])
      + Si la carte est présente, on ne fait rien
      + route /deck
      + view (nav) pour visualiser le deck
    + supprimer une carte du deck

## bonus
    + recherche par 
      + niveau exact
      + par valeur
        + toutes les cartes qui ont au moins la valeur choisi dans la direction selectionnée
      + par nom
        + les cartes dont le nom contient la valeur d'entrée
          + ex: ek => "selek" & "ekarissor" (non sensible à la casse)