import React from 'react';
import { Formik, Form, Field } from 'formik';

const ContactForm = ({ onAddProfile }) => {

    const handleSubmit = (values, actions) => {
        const profileAdd = {
            name: values.username,
            phone: values.tel,
        };

        onAddProfile(profileAdd);

		console.log(values);
		actions.resetForm();
	};
    
  return (
      <Formik initialValues={{
        username: "",
        tel: ""
    }} onSubmit={handleSubmit}>
          <Form>
              <label>
                  <span>Name</span>
                  <Field type="text" name="username" />     
              </label>
              <label>
                <span>Number</span>
               <Field type="tel" name="tel"/>   
              </label>
			<button type="submit">Add contact</button>
		</Form>
    </Formik>
  );
};


export default ContactForm;