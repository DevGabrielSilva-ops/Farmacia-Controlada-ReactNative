
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Prontuário - Receitas</Text>
          <Text style={{ fontSize: 18, fontWeight: 400, color: 'rgb(133, 133, 133)' }}>Receituários a serem análisados pela equipe</Text>
        </View>

        <View style={styles.cardInputReceitas}>
          <TextInput placeholder="Procure o nome do Paciente" style={{ padding: 10, width: 300, borderRadius: 8, color: 'rgb(71, 71, 73)', backgroundColor: 'rgb(235, 232, 232)' }} />
          <TouchableOpacity style={{ padding: 10, backgroundColor: '#369262', borderRadius: 8 }}>
            <Text style={{ color: 'white' }}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>


          <View style={styles.triageCard}>
            <View style={styles.triageHeader}>
              <Text style={styles.triageTitulo}>Receita #001</Text>

              <View style={{flexDirection: 'row', gap: 10}}>
                <View style={[styles.triageEstado, { backgroundColor: '#E6AF0A' }]}>
                  <Text style={styles.triageEstadoText}>Pendente</Text>
                </View>
                <View style={[styles.triageEstado, { backgroundColor: '#5dae42' }]}>
                  <TouchableOpacity>
                    <Text style={styles.triageEstadoText}>Mais Info</Text>
                  </TouchableOpacity>
                  
                </View>

              </View>
            </View>
            <Text style={styles.triageInfo}>Paciente: João Silva</Text>
            <Text style={styles.triageInfo}>Data: 25/05/2026</Text>
            <View style={styles.triageAcao}>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#72CAA5' }]}>
                <Text style={styles.triageButtonText}>Aprovar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#E60A0A' }]}>
                <Text style={styles.triageButtonText}>Rejeitar</Text>
              </TouchableOpacity>
            </View>
          </View>



          <View style={styles.triageCard}>
            <View style={styles.triageHeader}>
              <Text style={styles.triageTitulo}>Receita #001</Text>

              <View style={{flexDirection: 'row', gap: 10}}>
                <View style={[styles.triageEstado, { backgroundColor: '#E6AF0A' }]}>
                  <Text style={styles.triageEstadoText}>Pendente</Text>
                </View>
                <View style={[styles.triageEstado, { backgroundColor: '#5dae42' }]}>
                  <TouchableOpacity>
                    <Text style={styles.triageEstadoText}>Mais Info</Text>
                  </TouchableOpacity>
                  
                </View>

              </View>
            </View>
            <Text style={styles.triageInfo}>Paciente: João Silva</Text>
            <Text style={styles.triageInfo}>Data: 25/05/2026</Text>
            <View style={styles.triageAcao}>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#72CAA5' }]}>
                <Text style={styles.triageButtonText}>Aprovar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#E60A0A' }]}>
                <Text style={styles.triageButtonText}>Rejeitar</Text>
              </TouchableOpacity>
            </View>
          </View>



          <View style={styles.triageCard}>
            <View style={styles.triageHeader}>
              <Text style={styles.triageTitulo}>Receita #001</Text>

              <View style={{flexDirection: 'row', gap: 10}}>
                <View style={[styles.triageEstado, { backgroundColor: '#E6AF0A' }]}>
                  <Text style={styles.triageEstadoText}>Pendente</Text>
                </View>
                <View style={[styles.triageEstado, { backgroundColor: '#5dae42' }]}>
                  <TouchableOpacity>
                    <Text style={styles.triageEstadoText}>Mais Info</Text>
                  </TouchableOpacity>
                  
                </View>

              </View>
            </View>
            <Text style={styles.triageInfo}>Paciente: João Silva</Text>
            <Text style={styles.triageInfo}>Data: 25/05/2026</Text>
            <View style={styles.triageAcao}>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#72CAA5' }]}>
                <Text style={styles.triageButtonText}>Aprovar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#E60A0A' }]}>
                <Text style={styles.triageButtonText}>Rejeitar</Text>
              </TouchableOpacity>
            </View>
          </View>



          <View style={styles.triageCard}>
            <View style={styles.triageHeader}>
              <Text style={styles.triageTitulo}>Receita #001</Text>

              <View style={{flexDirection: 'row', gap: 10}}>
                <View style={[styles.triageEstado, { backgroundColor: '#E6AF0A' }]}>
                  <Text style={styles.triageEstadoText}>Pendente</Text>
                </View>
                <View style={[styles.triageEstado, { backgroundColor: '#5dae42' }]}>
                  <TouchableOpacity>
                    <Text style={styles.triageEstadoText}>Mais Info</Text>
                  </TouchableOpacity>
                  
                </View>

              </View>
            </View>
            <Text style={styles.triageInfo}>Paciente: João Silva</Text>
            <Text style={styles.triageInfo}>Data: 25/05/2026</Text>
            <View style={styles.triageAcao}>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#72CAA5' }]}>
                <Text style={styles.triageButtonText}>Aprovar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#E60A0A' }]}>
                <Text style={styles.triageButtonText}>Rejeitar</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.triageCard}>
            <View style={styles.triageHeader}>
              <Text style={styles.triageTitulo}>Receita #001</Text>

              <View style={{flexDirection: 'row', gap: 10}}>
                <View style={[styles.triageEstado, { backgroundColor: '#E6AF0A' }]}>
                  <Text style={styles.triageEstadoText}>Pendente</Text>
                </View>
                <View style={[styles.triageEstado, { backgroundColor: '#5dae42' }]}>
                  <TouchableOpacity>
                    <Text style={styles.triageEstadoText}>Mais Info</Text>
                  </TouchableOpacity>
                  
                </View>

              </View>
            </View>
            <Text style={styles.triageInfo}>Paciente: João Silva</Text>
            <Text style={styles.triageInfo}>Data: 25/05/2026</Text>
            <View style={styles.triageAcao}>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#72CAA5' }]}>
                <Text style={styles.triageButtonText}>Aprovar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#E60A0A' }]}>
                <Text style={styles.triageButtonText}>Rejeitar</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.triageCard}>
            <View style={styles.triageHeader}>
              <Text style={styles.triageTitulo}>Receita #001</Text>

              <View style={{flexDirection: 'row', gap: 10}}>
                <View style={[styles.triageEstado, { backgroundColor: '#E6AF0A' }]}>
                  <Text style={styles.triageEstadoText}>Pendente</Text>
                </View>
                <View style={[styles.triageEstado, { backgroundColor: '#5dae42' }]}>
                  <TouchableOpacity>
                    <Text style={styles.triageEstadoText}>Mais Info</Text>
                  </TouchableOpacity>
                  
                </View>

              </View>
            </View>
            <Text style={styles.triageInfo}>Paciente: João Silva</Text>
            <Text style={styles.triageInfo}>Data: 25/05/2026</Text>
            <View style={styles.triageAcao}>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#72CAA5' }]}>
                <Text style={styles.triageButtonText}>Aprovar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.triageButton, { backgroundColor: '#E60A0A' }]}>
                <Text style={styles.triageButtonText}>Rejeitar</Text>
              </TouchableOpacity>
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

  cardInputReceitas: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 40
  },

  triageCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  triageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  triageTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  triageEstado: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20
  },
  triageEstadoText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  triageInfo: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  triageAcao: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  triageButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  triageButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
  },





});
