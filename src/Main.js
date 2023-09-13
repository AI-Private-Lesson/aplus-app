import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Main.scss';
import * as Font from 'expo-font';

const backgroundImage = require('../assets/mainBackgroundImage.png');

export default function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={backgroundImage} />
            </View>
            <View>
                <View>
                    <Text style={styles.introText}>
                        대충 소개 문구 쏠라쏠라,
                    </Text>
                    <Text style={styles.appNameText}>에이플</Text>
                </View>
                <View style={styles.footerContainer}>
                    <Button theme="primary" label="Choose a photo" />
                    <Button label="Use this photo" />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
