

import { StyleSheet, View, TouchableOpacity, Image, Text,ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function HomeScreen() {


    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/LogoFarm.fw.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <View style={styles.acaoHeader}>
                    <TouchableOpacity style={styles.buttonIcone} accessibilityLabel="Notificações">
                        <Ionicons name="notifications-outline" size={28} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonPerfil} accessibilityLabel="Perfil do usuário">
                        <Ionicons name="person-circle-outline" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.titulo}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Central de Doações</Text>
                <Text style={{ fontSize: 18, fontWeight: '400', color: 'rgb(133, 133, 133)' }}>Status de doações</Text>
            </View>

            <View style={styles.layoutDoacao}>
                <View style={[styles.layoutItemDoacao, { backgroundColor: 'rgb(255, 25, 0)' }]}>
                    <Image
                        source={require('../../../assets/box.png')}
                        style={{ width: 70, height: 70 }}
                    />
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Doação Rejeitadas</Text>
                    <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>0</Text>
                </View>

                <View style={[styles.layoutItemDoacao, { backgroundColor: 'rgb(255, 251, 0)' }]}>
                    <Image
                        source={require('../../../assets/box.png')}
                        style={{ width: 70, height: 70 }}
                    />
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Doação em análise</Text>
                    <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>0</Text>
                </View>

                <View style={styles.layoutItemDoacao}>
                    <Image
                        source={require('../../../assets/box.png')}
                        style={{ width: 70, height: 70 }}
                    />
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Doação Liberadas</Text>
                    <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>0</Text>
                </View>
            </View>

            <View style={styles.titulo}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Lista de Doações</Text>
                    <Text style={{ fontSize: 18, fontWeight: '400', color: 'rgb(133, 133, 133)' }}>Doações disponíveis para feedback</Text>
                </View>

            <View style={styles.listaDoaLayout}>
                

                <View style={{ width: '90%', borderWidth: 1, padding: 10, borderRadius: 12, borderColor: 'gray', shadowRadius: 2 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <View style={styles.cardHeaderRow}>
                            <View style={styles.cardHeaderText}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Doação #001</Text>
                                <Text style={{ fontSize: 13, color: 'gray' }}>Data Chegada: 27/05/2026</Text>
                                <Text style={{ fontSize: 13, color: 'gray' }}>Remédio: Dipirona</Text>
                            </View>

                            <View style={styles.statusRow}>
                                <View style={[styles.statusBadge, styles.statusPendente]}>
                                    <Text style={styles.badgeText}>Pendente</Text>
                                </View>
                                <TouchableOpacity style={styles.infoBadge}>
                                    <Text style={styles.badgeText}>Mostrar info</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                            <TouchableOpacity style={styles.buttonDoacao}>
                                <Text style={{ color: 'white' }}>Aprovar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.buttonDoacao, { backgroundColor: 'rgb(255, 58, 19)' }]}>
                                <Text style={{ color: 'white' }}>Reprovar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>


                <View style={{ width: '90%', borderWidth: 1, padding: 10, borderRadius: 12, borderColor: 'gray', shadowRadius: 2 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', gap: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Doação #002</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Data Chegada: 27/05/2026</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Remédio: Dipirona</Text>
                        </View>

                        <View style={styles.statusRow}>
                            <View style={[styles.statusBadge, styles.statusAprovado]}>
                                <Text style={styles.badgeText}>Aprovado</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ width: '90%', borderWidth: 1, padding: 10, borderRadius: 12, borderColor: 'gray', shadowRadius: 2 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', gap: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Doação #002</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Data Chegada: 27/05/2026</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Remédio: Dipirona</Text>
                        </View>

                        <View style={styles.statusRow}>
                            <View style={[styles.statusBadge, styles.statusAprovado]}>
                                <Text style={styles.badgeText}>Aprovado</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ width: '90%', borderWidth: 1, padding: 10, borderRadius: 12, borderColor: 'gray', shadowRadius: 2 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', gap: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Doação #002</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Data Chegada: 27/05/2026</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Remédio: Dipirona</Text>
                        </View>

                        <View style={styles.statusRow}>
                            <View style={[styles.statusBadge, styles.statusAprovado]}>
                                <Text style={styles.badgeText}>Aprovado</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ width: '90%', borderWidth: 1, padding: 10, borderRadius: 12, borderColor: 'gray', shadowRadius: 2 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', gap: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Doação #002</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Data Chegada: 27/05/2026</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Remédio: Dipirona</Text>
                        </View>

                        <View style={styles.statusRow}>
                            <View style={[styles.statusBadge, styles.statusAprovado]}>
                                <Text style={styles.badgeText}>Aprovado</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

    titulo: {
        marginLeft: 20,
        marginTop: 20
    },

    cardHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 12,
    },

    cardHeaderText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 5,
    },

    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },

    statusPendente: {
        backgroundColor: 'rgb(250, 204, 21)',
    },

    statusAprovado: {
        backgroundColor: 'rgb(16, 185, 129)',
    },

    infoBadge: {
        backgroundColor: 'rgb(0, 122, 255)',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },

    badgeText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12,
    },

    layoutDoacao: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    layoutItemDoacao: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'rgb(39, 243, 100)',
        shadowRadius: 8,
        width: '28%',
        height: '50%',
        padding: 10
    },

    listaDoaLayout: {
        justifyContent:'center',
        alignItems: 'center',
        gap: 20,
        marginTop: 30
    },

    buttonDoacao: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'rgb(3, 227, 14)',
    }


});
