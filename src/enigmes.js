const enigmes = [
  {
    question: "Je suis toujours devant toi mais jamais derrière. Qui suis-je ?",
    reponse: "futur"
  },
  {
    question: "Ma maison est le lion, mais on m'a traité comme un monstre.\nMon esprit est une flamme vive, plus tranchant qu'aucune épée.\nJe n'ai jamais porté la couronne, pourtant j'ai tenu des trônes dans l'ombre.\nJ'ai aimé des reines et des ombres, mais le destin m'a maudit dès la naissance.\nMon nom évoque la sagesse ancienne, et j'ai tué mon père par vengeance.\nQui suis-je, moi dont la taille est petite, mais le cœur et l'intelligence immenses ?",
    reponse: "tyrion lannister"
  },
  {
    question: "Je perds un œil pour gagner la sagesse. Je règne sur Asgard. Qui suis-je ?",
    reponse: "odin"
  },
  {
    question: "Dans le Nord, une famille règne par le loup. Quel est leur nom ?",
    reponse: "stark"
  },
  {
    question: "Je suis le dieu du tonnerre, fils d'Odin, porteur de Mjölnir. Qui suis-je ?",
    reponse: "thor"
  },
  {
    question: "Navire funéraire où les héros vikings rejoignent le Valhalla. Quel est son nom ?",
    reponse: "drakkar"
  },
  {
    question: "Je suis le dieu fourbe, père de Fenrir, frère de Thor. Qui suis-je ?",
    reponse: "loki"
  },
  {
    question: "Dans Star Wars, je suis le chevalier Jedi devenu Dark Vador. Qui suis-je ?",
    reponse: "anakin"
  },
  {
    question: "Planète désertique où vivent les Skywalker. Quel est son nom ?",
    reponse: "tatooine"
  },
  {
    question: "Je suis le nain forgeron qui créa l'épée de Jon Snow. Qui suis-je ?",
    reponse: "gendry"
  },
  {
    question: "Créature mythique moitié aigle, moitié lion. Quel est son nom ?",
    reponse: "griffon"
  },
  {
    question: "Je suis le roi des Nains dans Le Seigneur des Anneaux. Qui suis-je ?",
    reponse: "thorin"
  },
  {
    question: "Je suis ambitieux mais patient, structuré comme un bon meuble. Mon symbole est mi-bouc, mi-poisson. Qui suis-je ?",
    reponse: "capricorne"
  },
  {
    question: "Race immortelle aux oreilles pointues, amie des forêts. Qui sont-ils ?",
    reponse: "elfes"
  },
  {
    question: "Dans Star Wars, je suis le droïd astromech de Luke. Qui suis-je ?",
    reponse: "r2d2"
  },
  {
    question: "Je suis le loup géant de la famille Stark.Je protège les enfants du Nord. Ma fourrure est blanche comme l'hiver, et mes yeux rouges voient tout. Quel est mon nom ? Quel est mon nom ?",
    reponse: "fantome"
  },
  {
    question: "Dieu borgne qui sacrifia son œil pour boire à la source de sagesse. Qui est-il ?",
    reponse: "odin"
  },
  {
    question: "Créature souterraine avide d'or et de pierres précieuses. Qui est-elle ?",
    reponse: "gobelin"
  },
  {
    question: "Je suis la princesse rebelle de la planète Alderaan. Qui suis-je ?",
    reponse: "leia"
  },
  {
    question: "Je suis le frère bâtard de Robb Stark, devenu Roi du Nord. Qui suis-je ?",
    reponse: "jon"
  },
  {
    question: "Je suis la déesse de l'amour et de la beauté dans la mythologie nordique. Qui suis-je ?",
    reponse: "freyja"
  },
  {
    question: "Je suis la planète où les Jedi ont été traqués après l'Ordre 66. Qui suis-je ?",
    reponse: "mustafar"
  },
  {
    question: "Je suis l'outil qui frappe pour enfoncer, compagnon du clou. Qui suis-je ?",
    reponse: "marteau"
  },
  {
    question: "Je suis la créature mi-homme mi-cheval de la mythologie grecque. Qui suis-je ?",
    reponse: "centaure"
  },
  {
    question: "Je suis la reine méprisée, mère de Joffrey. Qui suis-je ?",
    reponse: "cersei"
  },
  {
    question: "Je suis la surface plane et lisse où le menuisier travaille. Qui suis-je ?",
    reponse: "etabli"
  },
  {
    question: "Je suis le célèbre vaisseau de Dark Vador dans Star Wars. Quel est mon nom ?",
    reponse: "executor"
  },
  {
    question: "Je suis l'arbre sacré de la mythologie nordique qui relie les mondes. Qui suis-je ?",
    reponse: "ygdrasil"
  },
  {
    question: "Je suis la lame dentée qui coupe le bois dans les deux sens. Qui suis-je ?",
    reponse: "scie"
  },
  {
    question: "Je suis le chevalier sans peur, frère de la Garde Royale. Qui suis-je ?",
    reponse: "jaime"
  },
  {
    question: "Je suis la planète-océan où habite le peuple Gungan. Qui suis-je ?",
    reponse: "naboo"
  },
  {
    question: "Je suis la colle forte du menuisier, je lie le bois pour toujours. Qui suis-je ?",
    reponse: "colle"
  },
  {
    question: "Je suis la mère des dragons, dernière des Targaryen. Qui suis-je ?",
    reponse: "daenerys"
  },
  {
    question: "Je suis le nain forgeron, ami d'Arya Stark. Qui suis-je ?",
    reponse: "gendry"
  },
  {
    question: "Je suis le guide précis pour les coupes droites, ami de la scie. Qui suis-je ?",
    reponse: "regle"
  },
  {
    question: "Je suis l'épée légendaire d'Arthur, sortie de la pierre. Qui suis-je ?",
    reponse: "excalibur"
  },
  {
    question: "Je suis le dieu de la foudre dans la mythologie grecque. Qui suis-je ?",
    reponse: "zeus"
  },
  {
    question: "Je suis le cavalier spectral sans tête de Sleepy Hollow. Qui suis-je ?",
    reponse: "hessian"
  },
  {
    question: "Je suis le revêtement qui protège et embellit le bois. Qui suis-je ?",
    reponse: "vernis"
  },
  {
    question: "Lieu final où les héros vikings festoient après leur mort. Quel est son nom ?",
    reponse: "valhalla"
  },
  {
    question: "Je suis le chevalier sans terre devenu Commandant de la Garde de Nuit. Qui suis-je ?",
    reponse: "jeor"
  },
  {
    question: "Épée légendaire forgée dans le cœur d'une étoile mourante. Quel est son nom ?",
    reponse: "dawn"
  },
  {
    question: "Je suis le sorcier gris, membre de l'ordre des Istari. Qui suis-je ?",
    reponse: "gandalf"
  },
  {
    question: "Je trace l'angle droit, fidèle compagnon du menuisier. Sans moi, tout serait de travers. Qui suis-je ?",
    reponse: "equerre"
  },
  {
    question: "Géant de glace venant du nord dans Game of Thrones. Qui est-il ?",
    reponse: "white"
  },
  {
    question: "Combien de lettres y a-t-il dans le mot ANNIVERSAIRE ?",
    reponse: "12"
  },
  {
    question: "Je suis le vaisseau Millenium piloté par Han Solo. Qui suis-je ?",
    reponse: "faucon"
  },
  {
    question: "Dieu viking de l'archerie et de la poésie, fils d'Odin. Qui est-il ?",
    reponse: "bragi"
  },
  {
    question: "Je suis le dragon de Daenerys Targaryen, premier né. Qui suis-je ?",
    reponse: "drogon"
  },
  {
    question: "Planète glacée abritant la base rebelle dans L'Empire contre-attaque. Quelle est-elle ?",
    reponse: "hoth"
  },
  {
    question: "Je nais de la forêt, vis entre les mains de l'artisan, et deviens l'âme de la maison. Qui suis-je ?",
    reponse: "bois"
  },
  {
    question: "Créature maléfique qui transforme en pierre par son regard. Qui est-elle ?",
    reponse: "basilic"
  },
  {
    question: "Je suis le premier roi de la dynastie Targaryen. Qui suis-je ?",
    reponse: "aegon"
  },
  {
    question: "Deux corbeaux qui accompagnent Odin chaque jour. Quels sont leurs noms ?",
    reponse: "huginn"
  },
  {
    question: "Loup monstrueux fils de Loki, ennemi des dieux. Qui est-il ?",
    reponse: "fenrir"
  },
  {
    question: "Pont arc-en-ciel reliant Midgard à Asgard. Quel est son nom ?",
    reponse: "bifrost"
  },
  {
    question: "Je suis le côté obscur de la Force, la colère qui mène au pouvoir. Mon chiffre est deux. Qui suis-je ?",
    reponse: "sith"
  },
  {
    question: "Quel jour est ton anniversaire ? (en chiffres)",
    reponse: "3"
  },
  {
    question: "Je suis le roi du rocher, avide d'or, père de Tyrion. Qui suis-je ?",
    reponse: "tywin"
  },
  {
    question: "Je suis l'épée en acier valyrien de la famille Stark. Quel est mon nom ?",
    reponse: "glace"
  },
  {
    question: "Je suis le dieu de la guerre et de la justice, fils d'Odin. Qui suis-je ?",
    reponse: "tyr"
  },
  {
    question: "Dans Star Wars, je suis la planète-capitale de la République Galactique. Qui suis-je ?",
    reponse: "coruscant"
  },
  {
    question: "Je suis le dragon de Smaug qui garde le trésor des Nains. Dans quel livre ?",
    reponse: "hobbit"
  },
  {
    question: "Je suis la sœur de la reine des Dragons, mère des dragons. Qui suis-je ?",
    reponse: "viserys"
  },
  {
    question: "Je suis le guerrier immortel ressuscité après chaque mort. Qui suis-je ?",
    reponse: "beric"
  },
  {
    question: "Je suis le nom du royaume des Sept Couronnes. Quel est-il ?",
    reponse: "westeros"
  },
  {
    question: "Je suis le fils de Darth Vador, devenu Jedi. Qui suis-je ?",
    reponse: "luke"
  },
  {
    question: "Je suis la forteresse des Stark dans le Nord. Quel est mon nom ?",
    reponse: "winterfell"
  },
  {
    question: "Je suis la reine des Amazones dans la mythologie grecque. Qui suis-je ?",
    reponse: "hippolyte"
  },
  {
    question: "Je suis le premier épisode de la saga Star Wars. Quel est mon numéro ?",
    reponse: "4"
  },
  {
    question: "Je suis le frère jumeardu Roi de la Nuit dans le Nord. Qui suis-je ?",
    reponse: "brandon"
  },
  {
    question: "Je suis le sabre laser vert de Luke Skywalker. De quelle couleur est-il ?",
    reponse: "vert"
  },
  {
    question: "Je suis le nom du trône en épées des rois de Westeros. Quel est-il ?",
    reponse: "fer"
  },
  {
    question: "Je suis la capitale du Royaume du Nord. Quel est mon nom ?",
    reponse: "grande"
  },
  {
    question: "Je suis le droïde protocolaire doré de la Reine Amidala. Qui suis-je ?",
    reponse: "c3po"
  },
  {
    question: "Je suis l'arme préférée des Jedi, une lame d'énergie. Qui suis-je ?",
    reponse: "sabre"
  },
  {
    question: "Je suis la saison qui dure des années dans Game of Thrones. Qui suis-je ?",
    reponse: "hiver"
  },
  {
    question: "Je suis le nombre d'Anneaux du Poucret forgés pour les Elfes. Combien ?",
    reponse: "3"
  },

  {
    question: "Je suis le géant de métal qui défend Winterfell, immobile mais vigilant. Qui suis-je ?",
    reponse: "geant"
  },
  {
    question: "Dans Harry Potter, je suis le garçon à l'éclair sur le front. Qui suis-je ?",
    reponse: "harry"
  },
  {
    question: "Je suis la bête mythique qui crache du feu et protège les trésors. Qui suis-je ?",
    reponse: "dragon"
  },
  {
    question: "Je suis l'épée cachée dans un étang, donnée à Arthur par la Dame du Lac. Qui suis-je ?",
    reponse: "excalibur"
  },
  {
    question: "Je suis le roi déchu devenu spectre, cherchant mon héritier. Qui suis-je ?",
    reponse: "aragorn"
  },
  {
    question: "Je suis la planète rouge, terre des Sables dans Star Wars. Qui suis-je ?",
    reponse: "jedha"
  },
  {
    question: "Je suis la créature à trois yeux, voyant passé, présent et futur. Qui suis-je ?",
    reponse: "raven"
  },
  {
    question: "Je suis le forgeron qui a créé l'épée Narsil. Qui suis-je ?",
    reponse: "telchar"
  },
  {
    question: "Je suis l'ordre de chevaliers Jedi qui maintient la paix dans la galaxie. Qui sommes-nous ?",
    reponse: "jedi"
  },
  {
    question: "Je suis le loup-garron qui protège Bran Stark au-delà du Mur. Qui suis-je ?",
    reponse: "summer"
  },
  {
    question: "Je suis la cité flottante des dieux dans la mythologie grecque. Qui suis-je ?",
    reponse: "olympe"
  },
  {
    question: "Je suis le métal précieux convoité par les nains dans la Terre du Milieu. Qui suis-je ?",
    reponse: "mithril"
  },
  {
    question: "Je suis le chevalier sans tête qui hante la forêt de Sleepy Hollow. Qui suis-je ?",
    reponse: "hessian"
  },
  {
    question: "Je suis la princesse guerrière des Amazones, fille d'Hippolyte. Qui suis-je ?",
    reponse: "diane"
  },
  {
    question: "Je suis l'arme du dieu Thor, marteau qui ne rate jamais sa cible. Qui suis-je ?",
    reponse: "mjolnir"
  },
  {
    question: "Je suis le dragon blanc qui terrorise le Nord dans Game of Thrones. Qui suis-je ?",
    reponse: "viserion"
  },
  {
    question: "Je suis la planète des forêts et des Ewoks dans Star Wars. Qui suis-je ?",
    reponse: "endor"
  },
  {
    question: "Je suis le frère de Cersei, amoureux de sa sœur jumelle. Qui suis-je ?",
    reponse: "jaime"
  },
  {
    question: "Je suis la créature marine géante qui attaque les navires vikings. Qui suis-je ?",
    reponse: "kraken"
  },
  {
    question: "Je suis le droïde de combat rouge de l'Empire dans Star Wars. Qui suis-je ?",
    reponse: "k2so"
  },
  {
    question: "Je suis la forteresse des Greyjoy, bâtie sur un rocher marin. Qui suis-je ?",
    reponse: "pyke"
  },
  {
    question: "Je suis le dieu de la guerre romain, équivalent de Arès. Qui suis-je ?",
    reponse: "mars"
  },
  {
    question: "Je suis l'épouse de Ragnar Lothbrok, célèbre shieldmaiden. Qui suis-je ?",
    reponse: "lagertha"
  },
  {
    question: "Je suis la capitale du Royaume des Sept Couronnes. Qui suis-je ?",
    reponse: "port"
  },
  {
    question: "Je suis le chevalier en armure blanche, protecteur de la princesse. Qui suis-je ?",
    reponse: "brienne"
  },
  {
    question: "Je suis l'île où sont formés les Jedi avant leur purge. Qui suis-je ?",
    reponse: "ilum"
  },
  {
    question: "Je suis le roi des morts, commandant l'armée des spectres. Qui suis-je ?",
    reponse: "night"
  },
  {
    question: "Je suis la sorcière qui ensorcelle les marins avec sa voix. Qui suis-je ?",
    reponse: "sirène"
  },
  {
    question: "Je suis le vaisseau de Kylo Ren, plus grand que le Faucon Millenium. Qui suis-je ?",
    reponse: "silencer"
  },
  {
    question: "Je suis la déesse de la chasse dans la mythologie grecque. Qui suis-je ?",
    reponse: "artemis"
  }

];

export default enigmes;