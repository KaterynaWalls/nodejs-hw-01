import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
    try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent);
    const newContact = createFakeContact();
    contacts.push(newContact);

    const updatedData = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, updatedData, 'utf8');

    console.log('Новий контакт успішно додано до файлу.');
  } catch (err) {
    console.error('Помилка додавання контакту до файлу:', err.message);
  }
};



addOneContact();
  