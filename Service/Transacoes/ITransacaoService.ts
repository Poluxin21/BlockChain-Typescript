import Transacao from "../../Domain/Transacoes/Transacao.js"


export interface ITransacao 
{
    CriarTransacao(
        Rem: string, 
        Dest: string, 
        Amount: number, 
        Timestamp: Date): Promise<Transacao> 
    
    // MovimentarTransacao(): Transacao
}