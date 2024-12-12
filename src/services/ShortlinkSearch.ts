import config from '../utils/default';
import {Shortlink} from '../class/Shortlink';
import axios from 'axios';
// import {DecoderError} from "../class/DecoderError";

export default class ShortlinkSearch {
    private baseUrl: string;
    private username: string;
    private password: string;

    constructor() {
        this.baseUrl = config.api.baseURL;
        this.username = config.api.username;
        this.password = config.api.password;
    }

    async search(shortlink: string): Promise<Shortlink | null> {
        try {

            const response = await axios.put(`${this.baseUrl}/shortlink/`, {
                shortlink: shortlink
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + Buffer.from(`${this.username}:${this.password}`).toString('base64')
                }
            });
            return new Shortlink(response.data);

        } catch (error) {
            console.error('Decoder search failed:', error);
            return null;
        }
    }
}