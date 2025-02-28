import { InitDataBase } from "../Context/AppDbContext.js";
import Carteira from "../../Domain/Carteiras/Carteira.js";

export default class CarteiraRepository {
    private db: any;

    constructor() {
        this.initializeDb();
    }

    private async initializeDb() {
        this.db = await InitDataBase();
    }

    async encontrarPorChavePublica(pubKey: string): Promise<Carteira | null> {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Carteiras WHERE PubliKey = ?';

            if (!this.db) {
                reject("Banco de dados não inicializado.");
                return;
            }

            this.db.get(query, [pubKey], (err: Error, row: any) => {
                if (err) {
                    reject(err);
                } else {
                    if (row) {
                        const carteira = new Carteira(row.PubliKey, row.PrivKey);
                        resolve(carteira);
                    } else {
                        resolve(null);
                    }
                }
            });
        });
    }
}
