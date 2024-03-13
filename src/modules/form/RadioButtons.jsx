import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorComponent from './ErrorComponent';

const RadioButtons = (props) => {
	const { label, name, options, ...rest } = props;
	return (
		<div className='form-control'>
			<label htmlFor={name}>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<React.Fragment key={option.key}>
								<input
									type='radio'
									id={option.value}
									{...field}
									value={option.value}
									checked={field.value === option.value}
								/>
								<label htmlFor={option.value}>
									{option.key}
								</label>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage name={name} component={ErrorComponent} />
		</div>
	);
};

export default RadioButtons;
