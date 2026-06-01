import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

export default function PerfilUsuario() {
  const router = useRouter();
  const [fotoCarregada, setFotoCarregada] = useState(false);

  
  const dadosUsuario = {
    nome: 'João Silva Santos',
    email: 'joao.silva@email.com',
    cpf: '123.456.789-00',
    telefone: '(11) 99999-9999',
    dataNascimento: '15/05/1990',
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    estado: 'SP',
    dataCadastro: '10/01/2025',
    status: 'Ativo',
  };

  const handleAlterarFoto = () => {
    Alert.alert('Alterar Foto', 'Selecione uma opção', [
      { text: 'Câmera', onPress: () => console.log('Câmera') },
      { text: 'Galeria', onPress: () => console.log('Galeria') },
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  const handleEditarDados = () => {
    Alert.alert('Editar Dados', 'Funcionalidade em desenvolvimento');
  };

  const handleSair = () => {
    Alert.alert('Sair da Conta', 'Tem certeza que deseja sair?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => router.push('/'),
        style: 'destructive',
      },
    ]);
  };

  const handleExcluirConta = () => {
    Alert.alert(
      'Excluir Conta',
      'Esta ação é irreversível. Tem certeza que deseja excluir sua conta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            Alert.alert('Sucesso', 'Sua conta foi excluída', [
              { text: 'OK', onPress: () => router.push('/') },
            ]);
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.containerPrincipal} showsVerticalScrollIndicator={false}>
     
      <View style={styles.headerPerfil}>
        <View style={styles.fotoPerfil}>
          {fotoCarregada ? (
            <Image source={{ uri: 'https://via.placeholder.com/88' }} style={styles.imagemPerfil} />
          ) : (
            <MaterialCommunityIcons name="account" size={50} color={cores.primaria} />
          )}
        </View>
        <Text style={styles.nomePerfil}>{dadosUsuario.nome}</Text>
        <Text style={styles.statusPerfil}>
          <MaterialCommunityIcons name="check-circle" size={14} color={cores.verdeSuccesso} /> {dadosUsuario.status}
        </Text>
      </View>

     
      <TouchableOpacity style={styles.botaoAlterarFoto} onPress={handleAlterarFoto}>
        <MaterialCommunityIcons name="camera-plus-outline" size={18} color={cores.primaria} />
        <Text style={styles.textoAlterarFoto}>Alterar Foto</Text>
      </TouchableOpacity>

     
      <View style={styles.secao}>
        <View style={styles.headerSecao}>
          <MaterialCommunityIcons name="account-box-outline" size={20} color={cores.primaria} />
          <Text style={styles.tituloSecao}>Informações Pessoais</Text>
        </View>

      
        <View style={styles.linhaInfo}>
          <View style={styles.grupoInfo}>
            <Text style={styles.labelInfo}>Nome</Text>
            <Text style={styles.valorInfo}>{dadosUsuario.nome}</Text>
          </View>
        </View>

        <View style={styles.linhaInfo}>
          <View style={[styles.grupoInfo, styles.grupoMeio]}>
            <Text style={styles.labelInfo}>Email</Text>
            <Text style={styles.valorInfo}>{dadosUsuario.email}</Text>
          </View>
          <View style={styles.grupoInfo}>
            <Text style={styles.labelInfo}>Telefone</Text>
            <Text style={styles.valorInfo}>{dadosUsuario.telefone}</Text>
          </View>
        </View>

        <View style={styles.linhaInfo}>
          <View style={[styles.grupoInfo, styles.grupoMeio]}>
            <Text style={styles.labelInfo}>CPF</Text>
            <Text style={styles.valorInfo}>{dadosUsuario.cpf}</Text>
          </View>
          <View style={styles.grupoInfo}>
            <Text style={styles.labelInfo}>Nascimento</Text>
            <Text style={styles.valorInfo}>{dadosUsuario.dataNascimento}</Text>
          </View>
        </View>

      
        <TouchableOpacity style={styles.botaoEditar} onPress={handleEditarDados}>
          <MaterialCommunityIcons name="pencil-outline" size={16} color={cores.primaria} />
          <Text style={styles.textoEditar}>Editar Dados</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.secao}>
        <View style={styles.headerSecao}>
          <MaterialCommunityIcons name="map-marker-outline" size={20} color={cores.primaria} />
          <Text style={styles.tituloSecao}>Endereço</Text>
        </View>

        <View style={styles.linhaInfo}>
          <View style={styles.grupoInfo}>
            <Text style={styles.labelInfo}>Endereço</Text>
            <Text style={styles.valorInfo}>{dadosUsuario.endereco}</Text>
          </View>
        </View>

        <View style={styles.linhaInfo}>
          <View style={[styles.grupoInfo, styles.grupoMeio]}>
            <Text style={styles.labelInfo}>Cidade</Text>
            <Text style={styles.valorInfo}>{dadosUsuario.cidade}</Text>
          </View>
          <View style={styles.grupoInfo}>
            <Text style={styles.labelInfo}>Estado</Text>
            <Text style={styles.valorInfo}>{dadosUsuario.estado}</Text>
          </View>
        </View>
      </View>

      
      <View style={styles.secao}>
        <View style={styles.headerSecao}>
          <MaterialCommunityIcons name="shield-outline" size={20} color={cores.primaria} />
          <Text style={styles.tituloSecao}>Conta</Text>
        </View>

        <View style={styles.linhaInfo}>
          <View style={[styles.grupoInfo, styles.grupoMeio]}>
            <Text style={styles.labelInfo}>Data Cadastro</Text>
            <Text style={styles.valorInfo}>{dadosUsuario.dataCadastro}</Text>
          </View>
          <View style={styles.grupoInfo}>
            <Text style={styles.labelInfo}>Status</Text>
            <View style={styles.badgeStatus}>
              <Text style={styles.textoBadgeStatus}>{dadosUsuario.status}</Text>
            </View>
          </View>
        </View>

        
        <TouchableOpacity style={styles.botaoAlerta} onPress={handleSair}>
          <MaterialCommunityIcons name="logout" size={18} color={cores.fundoPagina} />
          <Text style={styles.textoAlerta}>Sair da Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoDestruir} onPress={handleExcluirConta}>
          <MaterialCommunityIcons name="trash-can-outline" size={18} color={cores.fundoPagina} />
          <Text style={styles.textoDestruir}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>

   
      <View style={styles.espacoFinal} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: cores.fundoLeve,
  },
  headerPerfil: {
    backgroundColor: cores.primaria,
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  fotoPerfil: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: cores.fundoPagina,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  imagemPerfil: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
  nomePerfil: {
    fontSize: 20,
    fontWeight: '700',
    color: cores.fundoPagina,
    marginBottom: 4,
  },
  statusPerfil: {
    fontSize: 13,
    color: cores.fundoPagina,
    fontWeight: '500',
  },
  botaoAlterarFoto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: cores.primaria,
    backgroundColor: cores.fundoPagina,
  },
  textoAlterarFoto: {
    fontSize: 14,
    fontWeight: '600',
    color: cores.primaria,
    marginLeft: 8,
  },
  secao: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: cores.fundoPagina,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  headerSecao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: '700',
    color: cores.textoPrincipal,
    marginLeft: 10,
  },
  linhaInfo: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  grupoInfo: {
    flex: 1,
  },
  grupoMeio: {
    marginRight: 12,
  },
  labelInfo: {
    fontSize: 12,
    color: cores.textoSecundario,
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  valorInfo: {
    fontSize: 14,
    color: cores.textoPrincipal,
    fontWeight: '500',
  },
  badgeStatus: {
    backgroundColor: cores.verdeSuccesso,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  textoBadgeStatus: {
    fontSize: 12,
    fontWeight: '600',
    color: cores.fundoPagina,
  },
  botaoEditar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: cores.primaria,
  },
  textoEditar: {
    fontSize: 14,
    fontWeight: '600',
    color: cores.primaria,
    marginLeft: 6,
  },
  botaoAlerta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingVertical: 11,
    backgroundColor: cores.amarelaAlerta,
    borderRadius: 10,
  },
  textoAlerta: {
    fontSize: 14,
    fontWeight: '600',
    color: cores.fundoPagina,
    marginLeft: 6,
  },
  botaoDestruir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 11,
    backgroundColor: cores.vermelhaDestruir,
    borderRadius: 10,
  },
  textoDestruir: {
    fontSize: 14,
    fontWeight: '600',
    color: cores.fundoPagina,
    marginLeft: 6,
  },
  espacoFinal: {
    height: 40,
  },
});
