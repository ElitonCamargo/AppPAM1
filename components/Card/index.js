import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View>
            <View>
                <Image
                    source={{uri:'https://marvelucm.com/wp-content/uploads/2022/03/Morbius-Jared-Leto-1.jpg'}}
                    style={styles.img}
                />
                <Text>
                    Após relançamento nos cinemas, 'Morbius' FRACASSA novamente nas bilheterias
                </Text>
            </View>
        </View>
    );
}