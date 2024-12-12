import { FormulaData } from '../utils/types';

export class Formula {
    code: string;
    name: string;
    amount: number;

    constructor(data: FormulaData) {
        this.code = data.code;
        this.name = data.name;
        this.amount = data.amount;
    }
}