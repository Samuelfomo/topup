import Requiement from "@/class/Requiement";

interface DecoderApiService {
    formuleOptions(): Promise<Requiement>;
}

const createRequiementApiService = (): DecoderApiService => {
    return {

        /**
         * get requiements formules en options
         */
        async formuleOptions() {
            try {
                const response = await fetch('http://localhost:5000/requirement/', {
                    method: 'GET',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }
                const data = await response.json();
                return Requiement.fromJson(data.response);
            } catch (error) {
                console.error('Erreur lors de la recuperation des elements requis :', error);
                throw new Error('Impossible de recuperer les elements.');
            }
        }

    };
};

export default createRequiementApiService;