import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image, ScrollView, StyleSheet, Platform } from 'react-native';
import axios from 'axios';

const isWeb = Platform.OS === 'web';

const ApartmentListingPage = ({ navigation }) => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/apartments/');
      setApartments(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching apartments:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {apartments.map(apartment => (
        <TouchableOpacity
          key={apartment.id}
          onPress={() => navigation.navigate('ApartmentDetails', { apartment })}
          style={[
            styles.apartmentCard,
            isWeb ? styles.apartmentCardWeb : null,
          ]}
        >
          <Image source={{ uri: apartment.image }} style={styles.apartmentImage} />
          <Text style={styles.apartmentTitle}>{apartment.title}</Text>
          <Text style={styles.apartmentCity}>{apartment.address.city}</Text>
          <Text style={styles.apartmentPrice}>{apartment.price} EGP</Text>
          <Text style={styles.apartmentArea}>{apartment.area} m&sup2;</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  apartmentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  apartmentCardWeb: {
    width: 300, // Adjust width for web
  },
  apartmentImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  apartmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  apartmentCity: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  apartmentPrice: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  apartmentArea: {
    fontSize: 16,
    color: '#333',
  },
});

export default ApartmentListingPage;
