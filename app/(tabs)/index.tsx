import { useEffect } from 'react';
import { View, Text, Button, StyleSheet  } from 'react-native';

export default function HomeScreen() {

  const fetching = () => {
    const datos = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data))
  
  }

  return (
    <>
      <View>
        <Text style={styles.title}>
          YourPlant
        </Text>
        <Button title='Send' onPress={fetching}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20
  }
})