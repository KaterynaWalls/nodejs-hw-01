import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) =>
{
    try
    {
        const fileContent = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(fileContent);
        
const newContacts = [];
for (let i = 0; i < number; i++) {
  newContacts.push(createFakeContact());
}
 const updatedContacts = [...contacts, ...newContacts];

 const data = JSON.stringify(updatedContacts, null, 2);
 await fs.writeFile(PATH_DB, data, 'utf8');
 console.log(`${number} contacts generated and added to the database.`);
} catch (err) {
    console.error('Error:', err.message);
}
};

generateContacts(5);
