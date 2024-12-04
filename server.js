const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

// Activer CORS pour tous les domaines (développement uniquement)
app.use(cors());

// Ou bien spécifier un domaine particulier
app.use(cors({ origin: 'http://localhost:5173' }));

// Parser le JSON
app.use(express.json());
const user = 'cee47ec8-4ae7-46dc-b131-dc00eb43d02e';
const pass = 'eG2ZA4Jr#c}y(FED{N8_fS';

// Créer la chaîne d'authentification "user:pass"
const credentials = `${user}:${pass}`;

// Encoder en Base64
const base64Credentials = btoa(credentials);

app.post('/search/decoder/number', async (req, res) => {
    const { decoder } = req.body;

    try {
        // Requête API vers le serveur distant
        const response = await axios.put('https://drive.topupbackup.com/search/decoder/number/',
            { decoder },
            {
                headers: {
                    'Authorization': `Basic ${base64Credentials}`, // Ajout de l'en-tête d'authentification
                }
            });

        // Renvoie la réponse de l'API au frontend
        res.json(response.data);
        return response;

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la requête vers l\'API', error: error.message });
    }
});

app.post('/shortlink', async (req, res) => {
    const { shortlink } = req.body;

    try {
        // Requête API vers le serveur distant
        const response = await axios.put('https://drive.topupbackup.com/shortlink/',
            { shortlink },
            {
                headers: {
                    'Authorization': `Basic ${base64Credentials}`, // Ajout de l'en-tête d'authentification
                }
            });

        // Renvoie la réponse de l'API au frontend
        res.json(response.data);
        return response;

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la requête vers l\'API', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});

// const express = require('express');
// const path = require('path');
// const cors = require('cors')
// // const decoderRoute = require('./src/router/decodeRouter') ;
//
// const app = express();
// const port = process.env.PORT || 3003;
//
// // Servir les fichiers statiques du dossier dist
// app.use(express.static(path.join(__dirname, 'dist')));
//
// app.use(cors());
//
// app.use(express.json());
//
// // Route qui renvoie à index.html pour toutes les requêtes
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
//
// // app.use('/api/device', decoderRoute);
//
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

