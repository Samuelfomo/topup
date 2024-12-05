// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
//
// const app = express();
// const port = 5000;
//
// // Activer CORS pour tous les domaines (développement uniquement)
// // app.use(cors());
//
// // Ou bien spécifier un domaine particulier
// //app.use(cors({ origin: 'http://localhost:5173' }));
// app.use(cors({ origin: 'https://d.topup.cm' }));
//
//
// // Parser le JSON
// app.use(express.json());
// const user = 'cee47ec8-4ae7-46dc-b131-dc00eb43d02e';
// const pass = 'eG2ZA4Jr#c}y(FED{N8_fS';
//
// // Créer la chaîne d'authentification "user:pass"
// const credentials = `${user}:${pass}`;
//
// // Encoder en Base64
// // const base64Credentials = btoa(credentials);
// const base64Credentials = Buffer.from(credentials).toString('base64');
//
// app.post('/search/decoder/number', async (req, res) => {
//     const { decoder } = req.body;
//
//     try {
//         // Requête API vers le serveur distant
//         const response = await axios.put('https://drive.topupbackup.com/search/decoder/number/',
//             { decoder },
//             {
//                 headers: {
//                     'Authorization': `Basic ${base64Credentials}`, // Ajout de l'en-tête d'authentification
//                 }
//             });
//
//         // Renvoie la réponse de l'API au frontend
//         res.json(response.data);
//         return response;
//
//     } catch (error) {
//         res.status(500).json({ message: 'Erreur lors de la requête vers l\'API', error: error.message });
//     }
// });
//
// app.post('/shortlink', async (req, res) => {
//     const { shortlink } = req.body;
//
//     try {
//         // Requête API vers le serveur distant
//         const response = await axios.put('https://drive.topupbackup.com/shortlink/',
//             { shortlink },
//             {
//                 headers: {
//                     'Authorization': `Basic ${base64Credentials}`, // Ajout de l'en-tête d'authentification
//                 }
//             });
//
//         // Renvoie la réponse de l'API au frontend
//         res.json(response.data);
//         return response;
//
//     } catch (error) {
//         res.status(500).json({ message: 'Erreur lors de la requête vers l\'API', error: error.message });
//     }
// });
//
// app.get('/requirement', async (req, res) => {
//     try {
//         // Requête API vers le serveur distant
//         const response = await axios.get('https://drive.topupbackup.com/requirement/',
//             {
//                 headers: {
//                     'Authorization': `Basic ${base64Credentials}`,
//                  }
//             });
//
//         // Renvoie la réponse de l'API au frontend
//         res.json(response.data);
//         return response;
//
//     } catch (error) {
//         res.status(500).json({ message: 'Erreur lors de la requête vers l\'API', error: error.message });
//     }
// });
//
// app.listen(port, () => {
//     console.log(`Proxy server running on http://localhost:${port}`);
// });
//
//