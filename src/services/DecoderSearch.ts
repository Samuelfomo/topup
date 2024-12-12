import config from '../utils/default';
import {Decoder} from '../class/Decoder';
import axios from 'axios';
import {DecoderError} from "../class/DecoderError";

export default class DecoderSearch {
    private baseUrl: string;
    private username: string;
    private password: string;

    constructor() {
        this.baseUrl = config.api.baseURL;
        this.username = config.api.username;
        this.password = config.api.password;
    }

    async search(decoderNumber: string): Promise<Decoder | null> {
        try {

            const response = await axios.put(`${this.baseUrl}/search/decoder/number/`, {
                decoder: decoderNumber
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + Buffer.from(`${this.username}:${this.password}`).toString('base64')
                }
            });
            return new Decoder(response.data);

        } catch (error) {
            if (error instanceof DecoderError) {
                console.error('Decoder search failed:', error);
            }
            return null;
        }
    }
}