import Transacao from "../../Domain/Transacoes/Transacao";
import CarteiraRepository from "../../Infra/Repositories/CarteiraRepository";
export default class TransacaoService {
    carteiraRepo;
    constructor() {
        this.carteiraRepo = new CarteiraRepository();
    }
    async CriarTransacao(Rem, Dest, Amount, Timestamp) {
        const carteira = await this.carteiraRepo.encontrarPorChavePublica(Rem);
        if (!carteira) {
            throw new Error("Carteira do remetente não encontrada");
        }
        const RemPKey = carteira.PrivKey;
        // Criar e retornar a transação assinada
        const transacao = new Transacao(Rem, RemPKey, Dest, Amount, Timestamp);
        return transacao;
    }
}
