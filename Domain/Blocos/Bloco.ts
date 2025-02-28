import sha256 from 'sha256'

export default class Bloco
{
    public Indice: number;
    public Timestamp: Date;
    public HashAnt: string;
    public HashAtul: string;
    public Dados: any;
    public Nonce: number;

    constructor(indice: number, timestamp: Date, hashAnt: string, dados: any)
    {
        this.Indice = indice;
        this.Timestamp = timestamp;
        this.HashAnt = hashAnt;
        this.Nonce = 0;
        this.HashAtul = this.calcularHash()
    }

    calcularHash(): string {
        return sha256(
            this.Indice.toString() +
            this.Timestamp.toString() +
            this.HashAnt +
            JSON.stringify(this.Dados) +
            this.Nonce.toString()
        );
    }
}