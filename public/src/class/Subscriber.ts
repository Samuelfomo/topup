class Subscriber {
    public code?: number;
    public firstname: string;
    public lastname: string;
    public mobile: number;

    constructor(
        firstname: string,
        lastname: string,
        mobile: number,
        code?: number
    ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.mobile = mobile;
        this.code = code;
    }
}
export default Subscriber;

  // {
  //   "name": "topup-drive",
  //   "version": "1.0.0",
  //   "description": "Web apps for Topup+ Connector",
  //   "main": "app.ts",
  //   "scripts": {
  //     "start": "ts-node tests/server-start.ts",
  //     "stop": "ts-node tests/server-graceful-shutdown.ts",
  //     "test:server": "npx ts-node tests/server-status.ts",
  //     "test:search-decoder": "npx ts-node tests/decoder-search.ts",
  //     "dev": "ts-node app.ts"
  //   },
  //   "dependencies": {
  //     "axios": "^1.6.2",
  //     "dotenv": "^16.3.1",
  //     "express": "^4.21.2",
  //     "express-basic-auth": "^1.2.1"
  //   },
  //   "devDependencies": {
  //     "@types/express": "^5.0.0",
  //     "@types/node": "^18.0.0",
  //     "ts-node": "^10.9.1",
  //     "typescript": "^5.0.0"
  //   }
  // }

// {
//     "name": "topup-drive",
//     "version": "1.0.0",
//     "description": "Web apps for Topup+ Connector",
//     "main": "app.ts",
//     "scripts": {
//     "start": "ts-node tests/server-start.ts",
//         "stop": "ts-node tests/server-graceful-shutdown.ts",
//         "test:server": "npx ts-node tests/server-status.ts",
//         "test:search-decoder": "npx ts-node tests/decoder-search.ts",
//         "dev": "ts-node app.ts"
// },
//     "dependencies": {
//     "axios": "^1.6.2",
//         "dotenv": "^16.3.1",
//         "express": "^4.21.2",
//         "express-basic-auth": "^1.2.1"
// },
//     "devDependencies": {
//     "@types/express": "^5.0.0",
//         "@types/node": "^18.0.0",
//         "ts-node": "^10.9.1",
//         "typescript": "^5.0.0"
// }
// }
