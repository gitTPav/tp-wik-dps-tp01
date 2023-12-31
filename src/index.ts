import * as http from "http"
const port = process.env.PING_LISTEN_PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/ping' && req.method === 'GET') {
    // Obtenir les headers de la requête
    const headers = req.headers;

    // Définir le type de contenu de la réponse en JSON
    res.setHeader('Content-Type', 'application/json');

    // Retourner les headers au format JSON
    res.end(JSON.stringify(headers));
  } else {
    // Répondre avec une erreur 404 pour toutes les autres routes
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});