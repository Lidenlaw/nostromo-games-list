// ============================================================
//  À ÉDITER : joueurs et liste des jeux
// ============================================================
// Les 4 joueurs du groupe (les prénoms apparaissent dans les votes)
const PLAYERS = ["Maxime", "Pauline", "Daniela", "Christopher"];

// Pour chaque jeu :
//   id       : identifiant unique, sans espace (sert aussi de nom de fichier)
//   title    : nom affiché
//   hours    : durée de jeu (texte libre, ex. "12 h", "8-10 h", "∞")
//   platform : (facultatif) console / support, ex. "Switch", "PS5", "PC"
//   genre    : (facultatif) petit libellé
//   cover    : (facultatif) chemin de la jaquette, défaut = media/covers/<id>.jpg
//   gif      : (facultatif) chemin du gif de gameplay (30 s max), défaut = media/gifs/<id>.gif
//
// Si l'image est absente, un visuel de remplacement coloré s'affiche.
// ⚠️ Les durées ci-dessous sont des exemples approximatifs : à remplacer.
const GAMES = [
  { id: "inside",    title: "Inside",                        platform: "Switch", hours: "3 h 30", genre: "Plateforme · Puzzle" },
  { id: "reanimal",  title: "Reanimal",                      platform: "PS5",    hours: "4 h 30", genre: "Aventure · Horreur" },
  { id: "re7",       title: "Resident Evil VII Biohazard",   platform: "PS4",    hours: "9 h",    genre: "Survival horror" },
];
