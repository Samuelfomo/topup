export class DecoderError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DecoderError';
    }
}