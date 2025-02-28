

export default class Carteira 
{
    public PubliKey: string;
    public PrivKey: string;

    constructor(
        publiKey: string,
        privKey: string,
    )
    {
        this.PubliKey = publiKey;
        this.PrivKey = privKey;
    }
}