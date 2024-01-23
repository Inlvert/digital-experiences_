import React from "react";
import { USER_SCHEMA } from "../../utils/validation/userValidation";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  sureName: "",
  email: "",
  password: "",
  massage: "",
};

export const FormComp = (props) => {

  const handleSignUp = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSignUp}>
      <Form action="">
        <Field type="text" name="name" placeholder="name" />
        <Field type="text" name="sureName" placeholder="sureName" />
        <Field type="email" name="email" placeholder="email" />
        <Field type="password" name="password" placeholder="password" />
        <Field type="text" name="massage" placeholder="massage" />
        <button type="submit">submit</button>
        <button type="resrt">reset</button>
      </Form>
    </Formik>
  );
};
