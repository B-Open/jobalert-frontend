import { Formik, Form } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import { Input } from "../Inputs/Input";

const SearchForm = () => {
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
        search: Yup.string()
          .min(3, "Search must contain at least 3 characters.")
          .required('You must include a search term.'),
      })}
    >
      {() => (
        <Form className="mt-4 sm:flex sm:max-w-md">
          <Input hideLabel label="keyword" name="search" autoComplete="off" />
          <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <Button buttonType="primary" type="submit">
              Search
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
