import Decimal from 'decimal.js';
import { v7 as uuidv7 } from 'uuid';
export default class Transacao
{
    public Id: string;
    public Rem: string;
    public RemPKey: string;
    public Dest: string;
    public Valor: Decimal;
    public Time: Date;

    constructor( 
        rem: string, 
        remPKey: string, 
        dest: string,
        valor: number, 
        time: Date
    )
    {
        this.Id = uuidv7();
        this.Rem = rem;
        this.RemPKey = remPKey;
        this.Dest = dest;
        this.Valor = new Decimal(valor);
        this.Time = time;
    }
}