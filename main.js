import clipboard from 'clipboardy';
import dotenv from 'dotenv';

dotenv.config();

const decodedText = Buffer.from(process.env.HASH, 'base64')
    .toString('utf-8');

clipboard.writeSync(decodedText);
console.log('Copiado pro clipboard ✓');
