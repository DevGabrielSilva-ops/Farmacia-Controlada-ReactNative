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
    <ScrollView style={estilos.containerPrincipal} showsVerticalScrollIndicator={false}>
     
      <View style={estilos.headerPerfil}>
        <View style={estilos.fotoPerfil}>
          {fotoCarregada ? (
            <Image source={{ uri: 'https://via.placeholder.com/88' }} style={estilos.imagemPerfil} />
          ) : (
            <MaterialCommunityIcons name="account" size={50} color={cores.primaria} />
          )}
        </View>
        <Text style={estilos.nomePerfil}>{dadosUsuario.nome}</Text>
        <Text style={estilos.statusPerfil}>
          <MaterialCommunityIcons name="check-circle" size={14} color={cores.verdeSuccesso} /> {dadosUsuario.status}
        </Text>
      </View>

     
      <TouchableOpacity style={estilos.botaoAlterarFoto} onPress={handleAlterarFoto}>
        <MaterialCommunityIcons name="camera-plus-outline" size={18} color={cores.primaria} />
        <Text style={estilos.textoAlterarFoto}>Alterar Foto</Text>
      </TouchableOpacity>

     
      <View style={estilos.secao}>
        <View style={estilos.headerSecao}>
          <MaterialCommunityIcons name="account-box-outline" size={20} color={cores.primaria} />
          <Text style={estilos.tituloSecao}>Informações Pessoais</Text>
        </View>

      
        <View style={estilos.linhaInfo}>
          <View style={estilos.grupoInfo}>
            <Text style={estilos.labelInfo}>Nome</Text>
            <Text style={estilos.valorInfo}>{dadosUsuario.nome}</Text>
          </View>
        </View>

        <View style={estilos.linhaInfo}>
          <View style={[estilos.grupoInfo, estilos.grupoMeio]}>
            <Text style={estilos.labelInfo}>Email</Text>
            <Text style={estilos.valorInfo}>{dadosUsuario.email}</Text>
          </View>
          <View style={estilos.grupoInfo}>
            <Text style={estilos.labelInfo}>Telefone</Text>
            <Text style={estilos.valorInfo}>{dadosUsuario.telefone}</Text>
          </View>
        </View>

        <View style={estilos.linhaInfo}>
          <View style={[estilos.grupoInfo, estilos.grupoMeio]}>
            <Text style={estilos.labelInfo}>CPF</Text>
            <Text style={estilos.valorInfo}>{dadosUsuario.cpf}</Text>
          </View>
          <View style={estilos.grupoInfo}>
            <Text style={estilos.labelInfo}>Nascimento</Text>
            <Text style={estilos.valorInfo}>{dadosUsuario.dataNascimento}</Text>
          </View>
        </View>

      
        <TouchableOpacity style={estilos.botaoEditar} onPress={handleEditarDados}>
          <MaterialCommunityIcons name="pencil-outline" size={16} color={cores.primaria} />
          <Text style={estilos.textoEditar}>Editar Dados</Text>
        </TouchableOpacity>
      </View>

     
      <View style={estilos.secao}>
        <View style={estilos.headerSecao}>
          <MaterialCommunityIcons name="map-marker-outline" size={20} color={cores.primaria} />
          <Text style={estilos.tituloSecao}>Endereço</Text>
        </View>

        <View style={estilos.linhaInfo}>
          <View style={estilos.grupoInfo}>
            <Text style={estilos.labelInfo}>Endereço</Text>
            <Text style={estilos.valorInfo}>{dadosUsuario.endereco}</Text>
          </View>
        </View>

        <View style={estilos.linhaInfo}>
          <View style={[estilos.grupoInfo, estilos.grupoMeio]}>
            <Text style={estilos.labelInfo}>Cidade</Text>
            <Text style={estilos.valorInfo}>{dadosUsuario.cidade}</Text>
          </View>
          <View style={estilos.grupoInfo}>
            <Text style={estilos.labelInfo}>Estado</Text>
            <Text style={estilos.valorInfo}>{dadosUsuario.estado}</Text>
          </View>
        </View>
      </View>

      
      <View style={estilos.secao}>
        <View style={estilos.headerSecao}>
          <MaterialCommunityIcons name="shield-outline" size={20} color={cores.primaria} />
          <Text style={estilos.tituloSecao}>Conta</Text>
        </View>

        <View style={estilos.linhaInfo}>
          <View style={[estilos.grupoInfo, estilos.grupoMeio]}>
            <Text style={estilos.labelInfo}>Data Cadastro</Text>
            <Text style={estilos.valorInfo}>{dadosUsuario.dataCadastro}</Text>
          </View>
          <View style={estilos.grupoInfo}>
            <Text style={estilos.labelInfo}>Status</Text>
            <View style={estilos.badgeStatus}>
              <Text style={estilos.textoBadgeStatus}>{dadosUsuario.status}</Text>
            </View>
          </View>
        </View>

        
        <TouchableOpacity style={estilos.botaoAlerta} onPress={handleSair}>
          <MaterialCommunityIcons name="logout" size={18} color={cores.fundoPagina} />
          <Text style={estilos.textoAlerta}>Sair da Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoDestruir} onPress={handleExcluirConta}>
          <MaterialCommunityIcons name="trash-can-outline" size={18} color={cores.fundoPagina} />
          <Text style={estilos.textoDestruir}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>

   
      <View style={estilos.espacoFinal} />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
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
