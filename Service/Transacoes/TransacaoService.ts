import Transacao from "../../Domain/Transacoes/Transacao.js";
import { ITransacao } from "./ITransacaoService.js";
import CarteiraRepository from "../../Infra/Repositories/Carteira/CarteiraRepository.js";

export default class TransacaoService implements ITransacao {
    private carteiraRepo: CarteiraRepository;

    constructor() {
        this.carteiraRepo = new CarteiraRepository();
    }

    async CriarTransacao(
        Rem: string, 
        Dest: string, 
        Amount: number, 
        Timestamp: Date
    ): Promise<Transacao> {
        
        const carteira = await this.carteiraRepo.encontrarPorChavePublica(Rem);
        if (!carteira) {
            throw new Error("Carteira do remetente não encontrada");
        }

        const RemPKey = carteira.PrivKey;

        const transacao = new Transacao(Rem, RemPKey, Dest, Amount, Timestamp);
        return transacao;
    }
}
