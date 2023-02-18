### Install npm dependencies

```bash
npm install
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