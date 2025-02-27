## Estrutura de Bloco: A unidade fundamental de uma blockchain
- Índice/altura do bloco - feito
- Timestamp - feito
- Hash do bloco anterior - feito
- Hash do bloco atual - feito
- Dados/transações - feito
- Nonce (para proof of work) - feito

## Sistema de Hashing: Para criar identificadores únicos e garantir imutabilidade
- Algoritmos como SHA-256 - feito
- Função para gerar e verificar hashes - feito

## Mecanismo de Consenso: Como os nós concordam sobre o estado da blockchain
- Proof of Work (simples para começar) - feito
- Dificuldade ajustável - feito
- Possível extensão para Proof of Stake ou outro algoritmo 

## Transações: Estrutura para transferência de valores ou dados
- ID da transação
- Remetente (com assinatura)
- Destinatário
- Valor/dados
- Timestamp
- Taxa de transação (opcional, pode ser usada para incentivar mineradores/validadores)

## Carteiras: Para identificação e segurança
- Pares de chaves pública/privada
- Assinatura digital
- Cálculo do saldo da carteira a partir do histórico de transações

## Chain: A blockchain em si
- Armazenamento dos blocos
- Validação de blocos e transações
- Adição de novos blocos
- Genesis Block (bloco inicial)
  - Função para criar o bloco gênesis
  - Hash fixo inicial
  - Dados iniciais como mensagem padrão

## API/Interface: Para interagir com a blockchain
- Endpoints para consultar blocos/transações
- Endpoints para criar transações
- Status da blockchain
- Consulta de saldo por endereço

## Rede P2P (opcional para versão inicial)
- Sincronização entre nós
- Propagação de blocos e transações
- Descoberta de novos nós
- Resiliência contra ataques Sybil e de rede

## Extras para Versão Futuras
- **Contrato Inteligente**: Possibilidade de execução de código dentro da blockchain
- **Explorador de Blocos**: Interface visual para verificar transações e blocos
- **Camada de Privacidade**: Implementação de ZK-SNARKs ou MimbleWimble
- **Governança**: Modelos de decisão para alterações na blockchain

