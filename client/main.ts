import {
  establishConnection,
  establishPayer,
  checkProgram,
  play,
} from './lib';

async function main() {
  await establishConnection();

  await establishPayer();

  await checkProgram();

  await play();
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
