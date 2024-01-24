import React from "react";
import { USER_SCHEMA } from "../../utils/validation/userValidation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./FormComp.module.scss";

const initialValues = {
  name: "",
  sureName: "",
  email: "",
  password: "",
  industry: "IT",
  massage: "",
};

export const FormComp = (props) => {
  const handleSignUp = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    localStorage.setItem("formData", JSON.stringify(values));
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSignUp}
      validationSchema={USER_SCHEMA}
    >
      <Form action="">
        <div className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={styles.nameImput}
            />
            <ErrorMessage name="name" component="div" />
            <Field
              type="text"
              name="sureName"
              placeholder="Surename"
              className={styles.sureNameImput}
            />
            <ErrorMessage name="sureName" component="div" />
          </div>
          <Field
            type="email"
            name="email"
            placeholder="Email address"
            className={styles.imputStyle}
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            name="password"
            placeholder="password"
            className={styles.imputStyle}
          />
          <ErrorMessage name="password" component="div" />
          <Field
            as="select"
            name="industry"
            placeholder="Industry"
            className={styles.imputStyle}
          >
            <option value="IT">IT</option>
            <option value="Management">Management</option>
          </Field>
          <Field
            as="textarea"
            name="massage"
            placeholder="Your message"
            className={styles.imputTextarea}
          />
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.btn}>
              Get in touch!
            </button>
            <p className={styles.buttonWrapperText}>
              By submitting this form you read and agree to{"\n"}the Terms &
              Conditions and our privacy policy.
            </p>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
