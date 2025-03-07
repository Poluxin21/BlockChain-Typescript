import sha256 from 'sha256';
export default class Bloco {
    Indice;
    Timestamp;
    HashAnt;
    HashAtul;
    Dados;
    Nonce;
    constructor(indice, timestamp, hashAnt, dados) {
        this.Indice = indice;
        this.Timestamp = timestamp;
        this.HashAnt = hashAnt;
        this.Nonce = 0;
        this.HashAtul = this.calcularHash();
    }
    calcularHash() {
        return sha256(this.Indice.toString() +
            this.Timestamp.toString() +
            this.HashAnt +
            JSON.stringify(this.Dados) +
            this.Nonce.toString());
    }
}
