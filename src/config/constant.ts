import { config } from 'dotenv';
import { join } from 'path';

config();
export const PORT: number = parseInt(process.env.PORT as string) || 5000;
export const ENV: string = process.env.NODE_ENV;
export const DEBUG: boolean = ENV === 'development';
export const PUBLIC_FOLDER = join(__dirname, '..', '..', 'public');
