import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID MAAY9JlFx7cCBhULkIIPJU_5ihBhEcQ2y11EDeXDJ3k'
    }
});
