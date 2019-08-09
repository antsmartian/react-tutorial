import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


/* Yup.object
const FormikExample = () => (
	<Formik 

		validateOnBlur={false}
		validateOnChange={false}
		validate = {values => {
			console.log('running validation ', values);

			let errors = {};

			if(!errors.name) {
				errors.name = 'Name is required'
			}

			return errors;
		}}
		initialValues={{name: ''}}
		onSubmit={values => {
			console.log("submitting", values)
		}} >
			{ ({handleSubmit, handleChange, values, errors, touched})  => (
					<form onSubmit={handleSubmit}>
						<input 
								onChange={handleChange}
								name="name" 
								value={values.name} 
								type="text" 
								placeholder="Name" />

						{errors.name && touched.name &&
							<span style={{color: "red", fontWeight: "bold"}}>
								{errors.name}
							</span> }


						<button>Submit</button>
					</form>
				) }
	</Formik>
)
*/

/*
const FormikExample = () => (

	<Formik

		initialValues={{  firstName: '', lastName: '', email: '' }}
		validate={
			values => {
				let errors = {};
				const { firstName,  lastName, email} = values;

				if(!firstName) {
					errors.firstName = "First Name is required"
				}

				if(!lastName) 
					errors.lastName = 'last Name is required'

				if(!email)
					errors.email = 'Email is required'


				return errors;
			}
		}

		onSubmit={values => console.log("submitting")}
	>

		{
			({handleSubmit}) => (
				<React.Fragment>
					<h2>Formik button with inbuilt error Component</h2>
					<Form onSubmit={handleSubmit}>
						<div>
							<Field placeholder="first name" name="firstName" />
							<ErrorMessage name="firstName" />
						</div>

					</Form>
				</React.Fragment>
			)
		}


	</Formik>


)
*/

const schema = Yup.object().shape({
	firstName: Yup.string()
				  .min(2, 'Too short')
				  .max(50, 'Too long')
				  .required('Required..'), 

    lastname: Yup.string()
    			 .min(2, 'Too small')
    			 .max(10, 'too long word')
    			 .required('this is required')
});

const FormikExample = () => (
	<Formik
		initialValues={{firstName: '', lastname: ''}}
		validateOnChange={true}
		validateOnBlur={true}
		validationSchema={schema}
		onSubmit={
			values => console.log("submitting the values ", values)
		}>

		{({ handleSubmit, errors, touched }) => (
			<React.Fragment>
				<h3>Yup Demo</h3>

				<Form onSubmit={handleSubmit}>
					<Field placeholder="name" name="firstName" />
					{
						errors.firstName && touched.firstName &&
						<div style={{color: 'red'}}>
							{errors.firstName}
						</div>
					}

					<Field placeholder="lastname" name="lastname" />
					{
						errors.lastname && touched.lastname &&
						<div style={{color: 'red'}}>
							{errors.lastname}
						</div>
					}
				</Form>

			</React.Fragment>
		)}		
	</Formik>	
)

export default FormikExample;


const FormContainer = styled.form `
	border: solid 3pxl 
	padding: 25px;
`

class Form2 extends React.Component {

	state = {
		isValid: true, 
		isSubmitting: false
	}

	validForm = () => {
		const keys = Object.keys(this.state)

		for (let i=0; i< keys.length; i++) {
			console.log(keys[i]);
			if (keys[i] === 'isValid')
				continue;

			console.log(this.state[keys[i]])
			if(!this.state[keys[i]])
				return false;
		}

		return true;

	}

	notify = (name, isValid) => {
		this.setState({ [name] : isValid }, () => {
			this.setState({
				isValid: this.validForm()
			})
		})
	}

	render() {
		return (
				<FormContainer>
					<div>
						<Input 
							pattern="^[0-9]{2,3}$"
							patternFn={() => true}
							errMessage="Must contain 2-3 digits"
							desc="2-3 characters"
							notify={this.notify}
							name="fullname"
						/>


						<Input 
							pattern="^[0-9]{2,10}$"
							errMessage="Must contain 2-10 characters"
							desc="2-10 characters"
							name="lastname"
							notify={this.notify}
						/>


						<button disabled={this.state.isValid}>Submit</button>
					</div>
				</FormContainer>
			)
	}
}

const validate = (val, errMessage, pattern) => {
	const valid = new RegExp(pattern).test(val);
	return valid ? '' : errMessage;
}


const InputContainer = styled.div `
	padding: 20px;
	border: solide 1px grey;
`

const ErrorMessage2 = styled.div `
	padding: 20px;
	border: red;
	background: pink;
	color: white;
`

const InnerInput = styled.input `
	font-size: 20px;
`

class Input extends React.Component {
	state = {
		error: '', 
		data: ''
	}

	handleChange = (event) => {
		const { errMessage, name, notify, pattern } = this.props;
		const error = validate(event.target.value, errMessage, pattern);

		notify(name, error === '');
		this.setState({data: event.target.value, error})
	}

	render() {
		const { error, data } = this.state;
		const { desc } = this.props;

		// a : 2, b : 5 
		// a={2} b={5} < ...props

		return (
				<InputContainer>
					{error && 
						<ErrorMessage2>{error}</ErrorMessage2>
					}

					<div> {desc} </div>
					<InnerInput
						value={data}
						onChange={this.handleChange} {...this.props} />
				</InputContainer>
			)

	}
}


