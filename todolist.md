# Componentes Essenciais de uma Blockchain

## Feito
### Estrutura de Bloco: A unidade fundamental de uma blockchain
- Índice/altura do bloco
- Timestamp
- Hash do bloco anterior
- Hash do bloco atual
- Dados/transações
- Nonce (para proof of work)

### Sistema de Hashing: Para criar identificadores únicos e garantir imutabilidade
- Algoritmos como SHA-256
- Função para gerar e verificar hashes

### Mecanismo de Consenso: Como os nós concordam sobre o estado da blockchain
- Proof of Work (simples para começar)
- Dificuldade ajustável
- Possível extensão para Proof of Stake ou outro algoritmo

#

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

# Minhas pesquisas

## Como funciona o armazenamento dos blocos e a troca de blocos?

### Como o índice dos blocos aumenta?
Cada novo bloco tem um **índice (height)** baseado no último bloco:
- O **Bloco Gênesis** (o primeiro) tem índice `0`.
- Quando um novo bloco é adicionado, ele recebe o índice do último bloco `+1`.

Exemplo:
```
Bloco 0 (Gênesis)
Bloco 1
Bloco 2
Bloco 3 ...
```

### Quando um novo bloco é criado?
Os blocos não são criados a cada transação, mas sim quando certos critérios são atendidos:

1. **Tempo fixo (Time-based)**: Exemplo, Bitcoin gera um bloco a cada **10 minutos**.
2. **Tamanho do bloco (Block size)**: Um bloco é fechado quando tem **X transações** ou atinge um tamanho limite.
3. **Prova de Trabalho (Proof of Work)**: O bloco só é criado quando um minerador resolve um **puzzle matemático**.

### Como as transações são armazenadas?
1. **Transações aguardam na "mempool"** até serem processadas.
2. **Mineradores/Validadores pegam as transações pendentes e criam um novo bloco**.
3. **O bloco é adicionado à blockchain e as transações são confirmadas**.

## Extras para Versão Futuras
- **Contrato Inteligente**: Possibilidade de execução de código dentro da blockchain
- **Explorador de Blocos**: Interface visual para verificar transações e blocos
- **Camada de Privacidade**: Implementação de ZK-SNARKs ou MimbleWimble
- **Governança**: Modelos de decisão para alterações na blockchain

