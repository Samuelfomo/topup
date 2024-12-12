import Shortlink from "@/class/Shortlink";


interface ShortlinkApiService {
    getshortlink(shortlink: string): Promise<Shortlink>;
}

const createShortlinkApiService = (): ShortlinkApiService => {

    return {
        /**
         * 23800456666977
         * @param shortlink
         * @returns
         */
        async getshortlink(shortlink: string) {
            try {
                const response = await fetch('http://localhost:5000/shortlink/', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ shortlink: shortlink }),
                });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }
                const data = await response.json();
                return Shortlink.fromJson(data.response);
            } catch (error) {
                console.error('Erreur lors du décodage :', error);
                throw new Error('Impossible de décoder le numéro.');
            }
        }

    };
};

export default createShortlinkApiService;