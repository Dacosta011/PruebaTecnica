import Modal from "react-modal";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Contact } from "../types/types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const validationSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string().required("Name is required"),
  direction: Yup.string().required("Direction is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

function FormModal({
  modalIsOpen,
  isEditing,
  onSubmit,
  closeModal,
  initialValues,
}: {
  modalIsOpen: boolean;
  isEditing: boolean;
  onSubmit: (values: Contact, { resetForm }: FormikHelpers<Contact>) => void;
  closeModal: () => void;
  initialValues?: Contact;
}) {
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <Formik
        initialValues={
          initialValues || {
            id: "",
            name: "",
            direction: "",
            phone: "",
            email: "",
          }
        }
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              ID:
            </label>
            <Field type="number" id="id" name="id" className="form-control" />
            <ErrorMessage name="id" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="direction" className="form-label">
              Direction:
            </label>
            <Field
              type="text"
              id="direction"
              name="direction"
              className="form-control"
            />
            <ErrorMessage name="direction" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <Field
              type="text"
              id="phone"
              name="phone"
              className="form-control"
            />
            <ErrorMessage name="phone" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <button type="submit" className="btn btn-primary">
            {isEditing ? "Actualizar" : "Crear Nuevo"}
          </button>
        </Form>
      </Formik>
    </Modal>
  );
}

export default FormModal;
