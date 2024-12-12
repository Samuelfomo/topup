import config from '../utils/default';
import {Requiement} from '../class/Requiement';
import axios from 'axios';

export default class RequiementSearch {
    private baseUrl: string;
    private username: string;
    private password: string;

    constructor() {
        this.baseUrl = config.api.baseURL;
        this.username = config.api.username;
        this.password = config.api.password;
    }

    async search() {
        try {

            const response = await axios.get(`${this.baseUrl}/requiement`,  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + Buffer.from(`${this.username}:${this.password}`).toString('base64')
                }
            });
            return new Requiement(response.data);

        } catch (error) {
            console.error('element search failed:', error);
            return null;
        }
    }
}