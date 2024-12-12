import { Request, Response, Router } from 'express';
import RequiementSearch from '../services/RequiementSearch';

const router = Router();
const requiementSearch = new RequiementSearch();

// Route GET alternative avec paramètre d'URL
// @ts-ignore
router.get('/requiment', async (req: Request<>, res: Response) => {
    try {

        try {
            const requiement = await requiementSearch.search();
            if (!requiement) {
                return res.status(404).json({ error: 'requiement not found' });
            }
            console.log('♥️ requiement search Result');
            return res.json(requiement);
        } catch (error) {
            return res.status(500).json({ error: '🔴 Server error' });
        }

    } catch (error: unknown) {
        console.error('\n🔴 Erreur lors de la recherche des elements:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Une erreur serveur est survenue'
        });
    }
});

export default router;