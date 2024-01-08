import { useState, useId, useEffect } from "react";
import { Contact } from "../types/types";
import useContact from "../hooks/useContact";
import { FormikHelpers } from "formik";

import FormModal from "../components/FormModal";

function Exercise4() {
  const id = useId();
  const {
    contacts,
    createContact,
    getAllContacts,
    deleteContact,
    updateContact,
  } = useContact();

  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);

  const handleCreateNewContact = (contact: Contact) => {
    contact && createContact(contact);
    setIsModalOpen(false);
  };

  const handleDeleteContact = (id: string) => {
    deleteContact(id);
  };

  const handleUpdateContact = (id: string, contact: Contact) => {
    contact && updateContact(id, contact);
    setIsModalOpen(false);
  };

  const onSubmit = (values: Contact, { resetForm }: FormikHelpers<Contact>) => {
    if (!isEditing) {
      handleCreateNewContact(values);
      resetForm();
    } else {
      handleUpdateContact(contactToEdit?.id as string, values);
      resetForm();
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      <FormModal
        modalIsOpen={isModalOpen}
        isEditing={isEditing}
        closeModal={() => setIsModalOpen(false)}
        onSubmit={onSubmit}
        initialValues={contactToEdit || undefined}
      />
      <h1>Aplicación React TypeScript de Gestión de Contactos</h1>
      <button
        onClick={() => {
          setIsModalOpen(true);
          setIsEditing(false);
          setContactToEdit(null);
        }}
        className="btn btn-primary"
      >
        Crear Nuevo Contacto
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo electrónico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.length === 0 && null}
          {contacts?.length !== 0 &&
            contacts?.map((contact) => (
              <tr key={id + contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.direction}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setContactToEdit(contact);
                      setIsModalOpen(true);
                      setIsEditing(true);
                    }}
                    className="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteContact(contact.id || "")}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Exercise4;
