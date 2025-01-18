import fs from 'node:fs/promises';
import {PATH_DB} from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
    const dataContacts = JSON.stringify([], null, 2);
    await fs.writeFile(PATH_DB, dataContacts, 'utf8');
    console.log('Всі контакти успішно видалені з файлу.');
} catch (err) {
    console.error('Помилка видалення контактів:', err.message);
    throw err;
}
};

removeAllContacts();
