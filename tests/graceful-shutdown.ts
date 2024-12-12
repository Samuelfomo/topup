import { exec } from 'child_process';

const PORT = 5000;

const shutdown = async () => {
    try {
        // Envoi signal SIGTERM au processus sur le port 5000
        const pid = await new Promise((resolve, reject) => {
            exec(`lsof -t -i:${PORT}`, (error, stdout) => {
                if (error) reject(error);
                resolve(stdout.trim());
            });
        });

        if (pid) {
            process.kill(Number(pid), 'SIGTERM');
            console.log(`Server on port ${PORT} gracefully shutdown`);
        }
    } catch (error) {
        console.error('Shutdown error:', error);
        process.exit(1);
    }
};

shutdown();