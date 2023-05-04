import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title_head}> WhatsApp 2.0</Text>
      </View>
      <ScrollView style={styles.container_body}>

        <View style={styles.chat[0]}>
          <View style={styles.card_chat[0]}>
            <View style={styles.card_chat_head[0]}>
              <Image
                source={require('./assets/bart.png')}
                style={styles.card_img}
              />
              <Text style={styles.card_title}>Bart</Text>
            </View>
            <View style={styles.card_chat_body}>
              <Text>Oi papito!</Text>
              <Text>Como vai a mamis?</Text>
            </View>
          </View>
        </View>


        <View style={styles.chat[1]}>
          <View style={styles.card_chat[1]}>
            <View style={styles.card_chat_head[1]}>
              <Image
                source={require('./assets/homer.png')}
                style={styles.card_img}
              />
              <Text style={styles.card_title}>Homer</Text>
            </View>
            <View style={styles.card_chat_body}>
              <Text>Oi filhote!</Text>
              <Text>A mamis está lindiona!!!</Text>
            </View>
          </View>
        </View>
        <View style={styles.chat[0]}>
          <View style={styles.card_chat[0]}>
            <View style={styles.card_chat_head[0]}>
              <Image
                source={require('./assets/bart.png')}
                style={styles.card_img}
              />
              <Text style={styles.card_title}>Bart</Text>
            </View>
            <View style={styles.card_chat_body}>
              <Text>Oi papito!</Text>
              <Text>Como vai a mamis?</Text>
            </View>
          </View>
        </View>


        <View style={styles.chat[1]}>
          <View style={styles.card_chat[1]}>
            <View style={styles.card_chat_head[1]}>
              <Image
                source={require('./assets/homer.png')}
                style={styles.card_img}
              />
              <Text style={styles.card_title}>Homer</Text>
            </View>
            <View style={styles.card_chat_body}>
              <Text>Oi filhote!</Text>
              <Text>A mamis está lindiona!!!</Text>
            </View>
          </View>
        </View>
        <View style={styles.chat[0]}>
          <View style={styles.card_chat[0]}>
            <View style={styles.card_chat_head[0]}>
              <Image
                source={require('./assets/bart.png')}
                style={styles.card_img}
              />
              <Text style={styles.card_title}>Bart</Text>
            </View>
            <View style={styles.card_chat_body}>
              <Text>Oi papito!</Text>
              <Text>Como vai a mamis?</Text>
            </View>
          </View>
        </View>


        <View style={styles.chat[1]}>
          <View style={styles.card_chat[1]}>
            <View style={styles.card_chat_head[1]}>
              <Image
                source={require('./assets/homer.png')}
                style={styles.card_img}
              />
              <Text style={styles.card_title}>Homer</Text>
            </View>
            <View style={styles.card_chat_body}>
              <Text>Oi filhote!</Text>
              <Text>A mamis está lindiona!!!</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000', 
  },
  head:{
    backgroundColor: '#555',
    padding: 10,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20
  },
  title_head:{
    fontSize: 22,
    textAlign: 'center',
    color: '#FFF',
  },
  container_body: {
    backgroundColor: '#000',    
  },
  chat:[
    {
      width: '100%',      
      alignItems: 'flex-start',
    },
    {
      width: '100%',
      alignItems: 'flex-end',
    },
  ],
  card_chat:[
    {
      width: '85%',
      backgroundColor: "#ddd",
      padding: 7,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,      
      margin: 10,    
    },
    {
      width: '85%',
      backgroundColor: "#ddd",
      padding: 7,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      margin: 10,    
    },
  ],
  card_chat_head:[
    {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderStyle: 'solid',
      borderColor: '#ccc'
    },
    {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderStyle: 'solid',
      borderColor: '#ccc'
    }
  ],
  card_chat_body:{    
    margin: 10
  },
  card_img:{
    width: 50,
    height: 50,
    borderRadius: 40,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#000',
    margin: 5,
  },
  card_title:{
    fontSize: 20,
    fontWeight: '800',
    color: '#333',
    marginLeft: 10
  },



});
