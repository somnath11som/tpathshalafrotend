import React from 'react';
import {
	Formik,
	Form,
	Field,
	FieldArray,
	FastField,
	ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import { Box, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const initialValues = {
	name: '',
	email: '',
	channel: '',
	comments: '',
	address: '',
	social: {
		facebook: '',
		twitter: '',
	},
	phoneNumbers: ['', ''],
	userinfo: [
		{
			fatherName: '',
			motherName: '',
			age: '',
			gender: '',
			bloodGroup: '',
		},
	],
	gender: '',
};

const options = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'other', label: 'Other' },
];

const onSubmit = (values) => {
	console.log(values, 'h');
};

const validationSchema = Yup.object({
	name: Yup.string().required('This field is required'),
	email: Yup.string()
		.email('Invalid email format')
		.required('This field is required'),
	channel: Yup.string().required('This field is required'),
	comments: Yup.string().required('This field is required'),
	social: Yup.object({
		facebook: Yup.string().url('Invalid URL'),
		twitter: Yup.string().url('Invalid URL'),
	}),
	phoneNumbers: Yup.array().of(
		Yup.string().matches(/^[0-9]+$/, 'Invalid phone number')
	),
	userinfo: Yup.array().of(
		Yup.object({
			fatherName: Yup.string().required('This field is required'),
			motherName: Yup.string(),
			age: Yup.string(),
			gender: Yup.string(),
			bloodGroup: Yup.string(),
		})
	),
	gender: Yup.object({
		value: Yup.string().required('AutoComplete field is required'),
		label: Yup.string(),
	})
		.nullable()
		.required('AutoComplete field is required'),
});

const validateComments = (value) => {
	let error;
	if (!value) {
		error = 'This field is required';
	}
	return error;
};

const YoutubeFormOptimization = () => {
	const globalState = useSelector(
		(state) => state?.theme || { darkMode: false }
	);
	const isDarkMode = globalState?.darkMode || false;

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			enableReinitialize>
			{(formik) => (
				<Form>
					<Box
						textAlign='end'
						border={`1px solid ${
							isDarkMode
								? 'var(--chakra-colors-darkModeBordercolor)'
								: 'var(--chakra-colors-veryLightBlueColor)'
						}`}
						padding='15px'
						borderRadius='10px'
						marginBottom='15px'>
						<Box
							width='100%'
							display='flex'
							flexWrap='wrap'
							gap='15px'>
							<Box
								width='100%'
								display='flex'
								flexWrap='wrap'
								gap='15px'>
								<FormControl width='24%'>
									<FormLabel htmlFor='name'>Name</FormLabel>
									<Field type='text' name='name' id='name' />
									<ErrorMessage
										name='name'
										component={TextError}
										className='error'
									/>
								</FormControl>
								<FormControl width='24%'>
									<FormLabel htmlFor='email'>
										E-mail
									</FormLabel>
									<Field
										type='email'
										name='email'
										id='email'
									/>
									<ErrorMessage
										name='email'
										component={TextError}
										className='error'
									/>
								</FormControl>
								<FormControl width='24%'>
									<FormLabel htmlFor='channel'>
										Channel
									</FormLabel>
									<Field
										type='text'
										name='channel'
										id='channel'
									/>
									<ErrorMessage
										name='channel'
										component={TextError}
										className='error'
									/>
								</FormControl>
								<FormControl width='24%'>
									<FormLabel htmlFor='comments'>
										Comments
									</FormLabel>
									<Field
										as='textarea'
										id='comments'
										name='comments'
										validate={validateComments}
									/>
									<ErrorMessage
										name='comments'
										component={TextError}
										className='error'
									/>
								</FormControl>
							</Box>
							<Box
								width='100%'
								display='flex'
								flexWrap='wrap'
								gap='15px'>
								<FormControl width='24%'>
									<FormLabel htmlFor='address'>
										Address
									</FormLabel>
									<FastField name='address'>
										{(props) => {
											const { field, meta } = props;
											return (
												<div>
													<input
														type='text'
														id='address'
														name='address'
														{...field}
													/>
													{meta.touched &&
													meta.error ? (
														<div>{meta.error}</div>
													) : (
														''
													)}
												</div>
											);
										}}
									</FastField>
									<ErrorMessage
										name='address'
										component={TextError}
										className='error'
									/>
								</FormControl>
								<FormControl width='24%'>
									<FormLabel htmlFor='facebook'>
										Facebook Profile
									</FormLabel>
									<Field
										type='text'
										id='facebook'
										name='social.facebook'
									/>
								</FormControl>
								<FormControl width='24%'>
									<FormLabel htmlFor='twitter'>
										Twitter Profile
									</FormLabel>
									<Field
										type='text'
										id='twitter'
										name='social.twitter'
									/>
								</FormControl>
								<FormControl width='24%'>
									<FormLabel htmlFor='primaryPh'>
										Primary Phone Number
									</FormLabel>
									<Field
										type='text'
										id='primaryPh'
										name='phoneNumbers[0]'
									/>
								</FormControl>
							</Box>
							<Box
								width='100%'
								display='flex'
								flexWrap='wrap'
								gap='15px'>
								<FormControl width='49%'>
									<FormLabel htmlFor='secondaryPh'>
										Secondary Phone Number
									</FormLabel>
									<Field
										type='text'
										id='secondaryPh'
										name='phoneNumbers[1]'
									/>
								</FormControl>
								<FormControl width='49%'>
									<FormLabel htmlFor='gender'>
										Gender
									</FormLabel>
									<Field name='gender'>
										{({ field, form }) => (
											<Select
												{...field}
												options={options}
												isSearchable
												onChange={(option) =>
													form.setFieldValue(
														'gender',
														option
													)
												}
												onBlur={() =>
													form.setFieldTouched(
														'gender',
														true
													)
												}
											/>
										)}
									</Field>
									<ErrorMessage
										name='gender'
										component={TextError}
										className='error'
									/>
								</FormControl>
							</Box>
							<FormControl width='100%'>
								<FormLabel>User Others info</FormLabel>
								<FieldArray name='userinfo'>
									{(fieldArrayProps) => {
										const { push, remove, form } =
											fieldArrayProps;
										const { values } = form;
										const { userinfo } = values;

										return (
											<Box>
												{userinfo.map((user, index) => (
													<Box
														key={index}
														display='flex'
														alignItems='center'
														gap='10px'>
														<Field
															name={`userinfo[${index}].fatherName`}
															placeholder='Father Name'
														/>
														<Field
															name={`userinfo[${index}].motherName`}
															placeholder='Mother Name'
														/>
														<Field
															name={`userinfo[${index}].age`}
															placeholder='Age'
														/>
														<Field
															name={`userinfo[${index}].gender`}
															placeholder='Gender'
														/>
														<Field
															name={`userinfo[${index}].bloodGroup`}
															placeholder='Blood Group'
														/>

														{index > 0 && (
															<Button
																type='button'
																onClick={() =>
																	remove(
																		index
																	)
																}>
																-
															</Button>
														)}

														<Button
															type='button'
															onClick={() =>
																push({
																	fatherName:
																		'',
																	motherName:
																		'',
																	age: '',
																	gender: '',
																	bloodGroup:
																		'',
																})
															}>
															+
														</Button>
													</Box>
												))}
											</Box>
										);
									}}
								</FieldArray>
							</FormControl>
						</Box>
						<Button type='submit' size='lg'>
							Submit
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default YoutubeFormOptimization;
