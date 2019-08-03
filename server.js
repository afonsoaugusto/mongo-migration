const {
    init,
    create,
    database,
    config,
    up,
    down,
    status
  } = require('migrate-mongo');

const dotenv = require('dotenv');

dotenv.config({ path: `./.env` });


async function start() {
    const mongoConnectionSettings = await config.read();
    const db = await database.connect();
    const migrated = await up(db);
    console.log(migrated)
    migrated.forEach(fileName => console.log('Migrated:', fileName));
    //const db = await database.connect();
    //const migrationStatus = await status(db);
    //migrationStatus.forEach(({ fileName, appliedAt }) => console.log(fileName, ':', appliedAt));
    await db.close()
 }
start();