import axios from 'axios';
import config from '../src/utils/default';

const testDecoderSearch = async () => {
    try {
        const endpoint = `${config.local.baseURL}/${config.local.version}/decoder/24100258356486`;
        console.log('🟨 Called link:', endpoint);
        const response = await axios.get(endpoint);
        //console.log('🍫 Server Status:', response.status === 200 ? 'Online' : 'Error');
        console.log('🍫 Server Response:', response.data);
    } catch (error) {
        console.error('Server Status: Offline');
    }
};

testDecoderSearch();