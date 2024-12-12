import { DecoderResponse } from '../utils/types';
import { Subscriber } from './Subscriber';
import { Formula } from './Formula';
import { DecoderError } from './DecoderError';

export class Decoder {
    code: number;
    device: number;
    identifier: number;
    location: string;
    finished: string;
    remaining: number;
    existed: boolean;
    subscriber: Subscriber;
    formula: Formula;

    constructor(response: DecoderResponse) {
        if (response.status !== 1) {
            throw new DecoderError('Invalid decoder response status');
        }

        const data = response.response;

        if (!data.existed || data.forbidden) {
            throw new DecoderError('Décodeur bloqué');
        }

        this.code = data.code;
        this.device = data.device;
        this.identifier = data.identifier;
        this.location = data.location;
        this.finished = data.finished;
        this.remaining = data.remaining;
        this.existed = data.existed;
        this.subscriber = new Subscriber(data.subscriber);
        this.formula = new Formula(data.formula);
    }
}