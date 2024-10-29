// FindCombineSection.styles.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  progressContainer: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    width: '50%', // Adjust based on progress
    backgroundColor: '#5824FF',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  optionContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  radioContainer: {
    marginVertical: 15,
    marginLeft: 20,
  },
  radioButton: {
    borderColor: '#8501EA',
  },
  radioLabel: {
    color: '#333',
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#E6E0E9', // Light purple background
    borderTopLeftRadius: 5, // Rounded corners
    borderTopRightRadius: 5, // Rounded corners
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#6F5E76', // Darker gray bottom border
    height: 80, // Set a taller height
    textAlignVertical: 'top', // Keep text aligned to the top
  },
  infoContainer: {
    padding: 15,
    marginBottom: 30,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  infoText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 10,
  },
  infoBullet: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
    paddingLeft: 20, // Indentation for each bullet point
    marginBottom: 5,
  },
  bulletSymbol: {
    fontSize: 20, // Larger bullet symbol
    color: '#000000',
  },
  button: {
    backgroundColor: '#212121',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  customInput: {
    backgroundColor: '#E6E0E9', // Light purple background
    borderTopLeftRadius: 5, // Rounded corners
    borderTopRightRadius: 5, // Rounded corners
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#6F5E76', // Darker gray bottom border
    height: 80, // Set a taller height
    textAlignVertical: 'top', // Keep text aligned to the top
    marginTop: 20,
  },
  customButton: {
    backgroundColor: '#212121', // Custom background color
  },
  customButtonText: {
    fontSize: 18, // Custom font size
    color: '#FFF', // Custom text color
  },
  customProgressContainer: {
    height: 10, // Custom height
    backgroundColor: '#E0E0E0', // Background color
    borderRadius: 5,
    marginVertical: 20,
  },
  customProgressBar: {
    backgroundColor: '#5824FF', // Custom progress color
    borderRadius: 10,
  },
});
