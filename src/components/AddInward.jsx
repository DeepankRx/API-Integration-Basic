import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addInward } from '../services/api';
const DocumentForm = () => {
  const initialValues = {
    iw_id: 1,
    iw_status: 'active',
    iw_sender_name: '',
    iw_receiver_name: '',
    iw_pod_no: '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Simulate API call
      setTimeout(() => {
        // Display success toast
        toast.success('Document submitted successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });

        setSubmitting(false);
      }, 1000); // Simulating API delay

      // Handle actual API call here with "values" as your payload
      // ...
      const res = await addInward(values);
      toast.success(res.data);
      // Handle errors
      // ...
    } catch (e) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Submit Document</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="iw_sender_name"
                className="block text-sm font-medium text-gray-700"
              >
                Sender Name
              </label>
              <Field
                type="text"
                id="iw_sender_name"
                name="iw_sender_name"
                className="mt-1 p-2 border rounded-md w-full"
              />
              <ErrorMessage
                name="iw_sender_name"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="iw_receiver_name"
                className="block text-sm font-medium text-gray-700"
              >
                Receiver Name
              </label>
              <Field
                type="text"
                id="iw_receiver_name"
                name="iw_receiver_name"
                className="mt-1 p-2 border rounded-md w-full"
              />
              <ErrorMessage
                name="iw_receiver_name"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="iw_pod_no"
                className="block text-sm font-medium text-gray-700"
              >
                POD Number
              </label>
              <Field
                type="text"
                id="iw_pod_no"
                name="iw_pod_no"
                className="mt-1 p-2 border rounded-md w-full"
              />
              <ErrorMessage
                name="iw_pod_no"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Add more fields here */}
            {/* ... */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DocumentForm;
