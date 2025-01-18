import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const getAllContacts = async () => {
    try {
        const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent);
return contacts;
    } catch (error) {
        console.error('Помилка при зчитуванні контактів з файлу:', error.message);
        throw error;
     }};

console.log(await getAllContacts());
