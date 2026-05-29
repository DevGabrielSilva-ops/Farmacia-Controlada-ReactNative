

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
                <View style={[styles.layoutItemDoacao, styles.statusRejeitado]}>
                    <Image
                     source={require('../../../assets/box.png')}
                     style={{width:50, height:50}}
                    />
                    <Text style={styles.itemTitle}>Doações Rejeitadas</Text>
                    <Text style={styles.itemCount}>0</Text>
                </View>

                <View style={[styles.layoutItemDoacao, styles.statusAnalise]}>
                    <Image
                     source={require('../../../assets/box.png')}
                     style={{width:50, height:50}}
                    />
                    <Text style={styles.itemTitle}>Em Análise</Text>
                    <Text style={styles.itemCount}>0</Text>
                </View>

                <View style={[styles.layoutItemDoacao, styles.statusLiberado]}>
                    <Image
                     source={require('../../../assets/box.png')}
                     style={{width:50, height:50}}
                    />
                    <Text style={styles.itemTitle}>Doações Liberadas</Text>
                    <Text style={styles.itemCount}>0</Text>
                </View>
            </View>

            <View style={styles.titulo}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Lista de Doações</Text>
                    <Text style={{ fontSize: 18, fontWeight: '400', color: 'rgb(133, 133, 133)' }}>Doações disponíveis para feedback</Text>
                </View>

            <View style={styles.listaDoaLayout}>
                

                <View style={styles.donationCard}>
                    <View style={styles.cardHeaderRow}>
                        <View style={styles.cardHeaderText}>
                            <Text style={styles.donationTitle}>Doação #001</Text>
                            <Text style={styles.cardInfo}>Data: 27/05/2026</Text>
                            <Text style={styles.cardInfo}>Medicamento: Dipirona</Text>
                        </View>

                        <View style={styles.statusRow}>
                            <View style={[styles.statusBadge, styles.statusPendente]}>
                                <Text style={styles.badgeText}>Pendente</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.buttonApprove}>
                            <Ionicons name="checkmark-outline" size={18} color="#fff" />
                            <Text style={styles.buttonText}>Aprovar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonReject}>
                            <Ionicons name="close-outline" size={18} color="#fff" />
                            <Text style={styles.buttonText}>Rejeitar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonInfo}>
                            <Ionicons name="information-circle-outline" size={18} color="#fff" />
                            <Text style={styles.buttonText}>Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.donationCard}>
                    <View style={styles.cardHeaderRow}>
                        <View style={styles.cardHeaderText}>
                            <Text style={styles.donationTitle}>Doação #002</Text>
                            <Text style={styles.cardInfo}>Data: 27/05/2026</Text>
                            <Text style={styles.cardInfo}>Medicamento: Dipirona</Text>
                        </View>

                        <View style={styles.statusRow}>
                            <View style={[styles.statusBadge, styles.statusAprovado]}>
                                <Text style={styles.badgeText}>Aprovado</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.donationCard}>
                    <View style={styles.cardHeaderRow}>
                        <View style={styles.cardHeaderText}>
                            <Text style={styles.donationTitle}>Doação #003</Text>
                            <Text style={styles.cardInfo}>Data: 27/05/2026</Text>
                            <Text style={styles.cardInfo}>Medicamento: Dipirona</Text>
                        </View>

                        <View style={styles.statusRow}>
                            <View style={[styles.statusBadge, styles.statusAprovado]}>
                                <Text style={styles.badgeText}>Aprovado</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.donationCard}>
                    <View style={styles.cardHeaderRow}>
                        <View style={styles.cardHeaderText}>
                            <Text style={styles.donationTitle}>Doação #004</Text>
                            <Text style={styles.cardInfo}>Data: 27/05/2026</Text>
                            <Text style={styles.cardInfo}>Medicamento: Dipirona</Text>
                        </View>

                        <View style={styles.statusRow}>
                            <View style={[styles.statusBadge, styles.statusAprovado]}>
                                <Text style={styles.badgeText}>Aprovado</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.donationCard}>
                    <View style={styles.cardHeaderRow}>
                        <View style={styles.cardHeaderText}>
                            <Text style={styles.donationTitle}>Doação #005</Text>
                            <Text style={styles.cardInfo}>Data: 27/05/2026</Text>
                            <Text style={styles.cardInfo}>Medicamento: Dipirona</Text>
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

    badgeText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12,
    },

    layoutDoacao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        marginTop: 16,
        marginBottom: 20,
        paddingHorizontal: 16,
    },

    layoutItemDoacao: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 12,
        borderRadius: 16,
        backgroundColor: '#f5f5f5',
        minHeight: 140,
    },

    statusRejeitado: {
        backgroundColor: '#ff0000',
        borderWidth: 1,
        shadowRadius: 8,
        borderColor: '#fca5a5',
    },

    statusAnalise: {
        backgroundColor: '#ffcc00',
        borderWidth: 1,
        shadowRadius: 8,
        borderColor: '#fde68a',
    },

    statusLiberado: {
        backgroundColor: '#04ff7d',
        borderWidth: 1,
        shadowRadius: 8,
        borderColor: '#a7f3d0',
    },

    itemTitle: {
        marginTop: 10,
        fontSize: 13,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
    },

    itemCount: {
        marginTop: 8,
        fontSize: 28,
        fontWeight: '800',
        color: '#fff',
    },

    donationCard: {
        width: '90%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 14,
        padding: 16,
        marginBottom: 14,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },

    donationTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1f2937',
    },

    cardInfo: {
        fontSize: 12,
        color: '#6b7280',
    },

    actionButtons: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 14,
    },

    buttonApprove: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#10b981',
        paddingVertical: 11,
        borderRadius: 10,
        gap: 6,
    },

    buttonReject: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d92f2f',
        paddingVertical: 11,
        borderRadius: 10,
        gap: 6,
    },

    buttonInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0ea5e9',
        paddingVertical: 11,
        borderRadius: 10,
        gap: 6,
    },

    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },

    listaDoaLayout: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginTop: 24,
        marginBottom: 20,
    },

});
