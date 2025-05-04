
const IS_PRODUCTION = true;

const LOCAL_API_BASE = 'http://localhost:3333';
const PROD_API_BASE = 'https://trade-tracker-backend-ffc7.onrender.com';

export const API_BASE_URL = IS_PRODUCTION ? PROD_API_BASE : LOCAL_API_BASE;
