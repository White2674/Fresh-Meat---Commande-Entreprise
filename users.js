// users.js
// Gère les utilisateurs autorisés (identifiants)
// Tu peux ajouter/modifier ici les comptes

const users = [
  { username: "admin", password: "admin1234" },
  { username: "Pearl's", password: "482391" },
  { username: "Hen House", password: "947203" },
  { username: "Uwu Café", password: "628340" },
  { username: "Delight", password: "130982" },
  { username: "Rex Diner", password: "562713" },
  { username: "Paradiso", password: "792134" },
  { username: "Yellow Jack", password: "871932" }
];

// Fonction pour vérifier les identifiants
function checkUser(username, password) {
  return users.some(
    (u) => u.username === username && u.password === password
  );
}
