import Decoder from "@/class/Decoder";

interface DecoderApiService {
  decodeNumber(decoder: number): Promise<Decoder>;
}

const createDecoderApiService = (): DecoderApiService => {
  return {
    /**
     * Fetch decoder information from local server
     * @param decoder Decoder number to search
     */
    async decodeNumber(decoder: number) {
      try {
        console.log(decoder);
        const response = await fetch(`http://localhost:5000/decoder/${decoder}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ decoder: decoder }),
        });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return Decoder.fromJson(data);
      } catch (error) {
        console.error('Error during decoding:', error);
        throw new Error('Unable to decode the number.');
      }
    }
  };
};

export default createDecoderApiService;