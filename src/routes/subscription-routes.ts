import { Request, Response, Router } from 'express';
import RenewSubscription from '../services/RenewSubscription';

const router = Router();
const renewSubscription = new RenewSubscription();

// Route GET alternative avec paramètre d'URL
// @ts-ignore
router.post('/subscription', async (req: Request<>, res: Response) => {
    try {
        const {merchant, decoder, duration, formula, options} = req.body;
        if(!formula || !duration || !decoder){
            return res.status(400).json({ message: 'messing_required_fields' });
        }

        try {

            const presubscription = await renewSubscription.prepareSubscription(merchant, decoder, duration, formula, options);
            if (!presubscription) {
                return res.status(404).json({ error: 'subscription not performed' });
            }
            console.log('♥️ subscription preparation result');
            return res.json(presubscription);
        } catch (error) {
            return res.status(500).json({ error: '🔴 Server error' });
        }

    } catch (error: unknown) {
        console.error('\n🔴 Erreur lors de la preparation de l\'abonnement:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Une erreur serveur est survenue'
        });
    }
});

export default router;

/**
 const express = require('express');
 const service= require('./service');
 const router = express.Router();



 router.post('/subscription/renewal', async (req, res) =>{
 const {merchant, decoder, formula, options, duration} = req.body;
 if(!formula || !duration || !decoder){
 return res.status(400).json({ message: 'messing_required_fields' });
 }

 try {
 const response = await service.createPresubmit(merchant, decoder, formula, options, duration);
 res.json(response.data);

 } catch (error){
 res.status(500).json({ message: 'Erreur lors de la requête vers l\'API', error: error.message });
 }
 })

 router.post('/subscription/confirm', async (req, res) =>{
 const {confirmed, subscription, mobile} = req.body;
 // console.log('donnees recues',req.body);

 if (confirmed === undefined || confirmed === null || typeof confirmed !== 'boolean') {
 return res.status(400).json({ message: 'missing_required_fields' });
 }

 try {
 const response = await service.confirmedPay(confirmed, subscription, mobile);
 res.json(response.data);

 } catch (error){
 res.status(500).json({ message: 'Erreur lors de la requête vers l\'API', error: error.message });
 }
 })

 module.exports = router;

 */