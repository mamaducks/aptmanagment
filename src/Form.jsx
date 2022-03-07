import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

const initialValues = {
  applicants: [
    {
      name: '',
      phone: '',
    },
  ],
};

const AddApplicants = () => (
  <div>
    <h1>Add Applicants</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="applicants">
            {({ insert, remove, push }) => (
              <div>
                {values.applicants.length > 0 &&
                  values.applicants.map((applicant, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`applicants.${index}.name`}>Name</label>
                        <Field
                          name={`applicants.${index}.name`}
                          placeholder="Jane Doe"
                          type="text"
                        />
                        <ErrorMessage
                          name={`applicants.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`applicants.${index}.phone`}>Phone</label>
                        <Field
                          name={`applicants.${index}.phone`}
                          placeholder="111-111-1111"
                          type="phone"
                        />
                        <ErrorMessage
                          name={`applicants.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: '', phone: '' })}
                >
                  Add Applicant
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  </div>
);