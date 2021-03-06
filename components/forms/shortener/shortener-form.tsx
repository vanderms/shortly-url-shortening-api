import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useShortener } from "services/hooks/use-shortener";
import { Spinner } from "components/icons/spinner";

const URL_PATTERN =
  /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

export const ShortenerForm: React.FC = () => {
  const { shorten, waiting } = useShortener();

  return (
    <Formik
      initialValues={{ url: "" }}
      validationSchema={Yup.object({
        url: Yup.string()
          .matches(URL_PATTERN, "Link should be a valid URL")
          .required("Please add a link"),
      })}
      onSubmit={(values, actions) => {
        shorten(values.url).then(() => {
          actions.resetForm();
        });
      }}
    >
      {(formik) => (
        <Form
          aria-label="link shortener form"
          className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,11.75rem] md:gap-6"
        >
          <label>
            <span className="sr-only">Shorten a link here...</span>
            <Field
              type="text"
              name="url"
              placeholder="Shorten a link here..."
              className={`w-full h-12 rounded-md px-4 text-stress md:h-16 md:px-8 ${
                formik.errors.url && formik.touched.url ? "border-[3px] border-danger" : ""
              }`}
            />
            {formik.errors.url && formik.touched.url && (
              <span
                data-testid="error-message"
                className=" block text-danger text-xs font-bold mt-1 md:text-base md:mt-2"
              >
                <ErrorMessage name="url" />
              </span>
            )}
          </label>
          <button
            disabled={waiting}
            type="submit"
            className={`w-full h-12 rounded-md bg-primary hover:bg-primary-hover text-white 
            font-bold text-lg flex items-center justify-center gap-4 md:h-16 `}
          >
            {waiting ? (
              <>
                <Spinner />
                <span>Processing...</span>
              </>
            ) : (
              "Shorten It!"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};
