// users.js
// Gère les utilisateurs autorisés (identifiants)
// Tu peux ajouter/modifier ici les comptes

const users = [
  { username: "admin", password: "admin1234" },
  { username: "Pearl's", password: "519430" },
  { username: "Hen House", password: "461863" },
  { username: "Uwu Café", password: "013734" },
  { username: "Delight", password: "710393" },
  { username: "Rex Diner", password: "412843" },
  { username: "Paradiso", password: "067137" },
  { username: "Yellow Jack", password: "810359" }
];

// Fonction pour vérifier les identifiants
function checkUser(username, password) {
  return users.some(
    (u) => u.username === username && u.password === password
  );
}
