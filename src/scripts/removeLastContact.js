import fs from 'node:fs/promises';
import {PATH_DB} from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const fileContent = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(fileContent);

        if (contacts.length === 0) {
            console.log('Файл з контактами пустий.');
            return;
        }
        const removedContact = contacts.pop();

        const updatedData = JSON.stringify(contacts, null, 2);
        await fs.writeFile(PATH_DB, updatedData, 'utf8');
        console.log('Останній контакт успішно видалено:', removedContact);
  } catch (err) {
    console.error('Помилка під час видалення контакту:', err.message);
  }
};

    
    

removeLastContact();
