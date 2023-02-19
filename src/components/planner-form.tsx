import { TextField, Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import styles from '@/styles/Home.module.scss';

const initalValues = {
  departure: '',
  destination: '',
};

const PlannerForm: React.FC = (): JSX.Element => {
  return (
    <div className={styles.form}>
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          departure: string()
            .required('Please enter departure from')
            .min(2, 'Departure from is too short'),
          destination: string()
            .required('Please enter destination to')
            .min(2, 'Destination to is too short'),
        })}
        onSubmit={async (values, formikHelpers) => {
          const { departure, destination } = values;
          // const obj = { slug: [departure, destination] };

          try {
            await fetch(
              `/api/locations?departure=${departure}&destination=${destination}`
            );
          } catch (e) {
            console.log('ERROR', e);
          }

          formikHelpers.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Field
              name="departure"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Departure from"
              error={Boolean(errors.departure) && Boolean(touched.departure)}
              helperText={Boolean(touched.departure) && errors.departure}
            />

            <Field
              name="destination"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Travelling to"
              error={
                Boolean(errors.destination) && Boolean(touched.destination)
              }
              helperText={Boolean(touched.destination) && errors.destination}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              Plan
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PlannerForm;
