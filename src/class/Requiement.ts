import {RequiementResponse} from '../utils/types';
import { Option } from './Option';
import { Formula } from './Formula';


export class Requiement {
    option: Option;
    formula: Formula;

    constructor(response: RequiementResponse) {
        if (response.status !== 1) {
            throw new Error('Invalid requiement response status');
        }

        const data = response.response;

        this.option = new Option(data.options);
        this.formula = new Formula(data.formulas);
    }
}