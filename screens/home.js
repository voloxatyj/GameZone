import React,{useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../screens/reviewForm';

export default function Home({ navigation }) {
	const [modalOpen, setModalOpen] = useState(false)
	const [reviews, setReviews] = useState([
	{title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'loremipsum', key: '1'},
	{title: 'Gotta Catch Tham All (again)', rating: 4, body: 'lorem ipsum', key:'2'},
	{title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
])

	const addReviewForm = (values) => {
		values.key = Math.random().toString();
		setReviews((reviews) => {
			return [values,...reviews]
		});
		setModalOpen(false);
	}

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType='slide'>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<MaterialIcons
							name='close'
							style={{...styles.modalToggle,...styles.modalClose}}
							size={24}
							onPress={() => setModalOpen(false)}
						/>
						<ReviewForm addReviewForm={addReviewForm}/>
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<MaterialIcons 
				name='add'
				size={24}
				style={styles.modalToggle}
				onPress={() => setModalOpen(true)}
			/>

			<FlatList 
			data={reviews}
			renderItem={({ item }) => (
				<TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}>
					<Card>
						<Text style={globalStyles.titleText}>{item.title}</Text>
					</Card>
				</TouchableOpacity>
			)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	modalContent: {
		flex:1,
	},
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#f2f2f2',
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center',
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	},
})