class PreSubscription {
    id: number | null;
    code: number| null;
    decoder: number | null;
    merchant: number | null;
    formula: string;
    options: string[] | [];
    duration: number;
    phoneNumber: number | null;
    total: number | null;
    // confirmed: boolean | null;

    constructor(
        id: number | null,
        code: number | null,
        decoder: number,
        merchant: number | null,
        formula: string,
        options: string[] | [],
        duration: number,
        phoneNumber: number | null,
        total: number | null,
        // confirmed: boolean | null,
        ) {
        this.id = id;
            this.code = code;
            this.decoder = decoder;
            this.merchant = merchant;
            this.formula = formula;
            this.options = options;
            this.duration = duration;
            this.phoneNumber = phoneNumber;
            this.total = total;
            // this.confirmed = confirmed;
    }

    public static fromJson(json: any): PreSubscription {
    return new PreSubscription (
    json.id,
    json.code,
    json.decoder,
    json.merchant,
    json.formula,
    json.options,
    json.duration,
    json.phoneNumber,
    json.total,
    // json.confirmed,
);
}

} 

export interface Alert {
    id: string | number;
    title: string;
    message: string;
    type: 'success' | 'warning' | 'error';
}

export default PreSubscription;