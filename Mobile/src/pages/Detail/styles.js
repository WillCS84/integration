import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    incident: {
        color: '#E02041',
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737480',
    },

    contactBox: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,

    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 6,
    },

    actions: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 15,
        height: 35,
        width: '70%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 0,
        borderWidth: 1,
        
    },

    actionText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: "bold",
        alignItems: 'center',
    },
});