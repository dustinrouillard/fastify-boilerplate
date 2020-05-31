import dotenv from 'dotenv';
dotenv.config();

export const PortConfig = Number(process.env.PORT) || 1203;
