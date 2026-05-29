import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const company = {
  name: 'Farmácia Controlada',
  cnpj: '12.345.678/0001-90',
  address: 'Rua das Flores, 123 · Centro · São Paulo/SP',
  phone: '(11) 98765-4321',
  email: 'contato@farmacia.com',
  createdAt: '01/05/2024',
};

export default function Perfil() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.profileGroup}>
            <View style={styles.profileImageWrapper}>
              <Image
                source={require('../../../assets/LogoFarm.fw.png')}
                style={styles.profileImage}
                resizeMode="cover"
              />
            </View>
            <TouchableOpacity style={styles.photoButton}>
              <Ionicons name="camera-outline" size={16} color="#2A7B63" />
              <Text style={styles.photoButtonText}>Alterar foto</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerText}>
            <Text style={styles.companyName}>{company.name}</Text>
            <Text style={styles.companyRole}>Conta corporativa</Text>
            <Text style={styles.companyStatus}>Perfil verificado e ativo</Text>
          </View>

          <View style={styles.iconBadge}>
            <Ionicons name="shield-checkmark-outline" size={28} color="#fff" />
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Informações da empresa</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>CNPJ</Text>
            <Text style={styles.infoValue}>{company.cnpj}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Endereço</Text>
            <Text style={styles.infoValue}>{company.address}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Telefone</Text>
            <Text style={styles.infoValue}>{company.phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>E-mail</Text>
            <Text style={styles.infoValue}>{company.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Conta criada em</Text>
            <Text style={styles.infoValue}>{company.createdAt}</Text>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={[styles.actionButton, styles.logoutButton]} onPress={() => router.push('/(tabs)/empresaLogin')}>
            <Ionicons name="log-out-outline" size={18} color="#2A7B63" />
            <Text style={styles.logoutButtonText}>Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
            <Ionicons name="trash-outline" size={18} color="#D92F2F" />
            <Text style={styles.deleteButtonText}>Excluir conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F5',
  },
  content: {
    paddingBottom: 32,
  },
  header: {
    marginHorizontal: 16,
    marginTop: 20,
    padding: 22,
    borderRadius: 24,
    backgroundColor: '#72CAA5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImageWrapper: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2,
    borderColor: '#CDE8E1',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileGroup: {
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    marginLeft: 18,
  },
  companyName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  companyRole: {
    marginTop: 6,
    fontSize: 13,
    color: '#E2F1EE',
  },
  photoButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F4EE',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  photoButtonText: {
    marginLeft: 8,
    color: '#2A7B63',
    fontSize: 12,
    fontWeight: '700',
  },
  companyStatus: {
    marginTop: 6,
    fontSize: 12,
    color: '#E2F1EE',
    fontWeight: '700',
  },
  iconBadge: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
  },
  logoutButton: {
    borderColor: '#C7E3D7',
    backgroundColor: '#E9F3EF',
  },
  logoutButtonText: {
    color: '#2A7B63',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
  },
  infoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 20,
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F3832',
    marginBottom: 18,
  },
  infoRow: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#7D8D86',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 15,
    color: '#273631',
    lineHeight: 22,
  },
  deleteButton: {
    borderColor: '#D92F2F',
    backgroundColor: '#FFF4F4',
    marginLeft: 12,
  },
  deleteButtonText: {
    color: '#D92F2F',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
});
