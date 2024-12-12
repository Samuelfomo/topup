import { Request, Response, Router } from 'express';
import ShortlinkSearch from '../services/ShortlinkSearch';

const router = Router();
const shortlinkSearch = new ShortlinkSearch();

// Interface pour les paramètres de route
interface ShortlinkParams {
    shortlink: string;
}

// Interface pour les paramètres de query
interface ShortlinkQuery {
    shortlink?: string;
}

// Route GET alternative avec paramètre d'URL
// @ts-ignore
router.get('/:shortlink', async (req: Request<ShortlinkParams>, res: Response) => {
    try {
        const shortlinkvalue = req.params.shortlink;
        console.log(`\n🔍 Recherche 02 du numero de decodeur: ${shortlinkvalue}`);

        try {
            const shortlink = await shortlinkSearch.search(shortlinkvalue);
            if (!shortlink) {
                return res.status(404).json({ error: 'Shortlink not found' });
            }
            console.log('♥️ Shortlink search Result');
            return res.json(shortlink);
        } catch (error) {
            return res.status(500).json({ error: '🔴 Server error' });
        }

    } catch (error: unknown) {
        console.error('\n🔴 Erreur lors de la recherche du numero de decodeur:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Une erreur serveur est survenue'
        });
    }
});

export default router;

