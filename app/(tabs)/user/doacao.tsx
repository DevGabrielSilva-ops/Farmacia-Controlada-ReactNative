import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const cores = {
    primaria: '#72CAA5',
    secundaria: '#369262',
    vermelhaDestruir: '#D92F2F',
    amarelaAlerta: '#F59E0B',
    verdeSuccesso: '#10B981',
    fundoPagina: '#FFFFFF',
    textoPrincipal: '#1F2937',
    textoSecundario: '#6B7280',
    borda: '#E5E7EB',
    fundoLeve: '#F9FAFB',
};


export default function HistoricoUsuario() {
    

    return (
        <View style={estilos.containerPrincipal}>

            <View style={estilos.header}>
                <Image
                    source={require('../../../assets/LogoFarm.fw.png')}
                    style={estilos.logo}
                    resizeMode="contain"
                />

                <View style={estilos.acaoHeader}>
                    <TouchableOpacity style={estilos.buttonIcone} accessibilityLabel="Notificações">
                        <Ionicons name="notifications-outline" size={28} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.buttonPerfil} onPress={() => router.push('/(tabs)/user/perfil')} accessibilityLabel="Perfil do usuário">
                        <Ionicons name="person-circle-outline" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={estilos.tituloSessao}>
                <Text style={estilos.tituloPrincipal}>Doações</Text>
                <Text style={estilos.subTitulo}>Aba com finalidade para realizar suas doações</Text>
            </View>

            <View>
                <View>
                    <TouchableOpacity style={{
                        backgroundColor: cores.primaria,
                        padding: 10,
                        maxWidth: 200
                        ,
                        borderRadius:13}}>
                        <Text style={{textAlign:'center',fontSize:17, color: '#fff', fontWeight:'500'}}>Realizar Doação</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View>
    );
}

const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: cores.fundoLeve,
    },
   header: {
        height: 100,
        backgroundColor: '#72CAA5',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 10,
    },
    logo: {
        width: 200,
        height: 80,
    },
    acaoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonIcone: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPerfil: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
    },
    tituloSessao: {
        marginLeft: 25,
        marginTop: 20,
        marginBottom: 30,
    },
    tituloPrincipal: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
    },
    subTitulo: {
        fontSize: 18,
        color: '#666',
        marginTop: 4,
    },
    
});