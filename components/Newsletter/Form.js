import { Formik, Form } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import { Input } from "../Inputs/Input";

const NewsletterForm = () => {
  const handleSubmit = (values) => {
    console.log("submitting", values);
  };

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("You must include an email address."),
      })}
    >
      {() => (
        <Form className="mt-4 sm:flex sm:max-w-md">
          <Input
            hideLabel
            label="Email address"
            name="email"
            autoComplete="email"
          />
          <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <Button buttonType="primary" type="submit">
              Subscribe
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewsletterForm;
