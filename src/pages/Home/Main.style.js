import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#40B5AD',
    },
    itemRead:{
      textDecorationColor: '#000080',
      textDecorationStyle: 'double',
      textDecorationLine: 'line-through',
      fontStyle: 'italic'
    },
    toolbox: {
      flexDirection: "row",
      marginBottom: 5,
    },
    title: {
      flex: 1,
      fontSize: 18,
      color: "#191970",
      fontWeight: 'bold',
      textAlign: 'center',
    },
    toolboxButton: {
      backgroundColor: "#1434A4",
      borderRadius: 50,
      width: 22,
      height: 22,
      justifyContent: "center",
      alignItems: "center",
    },
    itemsContainer: {
    marginTop: '10px',
    border: '5px solid',
    borderRadius: '105px',
    padding: 5,
    borderTopColor: "#181818",
    borderLeftColor: "#181818",
    borderRightColor: "#181818",
    borderBottomColor: "#181818",
    },
    itemText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttons: {
        marginLeft: '80%',
        flexDirection: 'row',
        marginTop: -20
    },
    
  });

  