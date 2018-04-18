const isProduction = process.env.NODE_ENV === 'production';

export const SITE_ROOT = isProduction ? 'http://save.setmine.com' : 'http://localhost:3000';
export const API_ROOT = SITE_ROOT + '/api/v/1/'
