
import { ShortlinkResponse} from '../utils/types';

export class Shortlink {
    token: string;
    merchant: number;
    decoder: number;
    shortlink: string;


    constructor(response: ShortlinkResponse) {
        if (response.status !== 1) {
            throw new Error('Invalid shortlink response status');
        }

        const data = response.response;
        this.token = data.token;
        this.merchant = data.merchant;
        this.decoder = data.decoder;
        this.shortlink = data.shorlink;
    }
}