import fs from 'fs';
import { dirname } from './path';

export * from 'fs';

export function readFile(file: string): Promise<string> {
	return new Promise((fulfil, reject) =>
		fs.readFile(file, 'utf-8', (err, contents) => (err ? reject(err) : fulfil(contents)))
	);
}

function mkdirpath(path: string): void {
	const dir = dirname(path);
	fs.mkdirSync(dir, { recursive: true });
}

export function writeFile(dest: string, data: string | Uint8Array): Promise<void> {
	return new Promise((fulfil, reject) => {
		mkdirpath(dest);

		fs.writeFile(dest, data, err => {
			if (err) {
				reject(err);
			} else {
				fulfil();
			}
		});
	});
}
