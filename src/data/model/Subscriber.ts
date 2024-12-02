import axios from "axios";

class Subscriber {
    public id: number | undefined;
    public token: string;
    public code: number | undefined;
    public mobile: number;
    public name: string;
    public formula: string;
    public bouquet: string | null;
    public expiryDate: Date;

    // New properties for dynamic formulas and prices
    public availableFormulas: string[] = [];
    public availableBouquets: string[] = [];
    public formulaPrices: Record<string, number> = {};
    public bouquetPrices: Record<string, number> = {};

    constructor(
        mobile: number,
        name: string,
        formula: string,
        bouquet: string | null,
        expiryDate: Date,
        token?: string,
        id?: number,
    ) {
        this.id = id;
        this.mobile = mobile;
        this.name = name;
        this.formula = formula;
        this.bouquet = bouquet;
        this.expiryDate = expiryDate;
        this.token = token || '';
    }

    async fetchDecoderDetails() {
        if (!this.token) return false;

        try {
            const response = await axios.put('api/subcriber/list', {
                token: this.token
            });

            if (response.data.status && response.data.response.length > 0) {
                const subscriberData = response.data.response[0];

                // Populate the details
                this.id = subscriberData.id;
                this.mobile = subscriberData.mobile;
                this.name = subscriberData.name;
                this.formula = subscriberData.formula;
                this.bouquet = subscriberData.bouquet;
                this.code = subscriberData.code;
                this.expiryDate = new Date(subscriberData.expiryDate);

                // Fetch and populate dynamic formulas and prices directly from API
                this.availableFormulas = subscriberData.availableFormulas || [];
                this.availableBouquets = subscriberData.availableBouquets || [];
                this.formulaPrices = subscriberData.formulaPrices || {};
                this.bouquetPrices = subscriberData.bouquetPrices || {};

                return true;
            }
            return false;
        }
        catch (error) {
            console.error('Error fetching decoder details:', error);
            throw error;
        }
    }

// Other existing methods remain the same
    static async fetchSubcriberData() {
        try {
            const response = await axios.get(`api/subscriber/`);
            if (!response.data) return [];
            return response.data.response;
        }
        catch (error) {
            console.error('Error fetching contacts:', error);
            throw error;
        }
    }
}

export default Subscriber;

