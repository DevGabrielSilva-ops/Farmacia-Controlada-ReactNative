import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
    ListRenderItem,
    Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


interface Medicamento {
    id: string;
    nome: string;
    laboratorio: string;
    tipo: string;
    preco: string;
    farmaciasPróximas: number;
    emEstoque: boolean;
    desconto: boolean;
}

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

export default function MedicamentosUsuario() {
    const router = useRouter();
    const [busca, setBusca] = useState('');
    const [filtroSelecionado, setFiltroSelecionado] = useState('todos');


    const medicamentos: Medicamento[] = [
        {
            id: '1',
            nome: 'Dipirona 500mg',
            laboratorio: 'Laboratório A',
            tipo: 'Analgésico',
            preco: 'R$ 12,50',
            farmaciasPróximas: 3,
            emEstoque: true,
            desconto: false,
        },
        {
            id: '2',
            nome: 'Amoxicilina 500mg',
            laboratorio: 'Laboratório B',
            tipo: 'Antibiótico',
            preco: 'R$ 45,00',
            farmaciasPróximas: 2,
            emEstoque: true,
            desconto: true,
        },
        {
            id: '3',
            nome: 'Losartana 50mg',
            laboratorio: 'Laboratório C',
            tipo: 'Anti-hipertensivo',
            preco: 'R$ 35,90',
            farmaciasPróximas: 5,
            emEstoque: true,
            desconto: false,
        },
        {
            id: '4',
            nome: 'Omeprazol 20mg',
            laboratorio: 'Laboratório D',
            tipo: 'Protetor Gástrico',
            preco: 'R$ 18,75',
            farmaciasPróximas: 1,
            emEstoque: false,
            desconto: false,
        },
        {
            id: '5',
            nome: 'Metformina 500mg',
            laboratorio: 'Laboratório A',
            tipo: 'Antidiabético',
            preco: 'R$ 22,30',
            farmaciasPróximas: 4,
            emEstoque: true,
            desconto: true,
        },
        {
            id: '6',
            nome: 'Atorvastatina 20mg',
            laboratorio: 'Laboratório E',
            tipo: 'Hipolipemiante',
            preco: 'R$ 28,60',
            farmaciasPróximas: 2,
            emEstoque: true,
            desconto: false,
        },
    ];

    const tiposUnicos = ['Todos', ...new Set(medicamentos.map(m => m.tipo))];

    const medicamentos_filtrados = medicamentos.filter(m => {
        const matchBusca = m.nome.toLowerCase().includes(busca.toLowerCase()) ||
            m.laboratorio.toLowerCase().includes(busca.toLowerCase());
        const matchFiltro = filtroSelecionado === 'todos' || m.tipo === filtroSelecionado;
        return matchBusca && matchFiltro;
    });


    const renderMedicamento: ListRenderItem<Medicamento> = ({ item }) => (
        <TouchableOpacity
            style={estilos.cartaoMedicamento}
            onPress={() => router.push(`/(tabs)/user/detalhesMedicamento?id=${item.id}`)}
        >

            <View style={estilos.headerMedicamento}>
                <View style={estilos.grupoNome}>
                    <Text style={estilos.nomeMedicamento}>{item.nome}</Text>
                    <Text style={estilos.laboratorioMedicamento}>{item.laboratorio}</Text>
                </View>
                {item.desconto && (
                    <View style={estilos.badgeDesconto}>

                        <MaterialCommunityIcons name="tag-outline" size={12} color={cores.vermelhaDestruir} />
                        <Text style={estilos.textoDesconto}>DESCONTO</Text>
                    </View>
                )}
            </View>


            <View style={estilos.linhaSecundaria}>
                <View style={estilos.badgeTipo}>
                    <Text style={estilos.textoTipo}>{item.tipo}</Text>
                </View>
                {!item.emEstoque && (
                    <View style={estilos.badgeSemEstoque}>
                        <MaterialCommunityIcons name="alert-circle-outline" size={12} color={cores.vermelhaDestruir} />
                        <Text style={estilos.textoSemEstoque}>Sem estoque</Text>
                    </View>
                )}
            </View>


            <View style={estilos.rodape}>
                <View style={estilos.grupPreco}>
                    <Text style={estilos.labelPreco}>Preço</Text>
                    <Text style={estilos.preco}>{item.preco}</Text>
                </View>
                <View style={estilos.grupFarmacia}>
                    <MaterialCommunityIcons name="map-marker-outline" size={14} color={cores.primaria} />
                    <Text style={estilos.textoFarmacia}>{item.farmaciasPróximas} farmácias</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

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
                <Text style={estilos.tituloPrincipal}>Medicamentos</Text>
                <Text style={estilos.subTitulo}>Confira aqui os medicamentos disponíveis para doação</Text>
            </View>
            


            <View style={estilos.containerBusca}>
                <View style={estilos.campoBusca}>
                    <MaterialCommunityIcons name="magnify" size={20} color={cores.textoSecundario} />
                    <TextInput
                        style={estilos.entradaBusca}
                        placeholder="Buscar medicamento..."
                        placeholderTextColor={cores.textoSecundario}
                        value={busca}
                        onChangeText={setBusca}
                    />
                    {busca.length > 0 && (
                        <TouchableOpacity onPress={() => setBusca('')}>
                            <MaterialCommunityIcons name="close" size={20} color={cores.textoSecundario} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>


            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={estilos.containerFiltros}
                contentContainerStyle={estilos.contentFiltros}
            >
                {tiposUnicos.map((tipo, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            estilos.filtro,
                            ((filtroSelecionado === 'todos' && tipo === 'Todos') ||
                                filtroSelecionado === tipo) && estilos.filtroSelecionado,
                        ]}
                        onPress={() => setFiltroSelecionado(tipo === 'Todos' ? 'todos' : tipo)}
                    >
                        <Text
                            style={[
                                estilos.textoFiltro,
                                ((filtroSelecionado === 'todos' && tipo === 'Todos') ||
                                    filtroSelecionado === tipo) && estilos.textoFiltroSelecionado,
                            ]}
                        >
                            {tipo}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>


            {medicamentos_filtrados.length > 0 ? (
                <FlatList
                    data={medicamentos_filtrados}
                    renderItem={renderMedicamento}
                    keyExtractor={item => item.id}
                    contentContainerStyle={estilos.listaContent}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={estilos.estadoVazio}>
                    <MaterialCommunityIcons name="magnify" size={48} color={cores.textoSecundario} />
                    <Text style={estilos.textoVazio}>Nenhum medicamento encontrado</Text>
                    <Text style={estilos.textoSecundarioVazio}>Tente uma busca diferente</Text>
                </View>
            )}
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
    containerBusca: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: cores.fundoPagina,
        borderBottomWidth: 1,
        borderBottomColor: cores.borda,
    },
    campoBusca: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: cores.borda,
        borderRadius: 12,
        paddingHorizontal: 12,
        backgroundColor: cores.fundoLeve,
    },
    entradaBusca: {
        flex: 1,
        paddingVertical: 11,
        paddingHorizontal: 8,
        fontSize: 14,
        color: cores.textoPrincipal,
    },
    containerFiltros: {
        backgroundColor: cores.fundoPagina,
        borderBottomWidth: 1,
        borderBottomColor: cores.borda,
        maxHeight: 60,
    },
    contentFiltros: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
    },
    filtro: {
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 18,
        backgroundColor: cores.fundoLeve,
        borderWidth: 1,
        borderColor: cores.borda,
    },
    filtroSelecionado: {
        backgroundColor: cores.primaria,
        borderColor: cores.primaria,
    },
    textoFiltro: {
        fontSize: 12,
        fontWeight: '600',
        color: cores.textoSecundario,
    },
    textoFiltroSelecionado: {
        color: cores.fundoPagina,
    },
    listaContent: {
        padding: 16,
        paddingBottom: 20,
        gap: 12,
    },
    cartaoMedicamento: {
        backgroundColor: cores.fundoPagina,
        borderRadius: 14,
        padding: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    headerMedicamento: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    grupoNome: {
        flex: 1,
    },
    nomeMedicamento: {
        fontSize: 15,
        fontWeight: '700',
        color: cores.textoPrincipal,
        marginBottom: 2,
    },
    laboratorioMedicamento: {
        fontSize: 12,
        color: cores.textoSecundario,
        fontWeight: '500',
    },
    badgeDesconto: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FEE2E2',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
        gap: 4,
        marginLeft: 8,
    },
    textoDesconto: {
        fontSize: 10,
        fontWeight: '700',
        color: cores.vermelhaDestruir,
    },
    linhaSecundaria: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10,
    },
    badgeTipo: {
        backgroundColor: cores.fundoLeve,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    textoTipo: {
        fontSize: 11,
        fontWeight: '600',
        color: cores.secundaria,
    },
    badgeSemEstoque: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FEE2E2',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 6,
        gap: 4,
    },
    textoSemEstoque: {
        fontSize: 10,
        fontWeight: '600',
        color: cores.vermelhaDestruir,
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: cores.borda,
    },
    grupPreco: {
        alignItems: 'flex-start',
    },
    labelPreco: {
        fontSize: 10,
        color: cores.textoSecundario,
        fontWeight: '600',
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    preco: {
        fontSize: 16,
        fontWeight: '700',
        color: cores.secundaria,
    },
    grupFarmacia: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    textoFarmacia: {
        fontSize: 12,
        fontWeight: '600',
        color: cores.secundaria,
    },
    estadoVazio: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 64,
    },
    textoVazio: {
        fontSize: 16,
        fontWeight: '600',
        color: cores.textoPrincipal,
        marginTop: 12,
    },
    textoSecundarioVazio: {
        fontSize: 13,
        color: cores.textoSecundario,
        marginTop: 4,
    },
});