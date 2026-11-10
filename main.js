import { spawn } from 'node:child_process';
import dotenv from 'dotenv';

dotenv.config();

const decodedText = Buffer.from(process.env.HASH, 'base64')
    .toString('utf-8');

// Wayland (Omarchy/Hyprland): wl-copy fica em background servindo o clipboard
const wlCopy = spawn('wl-copy', { stdio: ['pipe', 'ignore', 'ignore'], detached: true });
wlCopy.stdin.end(decodedText);
wlCopy.unref();
console.log('Copiado pro clipboard ✓');
