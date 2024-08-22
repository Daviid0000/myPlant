
import{ useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function TabTwoScreen() {

  const [text, setText] = useState('');
  return (
    <>
      <View>
        <Text>
          Encuentra tus plantas
        </Text>  
        <TextInput 
          onChangeText={setText}
          value={text} 
        />
      </View>    
    </>
  );
}

const styles = StyleSheet.create({

});
