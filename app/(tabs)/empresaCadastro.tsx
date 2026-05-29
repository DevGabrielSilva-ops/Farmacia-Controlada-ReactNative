
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image, useWindowDimensions, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 760;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 20}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Image
        source={require('../../assets/LogoFarm.fw.png')}
        style={{ width: 200, height: 80, marginBottom: 10 }}
      />
      <View style={styles.card}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/empresaLogin')} style={{ position: 'absolute', top: 16, right: 16, backgroundColor: '#369262', width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '700' }}>X</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Cadastrar Empresa</Text>
        <Text style={styles.subtitulo}>Cadastre sua empresa para continuar.</Text>

        <View style={styles.logoSection}>
          <Text style={styles.sectionLabel}>Logo da empresa</Text>
          <Text style={styles.sectionDescription}>Adicione a imagem da empresa para personalizar seu perfil.</Text>
          <View style={styles.logoPreview}>
            <Ionicons name="image-outline" size={36} color="#AFB8B3" />
            <Text style={styles.logoPreviewText}>Logomarca</Text>
          </View>
          <TouchableOpacity style={styles.logoButton}>
            <Ionicons name="camera-outline" size={18} color="#369262" />
            <Text style={styles.logoButtonText}>Adicionar logo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formRow}>
          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>CNPJ</Text>
            <TextInput
              style={styles.input}
              placeholder="00.000.000/0000-00"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              keyboardType="numeric"
              autoCapitalize="none"
            />
          </View>

          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="contato@empresa.com"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="(11) 99999-9999"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              keyboardType="phone-pad"
            />
          </View>

          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>Razão Social</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome jurídico da empresa"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
            />
          </View>

          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>Nome Fantasia</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome de exibição"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
            />
          </View>

          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>Endereço</Text>
            <TextInput
              style={styles.input}
              placeholder="Rua, número, bairro"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
            />
          </View>

          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>Estado</Text>
            <TextInput
              style={styles.input}
              placeholder="UF"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
            />
          </View>

          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput
              style={styles.input}
              placeholder="Cidade"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
            />
          </View>

          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              secureTextEntry
            />
          </View>

          <View style={[styles.cardForm, isWide && styles.cardFormHalf]}>
            <Text style={styles.label}>Confirmar senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Repita a senha"
              placeholderTextColor="rgba(0, 0, 0, 0.4)"
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar Empresa</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#72CAA5',
  },
  scrollView: {
    width: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  card: {
    width: '100%',
    maxWidth: 760,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
  },

  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#173826',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 14,
    color: '#5A6C63',
    marginBottom: 24,
    lineHeight: 20,
  },

  formRow: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardForm: {
    width: '100%',
    minWidth: 0,
    marginBottom: 18,
  },
  cardFormHalf: {
    width: '48%',
    minWidth: '48%',
  },
  label: {
    fontSize: 13,
    color: '#3F524A',
    marginBottom: 8,
  },

  input: {
    width: '100%',
    backgroundColor: '#F5F7F6',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E7E5',
    color: '#1F3832',
  },
  logoSection: {
    backgroundColor: '#F9FBFA',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E3E8E5',
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#26493A',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 13,
    color: '#5D7268',
    marginBottom: 16,
    lineHeight: 20,
  },
  logoPreview: {
    width: '100%',
    minHeight: 110,
    borderRadius: 16,
    backgroundColor: '#EFF5F2',
    borderWidth: 1,
    borderColor: '#DDE7E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
  },
  logoPreviewText: {
    marginTop: 8,
    color: '#7B8C85',
    fontSize: 13,
    fontWeight: '600',
  },
  logoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#369262',
    backgroundColor: 'rgba(54, 146, 98, 0.08)',
  },
  logoButtonText: {
    marginLeft: 10,
    color: '#369262',
    fontSize: 14,
    fontWeight: '700',
  },

  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: '#369262',
    marginTop: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },

  secondaryButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#369262',
    marginTop: 14,
  },

  listaRequisitos: {
    marginBottom: 18,
  },

  listaItem: {
    fontSize: 13,
    color: '#3F524A',
    lineHeight: 20,
    marginBottom: 3,
  },

  secondaryButtonText: {
    color: '#369262',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  }
});
