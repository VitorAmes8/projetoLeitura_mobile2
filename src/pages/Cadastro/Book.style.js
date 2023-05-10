import { StyleSheet, } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#40B5AD',
    },
    pageTitle: {
      textAlign: 'center',
      fontSize: 18,
      marginBottom: 20,
      color: "#191970",
      fontWeight: 'bold',
    },

    input: {
      fontSize: 16,
      borderBottomColor: '#181818',
      borderBottomWidth: 1,
      marginBottom: 10,
      
    },
    saveButton: {
      backgroundColor: '#1434A4',
      fontWeight: 'bold',
      alignSelf: 'center',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    saveButtonInvalid: {
      opacity: 0.5,
    },
    saveButtonText: {
      color: '#7CFC00',
      fontSize: 16,
      fontWeight: 'bold',
    },
    cancelButton: {
      alignSelf: 'center',
      backgroundColor: '#1434A4',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    cancelButtonText: {
      color: '#800000',
      fontWeight: 'bold',
    },
    placeholder:{
      
    },
  });