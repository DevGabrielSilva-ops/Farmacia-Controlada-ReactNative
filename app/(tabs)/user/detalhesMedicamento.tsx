import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  FlatList,
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

export default function DetalhesMedicamento() {
  const router = useRouter();
  const [medicamentoAdicionado, setMedicamentoAdicionado] = useState(false);

  // Dados mockados
  const medicamento = {
    id: '1',
    nome: 'Dipirona 500mg',
    laboratorio: 'Laboratório A',
    tipo: 'Analgésico',
    preco: 'R$ 12,50',
    precoComDesconto: 'R$ 10,50',
    descricao:
      'A Dipirona é um analgésico e antitérmico utilizado no tratamento da dor e febre. Indicada para dores leves a moderadas.',
    dosagem: '500mg',
    forma: 'Comprimido',
    emestoque: true,
    desconto: true,
  };

  const farmaciasPróximas = [
    {
      id: '1',
      nome: 'Farmácia Central SP',
      endereco: 'Rua das Flores, 123 - SP',
      distancia: '2.3 km',
      emEstoque: true,
      telefone: '(11) 3333-3333',
      horario: 'Seg-Dom: 08h-22h',
    },
    {
      id: '2',
      nome: 'Farmácia Premium',
      endereco: 'Av. Paulista, 456 - SP',
      distancia: '5.1 km',
      emEstoque: true,
      telefone: '(11) 3333-4444',
      horario: 'Seg-Dom: 09h-21h',
    },
    {
      id: '3',
      nome: 'Farmácia Express',
      endereco: 'Rua da Paz, 789 - SP',
      distancia: '7.8 km',
      emEstoque: false,
      telefone: '(11) 3333-5555',
      horario: 'Seg-Dom: 10h-20h',
    },
  ];

  const informaçõesAdicionais = [
    {
      id: '1',
      titulo: 'Modo de Usar',
      conteudo: 'Tomar 1 a 2 comprimidos a cada 6-8 horas, não excedendo 4 comprimidos por dia.',
    },
    {
      id: '2',
      titulo: 'Efeitos Colaterais',
      conteudo:
        'Podem ocorrer náuseas, vômitos e reações alérgicas em casos raros. Consulte o médico se persistirem.',
    },
    {
      id: '3',
      titulo: 'Contraindicações',
      conteudo:
        'Não recomendado para menores de 3 meses, gestantes sem prescrição médica e pacientes com alergia à dipirona.',
    },
    {
      id: '4',
      titulo: 'Armazenamento',
      conteudo: 'Guardar em local fresco e seco, longe da luz solar. Manter fora do alcance de crianças.',
    },
  ];

  const handleAgendar = () => {
    Alert.alert('Agendar Resgate', 'Funcionalidade em desenvolvimento', [
      { text: 'OK' },
    ]);
  };

  const handleAdicionarFavorito = () => {
    setMedicamentoAdicionado(!medicamentoAdicionado);
    Alert.alert(
      'Sucesso',
      medicamentoAdicionado
        ? 'Medicamento removido dos favoritos'
        : 'Medicamento adicionado aos favoritos'
    );
  };

  const renderFarmacia = ({ item }) => (
    <View style={estilos.cartaoFarmacia}>
      <View style={estilos.headerFarmacia}>
        <View style={estilos.grupoFarmacia}>
          <Text style={estilos.nomeFarmacia}>{item.nome}</Text>
          <Text style={estilos.enderecoFarmacia}>
            <MaterialCommunityIcons name="map-marker" size={12} color={cores.primaria} /> {item.endereco}
          </Text>
        </View>
        <View style={estilos.badgeDistancia}>
          <MaterialCommunityIcons name="near-me" size={12} color={cores.fundoPagina} />
          <Text style={estilos.textoDistancia}>{item.distancia}</Text>
        </View>
      </View>

      <View style={estilos.linhaInfoFarmacia}>
        <View style={estilos.infoFarmacia}>
          <Text style={estilos.labelInfoFarmacia}>Telefone</Text>
          <Text style={estilos.valorInfoFarmacia}>{item.telefone}</Text>
        </View>
        <View style={estilos.infoFarmacia}>
          <Text style={estilos.labelInfoFarmacia}>Horário</Text>
          <Text style={estilos.valorInfoFarmacia}>{item.horario}</Text>
        </View>
      </View>

      {!item.emEstoque && (
        <View style={estilos.avisoSemEstoque}>
          <MaterialCommunityIcons name="alert-circle-outline" size={14} color={cores.vermelhaDestruir} />
          <Text style={estilos.textoAvisoSemEstoque}>Atualmente sem estoque</Text>
        </View>
      )}

      <View style={estilos.linhaAcoesFarmacia}>
        <TouchableOpacity style={estilos.botaoMapa}>
          <MaterialCommunityIcons name="map" size={16} color={cores.primaria} />
          <Text style={estilos.textoAcaoMapa}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botaoLigar} disabled={!item.emEstoque}>
          <MaterialCommunityIcons name="phone" size={16} color={cores.fundoPagina} />
          <Text style={estilos.textoAcaoLigar}>Ligar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderInformacao = ({ item }) => (
    <View style={estilos.cartaoInformacao}>
      <Text style={estilos.tituloInformacao}>{item.titulo}</Text>
      <Text style={estilos.conteudoInformacao}>{item.conteudo}</Text>
    </View>
  );

  return (
    <ScrollView style={estilos.containerPrincipal} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={estilos.headerPagina}>
        <TouchableOpacity style={estilos.botaoVoltar} onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={cores.fundoPagina} />
        </TouchableOpacity>
        <Text style={estilos.tituloPagina}>Detalhes</Text>
        <TouchableOpacity style={estilos.botaoFavorito} onPress={handleAdicionarFavorito}>
          <MaterialCommunityIcons
            name={medicamentoAdicionado ? 'heart' : 'heart-outline'}
            size={24}
            color={cores.fundoPagina}
          />
        </TouchableOpacity>
      </View>

      {/* Informações Principais */}
      <View style={estilos.secaoInfo}>
        <Text style={estilos.nomeMedicamento}>{medicamento.nome}</Text>
        <Text style={estilos.laboratorioInfo}>{medicamento.laboratorio}</Text>

        <View style={estilos.linhaPreco}>
          <View>
            {medicamento.desconto && (
              <Text style={estilos.precoOriginal}>De {medicamento.preco}</Text>
            )}
            <Text style={estilos.preco}>{medicamento.desconto ? medicamento.precoComDesconto : medicamento.preco}</Text>
          </View>

          {medicamento.desconto && (
            <View style={estilos.badgeDescontoGrande}>
              <MaterialCommunityIcons name="tag-discount" size={16} color={cores.vermelhaDestruir} />
              <Text style={estilos.textoDescontoGrande}>20% OFF</Text>
            </View>
          )}
        </View>

        <View style={estilos.linhaCaracteristicas}>
          <View style={estilos.caracteristica}>
            <MaterialCommunityIcons name="pill" size={16} color={cores.primaria} />
            <Text style={estilos.textoCaracteristica}>{medicamento.dosagem}</Text>
          </View>
          <View style={estilos.caracteristica}>
            <MaterialCommunityIcons name="capsule" size={16} color={cores.primaria} />
            <Text style={estilos.textoCaracteristica}>{medicamento.forma}</Text>
          </View>
          <View style={estilos.caracteristica}>
            <MaterialCommunityIcons
              name={medicamento.emestoque ? 'check-circle' : 'close-circle'}
              size={16}
              color={medicamento.emestoque ? cores.verdeSuccesso : cores.vermelhaDestruir}
            />
            <Text style={estilos.textoCaracteristica}>
              {medicamento.emestoque ? 'Em estoque' : 'Sem estoque'}
            </Text>
          </View>
        </View>

        <Text style={estilos.descricao}>{medicamento.descricao}</Text>
      </View>

      {/* Botões de Ação */}
      <View style={estilos.secaoBotoes}>
        <TouchableOpacity style={estilos.botaoPrincipal} onPress={handleAgendar}>
          <MaterialCommunityIcons name="calendar-check" size={18} color={cores.fundoPagina} />
          <Text style={estilos.textoBotaoPrincipal}>Agendar Resgate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={handleAdicionarFavorito}>
          <MaterialCommunityIcons
            name={medicamentoAdicionado ? 'heart' : 'heart-outline'}
            size={18}
            color={cores.primaria}
          />
          <Text style={estilos.textoBotaoSecundario}>
            {medicamentoAdicionado ? 'Adicionado' : 'Favorito'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Farmácias Próximas */}
      <View style={estilos.secao}>
        <View style={estilos.headerSecao}>
          <MaterialCommunityIcons name="hospital-box" size={20} color={cores.primaria} />
          <Text style={estilos.tituloSecao}>Farmácias Próximas</Text>
        </View>

        <FlatList
          data={farmaciasPróximas}
          renderItem={renderFarmacia}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Informações Adicionais */}
      <View style={estilos.secao}>
        <View style={estilos.headerSecao}>
          <MaterialCommunityIcons name="information-outline" size={20} color={cores.primaria} />
          <Text style={estilos.tituloSecao}>Informações</Text>
        </View>

        <FlatList
          data={informaçõesAdicionais}
          renderItem={renderInformacao}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
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
  headerPagina: {
    backgroundColor: cores.primaria,
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  botaoVoltar: {
    padding: 8,
  },
  tituloPagina: {
    fontSize: 18,
    fontWeight: '700',
    color: cores.fundoPagina,
  },
  botaoFavorito: {
    padding: 8,
  },
  secaoInfo: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: cores.fundoPagina,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  nomeMedicamento: {
    fontSize: 22,
    fontWeight: '700',
    color: cores.textoPrincipal,
    marginBottom: 4,
  },
  laboratorioInfo: {
    fontSize: 13,
    color: cores.textoSecundario,
    fontWeight: '500',
    marginBottom: 12,
  },
  linhaPreco: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  precoOriginal: {
    fontSize: 12,
    color: cores.textoSecundario,
    textDecorationLine: 'line-through',
    marginBottom: 2,
  },
  preco: {
    fontSize: 28,
    fontWeight: '700',
    color: cores.secundaria,
  },
  badgeDescontoGrande: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 4,
  },
  textoDescontoGrande: {
    fontSize: 13,
    fontWeight: '700',
    color: cores.vermelhaDestruir,
  },
  linhaCaracteristicas: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  caracteristica: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: cores.fundoLeve,
    borderRadius: 8,
  },
  textoCaracteristica: {
    fontSize: 12,
    fontWeight: '600',
    color: cores.textoPrincipal,
  },
  descricao: {
    fontSize: 14,
    color: cores.textoSecundario,
    lineHeight: 20,
    fontWeight: '500',
  },
  secaoBotoes: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: cores.fundoPagina,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  botaoPrincipal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.secundaria,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  textoBotaoPrincipal: {
    fontSize: 14,
    fontWeight: '700',
    color: cores.fundoPagina,
  },
  botaoSecundario: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: cores.primaria,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  textoBotaoSecundario: {
    fontSize: 14,
    fontWeight: '700',
    color: cores.primaria,
  },
  secao: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 8,
    backgroundColor: cores.fundoPagina,
  },
  headerSecao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: '700',
    color: cores.textoPrincipal,
    marginLeft: 10,
  },
  cartaoFarmacia: {
    backgroundColor: cores.fundoLeve,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: cores.borda,
  },
  headerFarmacia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  grupoFarmacia: {
    flex: 1,
  },
  nomeFarmacia: {
    fontSize: 14,
    fontWeight: '700',
    color: cores.textoPrincipal,
    marginBottom: 4,
  },
  enderecoFarmacia: {
    fontSize: 12,
    color: cores.textoSecundario,
    fontWeight: '500',
  },
  badgeDistancia: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.primaria,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    gap: 4,
    marginLeft: 8,
  },
  textoDistancia: {
    fontSize: 11,
    fontWeight: '600',
    color: cores.fundoPagina,
  },
  linhaInfoFarmacia: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
  },
  infoFarmacia: {
    flex: 1,
  },
  labelInfoFarmacia: {
    fontSize: 10,
    color: cores.textoSecundario,
    fontWeight: '600',
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  valorInfoFarmacia: {
    fontSize: 12,
    fontWeight: '600',
    color: cores.textoPrincipal,
  },
  avisoSemEstoque: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    gap: 6,
    marginBottom: 10,
  },
  textoAvisoSemEstoque: {
    fontSize: 12,
    fontWeight: '600',
    color: cores.vermelhaDestruir,
  },
  linhaAcoesFarmacia: {
    flexDirection: 'row',
    gap: 8,
  },
  botaoMapa: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: cores.primaria,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 4,
  },
  textoAcaoMapa: {
    fontSize: 12,
    fontWeight: '600',
    color: cores.primaria,
  },
  botaoLigar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.verdeSuccesso,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 4,
  },
  textoAcaoLigar: {
    fontSize: 12,
    fontWeight: '600',
    color: cores.fundoPagina,
  },
  cartaoInformacao: {
    backgroundColor: cores.fundoLeve,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: cores.primaria,
  },
  tituloInformacao: {
    fontSize: 13,
    fontWeight: '700',
    color: cores.textoPrincipal,
    marginBottom: 6,
  },
  conteudoInformacao: {
    fontSize: 12,
    color: cores.textoSecundario,
    fontWeight: '500',
    lineHeight: 18,
  },
  espacoFinal: {
    height: 40,
  },
});
