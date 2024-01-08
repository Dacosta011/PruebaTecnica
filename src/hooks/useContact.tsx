import { useState } from "react";
import { Contact } from "../types/types";

const STORAGE_ID = "contactsStorage";

export default function useContact() {
  //  const [loader, setLoader] = useState<boolean>(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const getAllContacts = () => {
    const contacts = localStorage.getItem(STORAGE_ID);
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  };

  const findContact = (id: string) => {
    const contacts = localStorage.getItem(STORAGE_ID);
    if (contacts) {
      const contactsArray = JSON.parse(contacts);
      const contact = contactsArray.find(
        (contact: Contact) => contact.id === id
      );
      return contact;
    }
  };

  const createContact = (contact: Contact) => {
    const contacts = localStorage.getItem(STORAGE_ID);
    if (contacts) {
      const contactsArray = JSON.parse(contacts);
      contactsArray.push(contact);
      localStorage.setItem(STORAGE_ID, JSON.stringify(contactsArray));
      setContacts(contactsArray);
    } else {
      localStorage.setItem(STORAGE_ID, JSON.stringify([contact]));
      setContacts([contact]);
    }
  };

  const deleteContact = (id: string) => {
    const contacts = localStorage.getItem(STORAGE_ID);
    if (contacts) {
      const contactsArray = JSON.parse(contacts);
      const newContactsArray = contactsArray.filter(
        (contact: Contact) => contact.id !== id
      );
      localStorage.setItem(STORAGE_ID, JSON.stringify(newContactsArray));
      setContacts(newContactsArray);
    }
  };

  const updateContact = (id: string, newContactInfo: Contact) => {
    const contacts = localStorage.getItem(STORAGE_ID);
    if (contacts) {
      const contactsArray = JSON.parse(contacts);
      const newContactsArray = contactsArray.map((contact: Contact) =>
        contact.id === id ? newContactInfo : contact
      );
      localStorage.setItem(STORAGE_ID, JSON.stringify(newContactsArray));
      setContacts(newContactsArray);
    }
  };

  return {
    // loader,
    contacts,
    getAllContacts,
    findContact,
    createContact,
    deleteContact,
    updateContact,
  };
}
