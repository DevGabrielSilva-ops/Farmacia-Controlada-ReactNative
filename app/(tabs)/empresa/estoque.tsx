
import { StyleSheet, View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
    const remedios = Array.from({ length: 6 }).map((_, i) => ({
        id: String(i),
        name: 'Dipirona Monidrata',
        quantity: 0,
        image: require('../../../assets/Dipirona.fw.png'),
    }));

    return (
        <View style={styles.container}>
            <FlatList
                data={remedios}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 0 }}
                contentContainerStyle={{ paddingHorizontal: 0, paddingBottom: 24 }}
                ListHeaderComponent={() => (
                    <>
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
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Controle De Estoque</Text>
                            <Text style={{ fontSize: 18, fontWeight: '400', color: 'rgb(133, 133, 133)' }}>Remédios disponíveis para doação</Text>
                        </View>
                    </>
                )}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.cardImage} />

                        <View style={styles.cardContent}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>Nome: {item.name}</Text>
                            <Text style={{ fontSize: 15, color: 'gray', marginBottom: 6 }}>Quantidade: {item.quantity}</Text>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 }}>
                                <Text style={styles.tag}>Dor de cabeça</Text>
                                <Text style={styles.tag}>Dor no corpo</Text>
                                <Text style={styles.tag}>Vômitos</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={styles.tarja}>Tarja</Text>

                                <TouchableOpacity style={styles.infoButton}>
                                    <Text style={{ fontSize: 14, color: 'white', textAlign: 'center' }}>Mais Infos</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
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

    card: {
        width: '50%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 8,
        marginTop: 50,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#eee',
        gap: 20,
    },

    cardImage: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        marginBottom: 8,
    },

    cardContent: {
        paddingHorizontal: 4,
    },

    tag: {
        fontSize: 10,
        fontWeight: '600',
        borderWidth: 1,
        maxWidth: 120,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
        borderColor: 'gray',
        color: 'gray',
        marginRight: 6,
        marginBottom: 6,
    },

    tarja: {
        fontSize: 14,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 12,
        backgroundColor: 'red',
    },

    infoButton: {
        backgroundColor: 'rgb(82, 248, 113)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        justifyContent: 'center',
    },

    
});
