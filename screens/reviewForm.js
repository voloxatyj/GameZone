import React from 'react';
import { Text, Button, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/flatButton';

const ReviewSchema = yup.object({
	title: 
		yup.string()
		.required()
		.min(4),
	body:
		yup.string()
		.required()
		.min(8),
	rating:
		yup.string()
		.required()
		.test('numerics','Must be a nuber from 1-5', (val) => {
			return parseInt(val)>0 && parseInt(val)<6
		})
})

export default function ReviewDetails({ addReviewForm }) {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{title:'',body:'',rating:''}}
				validationSchema={ReviewSchema}
				onSubmit={(values, actions) => {
					actions.resetForm();
					addReviewForm(values)
				}}
			>
				{(props) => (
					<View>
						<TextInput 
							minHeight={60}
							style={globalStyles.input}
							value={props.values.title}
							placeholder='Review title'
							onChangeText={props.handleChange('title')}
							onBlur={props.handleBlur('title')}
						/>
						<Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
						<TextInput 
							multiline minHeight={60}
							style={globalStyles.input}
							value={props.values.body}
							placeholder='Review body'
							onChangeText={props.handleChange('body')}
							onBlur={props.handleBlur('body')}
						/>
						<Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
						<TextInput 
							minHeight={60}
							style={globalStyles.input}
							value={props.values.rating}
							placeholder='Rating 1-5'
							onChangeText={props.handleChange('rating')}
							keyboardType='numeric'
							onBlur={props.handleBlur('rating')}
						/>
						<Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
						<FlatButton text='submit' onPress={props.handleSubmit} />
					</View>
				)}
			</Formik>
		</View>
	)
}