import axios from 'axios';
import config from '../src/utils/default';

const testServerStatus = async () => {
    try {
        const response = await axios.get(`http://localhost:${config.local.port}/health`);
        console.log('API LINK', `http://localhost:${config.local.port}/health`);
        console.log('Server Status:', response.status === 200 ? 'Online' : 'Error');
        console.log('Response:', response.data);
        //console.log(`Server running on port ${config.api.port} in ${config.debug ? 'debug' : 'production'} mode`);
    } catch (error) {
        console.error('Server Status: Offline');
    }
};

testServerStatus();