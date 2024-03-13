import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import FormikControl from './formikControl';

const FormContainer = () => {
	const dropdownOptions = [
		{ key: 'select an option', value: '' },
		{ key: 'option 1', value: 'option1' },
		{ key: 'option 2', value: 'option2' },
		{ key: 'option 3', value: 'option3' },
	];
	const radioOptions = [
		{ key: 'option 1', value: 'option1' },
		{ key: 'option 2', value: 'option2' },
		{ key: 'option 3', value: 'option3' },
	];
	const checkboxOptions = [
		{ key: 'option 1', value: 'coption1' },
		{ key: 'option 2', value: 'coption2' },
		{ key: 'option 3', value: 'coption3' },
	];
	const initialValues = {
		email: '',
		description: '',
		selectOption: '',
		radioOptions: '',
		checkboxOptions: [],
	};
	const validationSchema = Yup.object({
		email: Yup.string().required('Email Field is Required'),
		description: Yup.string().required('Description Field is Required'),
		selectOption: Yup.string().required('Select Field is Required'),
		radioOptions: Yup.array().required('Select Field is Required'),
		radiocheckboxOptionsOptions: Yup.string().required(
			'Select Field is Required'
		),
	});
	const onsubmit = (values) => console.log('Form data', values);
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onsubmit}>
				{(formik) => (
					<Form>
						<FormikControl
							control='input'
							type='email'
							label='Email'
							name='email'
						/>
						<FormikControl
							control='textarea'
							type='description'
							label='Description'
							name='description'
						/>
						<FormikControl
							control='select'
							label='Select a Topic'
							name='selectOption'
							options={dropdownOptions}
						/>
						<FormikControl
							control='radio'
							label='Radio Topic'
							name='radioOption'
							options={radioOptions}
						/>
						<FormikControl
							control='checkbox'
							label='Checkbox Topic'
							name='checkboxOption'
							options={checkboxOptions}
						/>

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormContainer;
