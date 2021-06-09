import Communications from 'react-native-communications';
export function phoneCall() {
    Communications.phonecall("1122334455", true)
}