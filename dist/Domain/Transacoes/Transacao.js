import Decimal from 'decimal.js';
import { v7 as uuidv7 } from 'uuid';
export default class Transacao {
    Id;
    Rem;
    RemPKey;
    Dest;
    Valor;
    Time;
    constructor(rem, remPKey, dest, valor, time) {
        this.Id = uuidv7();
        this.Rem = rem;
        this.RemPKey = remPKey;
        this.Dest = dest;
        this.Valor = new Decimal(valor);
        this.Time = time;
    }
}
