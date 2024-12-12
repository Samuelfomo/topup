import { OptionData } from '../utils/types';

export class Option {
    code: string;
    name: string;
    amount: number;

    constructor(data: OptionData) {
        this.code = data.code;
        this.name = data.name;
        this.amount = data.amount;
    }
}