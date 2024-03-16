import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const isWeb = windowWidth > 600;

const ApartmentDetailsPage = ({ route }) => {
  const { apartment } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: apartment.image }} style={[styles.apartmentImage, isWeb && styles.webApartmentImage]} />
        <View style={[styles.detailsContainer, isWeb && styles.webDetailsContainer]}>
          <Text style={styles.title}>{apartment.title}</Text>
          <Text style={styles.description}>{apartment.description}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoText}>{apartment.address.city}, {apartment.address.state}</Text>
            <Text style={styles.infoText}>{apartment.address.street}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Contact:</Text>
            <Text style={styles.infoText}>{apartment.contactInfo.name}</Text>
            <Text style={styles.infoText}>{apartment.contactInfo.phone}</Text>
            <Text style={styles.infoText}>{apartment.contactInfo.email}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Property Details:</Text>
            <Text style={styles.infoText}>Building Name: {apartment.buildingName}</Text>
            <Text style={styles.infoText}>Year Built: {apartment.yearBuilt}</Text>
            <Text style={styles.infoText}>Bedrooms: {apartment.bedrooms}</Text>
            <Text style={styles.infoText}>Bathrooms: {apartment.bathrooms}</Text>
            <Text style={styles.infoText}>Area: {apartment.area} m&sup2;</Text>
            <Text style={styles.infoText}>Floor Number: {apartment.floor}</Text>
            <Text style={styles.infoText}>Condition: {apartment.condition}</Text>
            <Text style={styles.infoText}>Price: {apartment.price} EGP</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingBottom: 20,
  },
  content: {
    width: '90%',
    alignItems: 'center',
  },
  apartmentImage: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  webApartmentImage: {
    width: '50%',
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  webDetailsContainer: {
    width: '50%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
  },
});

export default ApartmentDetailsPage;
