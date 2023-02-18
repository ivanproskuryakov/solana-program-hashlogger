### Install npm dependencies

```bash
yarn install
```

## Building
```
cd program
cargo build-sbf
```

### Start local Solana cluster

Start a local Solana cluster:
```bash
solana-test-validator
```
Listen to transaction logs:
```bash
solana logs
```

### Deploy the on-chain program

```bash
solana program deploy dist/game.so
```

## Unit Testing
```
cd program

cargo test-sbf -- --test-threads=1 --nocapture
```

## Run command
```
cd program

cargo test-sbf -- --test-threads=1 --nocapture
```

## Airdrop

> solana config get

Config File: /Users/ivan/.config/solana/cli/config.yml
RPC URL: http://127.0.0.1:8899 
WebSocket URL: ws://127.0.0.1:8900/ (computed)
Keypair Path: /Users/ivan/.config/solana/id.json 
Commitment: confirmed 

> solana config set --url https://api.devnet.solana.com

> solana-keygen pubkey
AjMQJQCSuJP7CnqWbU3U3qDu12p3uZo9C8ijCiooEPb9

> solana balance AjMQJQCSuJP7CnqWbU3U3qDu12p3uZo9C8ijCiooEPb9 --url https://api.devnet.solana.com

> solana airdrop 100000 AjMQJQCSuJP7CnqWbU3U3qDu12p3uZo9C8ijCiooEPb9 --url https://api.devnet.solana.com

## Solana Explorer

https://explorer.solana.com/address/AjMQJQCSuJP7CnqWbU3U3qDu12p3uZo9C8ijCiooEPb9?cluster=devnet