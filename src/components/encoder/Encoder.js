import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import coder from "./../../codes";

// Import the react-native-sound module
let Sound = require('react-native-sound');

// Enable playback in silence mode
Sound.setCategory('Playback');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

let dash = new Sound("dash.wav", Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
});

let dot = new Sound("dot.wav", Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
});

let playMorseSound = function(str, position) {
    if (position > str.length) return;

    let char = str.charAt(position);

    switch(char) {
        case '=':
            console.log('Playing dash.');
            dash.play((success) => {
                return playMorseSound(str, ++position);
            });

            // Play dash.
            break;
        case '.':
            // Play dot.
            console.log('Playing dot.');
            dot.play((success) => {
                return playMorseSound(str, ++position);
            });

            break;
        default:
            // Play empty space...
            console.log('space');
            setTimeout(() => {
                return playMorseSound(str, ++position);
            }, 150);

            break;
    }
};

class Encoder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: ''
        };
    }

    onChangeSourceText = (text) => {
        this.setState({input: text});
        this.setState({output: coder.convertFromString(text)});
    };

    onChangeDestText = (text) => {
        this.setState({output: text});
        this.setState({input: coder.convertToString(text)});
    };

    playSound = () => {
        console.log(this.state.output);
        playMorseSound(this.state.output, 0);
    };

    render() {
        return (
            <View>
                <View>
                    <Text style={styles.title}>Regular text</Text>
                    <TextInput
                        style={styles.encoder}
                        multiline
                        placeholder={"Input text here"}
                        placeholderTextColor={"#888"}
                        onChangeText={text => this.onChangeSourceText(text)}
                        value={this.state.input}
                    />
                </View>

                <View>
                    <Text style={styles.title}>Output text</Text>
                    <TextInput
                        multiline
                        style={styles.decoder}
                        placeholder={coder.convertFromString("Input text here")}
                        placeholderTextColor={"#fff"}
                        onChangeText={text => this.onChangeDestText(text)}
                        value={this.state.output}
                    />
                </View>

                <TouchableOpacity style={styles.soundButtonStyle} activeOpacity={0.5} onPress={this.playSound}>
                    <Text style={styles.soundText}>Generate morse code as sound</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    soundButtonStyle: {
        backgroundColor: '#32407b',
        borderRadius: 4,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    soundText: {
        textAlign: 'center',
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 16,
        color: '#fff',
    },
    title: {
        color: '#666',
        marginLeft: 20,
        marginBottom: 5,
        fontFamily: 'HelveticaNeue',
        fontSize: 14,
    },
    encoder: {
        backgroundColor: '#121212',
        color: '#fff',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 4,
        fontSize: 18,
    },
    decoder: {
        backgroundColor: '#121212',
        color: '#fff',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 4,
        fontSize: 18,
    },
});

export default Encoder;
