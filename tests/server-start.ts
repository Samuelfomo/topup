import { spawn } from 'child_process';
import config from '../src/utils/default';

const startServer = () => {
    const server = spawn('ts-node', ['app.ts'], {
        stdio: 'inherit',
        detached: true
    });

    server.unref();
    console.log(`Server starting on port ${config.local.port}`);
};

startServer();