import Bloco from "../Blocos/Bloco.js";

export default class BlockChain
{
    public Bloco: Bloco;

    constructor(bloco: Bloco) {
        this.Bloco = bloco;
    }
}