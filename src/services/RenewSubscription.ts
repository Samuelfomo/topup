import config from '../utils/default';
import {Subscription} from '../class/Subscription';
import axios from 'axios';

export default class RenewSubscription {
    private baseUrl: string;
    private username: string;
    private password: string;

    constructor() {
        this.baseUrl = config.api.baseURL;
        this.username = config.api.username;
        this.password = config.api.password;
    }

    async prepareSubscription(merchant:number, decoder:number, duration: number, formula: string, options: string): Promise<Subscription | null> {
        try {
            const response = await axios.post(`${this.baseUrl}/search/decoder/number/`, {
                merchant: merchant,
                decoder: decoder,
                duration: duration,
                formula: formula,
                options: options
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + Buffer.from(`${this.username}:${this.password}`).toString('base64')
                }
            });
            return new Subscription(response.data);

        } catch (error) {
            if (error) {
                console.error('New Subscription failed:', error);
            }
            return null;
        }
    }
}