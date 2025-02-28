import Bloco from "../../Domain/Blocos/Bloco"
import { IBlockService } from "./IBlockService"
import sha256 from 'sha256'

export class BlockService implements IBlockService
{
    criarBloco(dados: any, hashAnt: string, indice: number): Bloco {
        return new Bloco(indice, new Date(), hashAnt, dados);
    }

    minerarBloco(bloco: Bloco, dificuldade: number): Bloco {
        let hash = "";
        const prefixoBase = sha256(bloco.HashAnt).substring(0, dificuldade);
        const prefixo = prefixoBase.replace(/./g, (char, index) => (index % 2 === 0 ? "0" : char));

        while (!hash.startsWith(prefixo)) {
            bloco.Nonce++;
            hash = bloco.calcularHash();
        }

        bloco.HashAtul = hash;
        return bloco;
    }

    proximoBloco(bloco: Bloco): number {
        return bloco.Indice + 1;
    }
}