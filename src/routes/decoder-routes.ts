// import { Request, Response, Router } from 'express';
// //
//
// const router = Router();
// //
//
// interface DecoderParams {
//     decoder: string;
// }
//
// // @ts-ignore
// router.get('/', async (req: Request<DecoderParams>, res: Response) => {

// });
//
// export default router;


import { Request, Response, Router } from 'express';
import DecoderSearch from '../services/DecoderSearch';
import { DecoderError } from '../class/DecoderError';

const router = Router();
const decoderSearch = new DecoderSearch();

// Interface pour les paramètres de route
interface DecoderParams {
    number: string;
}

// Interface pour les paramètres de query
interface DecoderQuery {
    number?: string;
}

// Route GET alternative avec paramètre d'URL
// @ts-ignore
router.get('/:number', async (req: Request<DecoderParams>, res: Response) => {
    try {
        const decoderNumber = req.params.number;
        console.log(`\n🔍 Recherche 02 du décodeur: ${decoderNumber}`);

        try {
            const decoder = await decoderSearch.search(decoderNumber);
            if (!decoder) {
                return res.status(404).json({ error: 'Decoder not found' });
            }
            console.log('♥️ Decoder search Result');
            return res.json(decoder);
        } catch (error) {
            return res.status(500).json({ error: '🔴 Server error' });
        }

    } catch (error: unknown) {
        console.error('\n🔴 Erreur lors de la recherche du décodeur:', error);

        if (error instanceof DecoderError) {
            return res.status(400).json({
                status: 'error',
                message: error.message
            });
        }

        return res.status(500).json({
            status: 'error',
            message: 'Une erreur serveur est survenue'
        });
    }
});

export default router;