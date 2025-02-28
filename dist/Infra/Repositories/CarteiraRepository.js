import { InitDataBase } from '../Context/AppDbContext';
import Carteira from "../../Domain/Carteiras/Carteira";
export default class CarteiraRepository {
    db;
    constructor() {
        this.initializeDb();
    }
    async initializeDb() {
        this.db = await InitDataBase();
    }
    async encontrarPorChavePublica(pubKey) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Carteiras WHERE PubliKey = ?';
            if (!this.db) {
                reject("Banco de dados não inicializado.");
                return;
            }
            this.db.get(query, [pubKey], (err, row) => {
                if (err) {
                    reject(err);
                }
                else {
                    if (row) {
                        const carteira = new Carteira(row.PubliKey, row.PrivKey);
                        resolve(carteira);
                    }
                    else {
                        resolve(null);
                    }
                }
            });
        });
    }
}
