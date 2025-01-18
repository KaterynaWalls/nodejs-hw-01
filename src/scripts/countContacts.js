import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const countContacts = async () => {
    try {
        const fileContent = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(fileContent);
        const count = contacts.length;
        console.log(`Кількість контактів: ${count}`);
        return count;
    } catch (error) {
        console.error('Помилка підрахунку контактів:', error.message);
        throw error;
    }
};

console.log(await countContacts());
