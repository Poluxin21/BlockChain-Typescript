import Block from "../../Domain/Blocos/Block";

export interface IBlockService {
    criarBloco(dados: any, hashAnt: string, indice: number): Block;
    minerarBloco(bloco: Block, dificuldade: number): Block;
    proximoBloco(bloco: Block): number;
}