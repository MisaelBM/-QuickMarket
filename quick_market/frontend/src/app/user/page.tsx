import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

type Usuario = {
    id: number;
    nome: string;
    email: string;
    data_nascimento?: string;
    tipo: string;
    created_at: string;
};

type Endereco = {
    id: number;
    rua: string;
    numero?: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    principal: boolean;
};

export default function UserPage() {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [enderecos, setEnderecos] = useState<Endereco[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editandoPerfil, setEditandoPerfil] = useState(false);
    const [formPerfil, setFormPerfil] = useState({
        nome: '',
        email: '',
        data_nascimento: ''
    });
    const router = useRouter();

    useEffect(() => {
        carregarPerfil();
        carregarEnderecos();
    }, []);

    const carregarPerfil = async () => {
        try {
            const response = await api.get("/usuarios/profile");
            setUsuario(response.data);
            setFormPerfil({
                nome: response.data.nome,
                email: response.data.email,
                data_nascimento: response.data.data_nascimento || ''
            });
        } catch (error: any) {
            if (error.response?.status === 401) {
                router.push('/login');
            } else {
                setError("Erro ao carregar perfil");
            }
        } finally {
            setLoading(false);
        }
    };

    const carregarEnderecos = async () => {
        try {
            const response = await api.get("/usuarios/enderecos");
            setEnderecos(response.data);
        } catch (error) {
            console.error("Erro ao carregar endereços:", error);
        }
    };

    const salvarPerfil = async () => {
        try {
            await api.put("/usuarios/profile", formPerfil);
            await carregarPerfil();
            setEditandoPerfil(false);
            alert("Perfil atualizado com sucesso!");
        } catch (error: any) {
            alert(error.response?.data?.error || "Erro ao atualizar perfil");
        }
    };

    const logout = async () => {
        try {
            await api.post("/auth/logout");
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            router.push('/login');
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
            // Mesmo com erro, limpar dados locais
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            router.push('/login');
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR');
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Carregando perfil...</p>
                </div>
            </div>
        );
    }

    if (error || !usuario) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Erro</h1>
                    <p className="text-gray-600 mb-4">{error || "Usuário não encontrado"}</p>
                    <button 
                        onClick={() => router.push('/login')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                    >
                        Fazer Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-primary">Perfil do Usuário</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Informações do usuário */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-primary">
                            {usuario.nome.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-4">
                            <h2 className="text-xl font-semibold">{usuario.nome}</h2>
                            <p className="text-gray-500">{usuario.email}</p>
                        </div>
                    </div>
                    
                    {editandoPerfil ? (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    value={formPerfil.nome}
                                    onChange={(e) => setFormPerfil({...formPerfil, nome: e.target.value})}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    value={formPerfil.email}
                                    onChange={(e) => setFormPerfil({...formPerfil, email: e.target.value})}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Data de Nascimento
                                </label>
                                <input
                                    type="date"
                                    value={formPerfil.data_nascimento}
                                    onChange={(e) => setFormPerfil({...formPerfil, data_nascimento: e.target.value})}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={salvarPerfil}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                                >
                                    Salvar
                                </button>
                                <button
                                    onClick={() => setEditandoPerfil(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <div>
                                <span className="font-medium text-gray-700">Nome:</span>
                                <span className="ml-2">{usuario.nome}</span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">E-mail:</span>
                                <span className="ml-2">{usuario.email}</span>
                            </div>
                            {usuario.data_nascimento && (
                                <div>
                                    <span className="font-medium text-gray-700">Data de nascimento:</span>
                                    <span className="ml-2">{formatDate(usuario.data_nascimento)}</span>
                                </div>
                            )}
                            <div>
                                <span className="font-medium text-gray-700">Tipo:</span>
                                <span className="ml-2 capitalize">{usuario.tipo}</span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Membro desde:</span>
                                <span className="ml-2">{formatDate(usuario.created_at)}</span>
                            </div>
                            <div className="mt-6 flex gap-2">
                                <button
                                    onClick={() => setEditandoPerfil(true)}
                                    className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
                                >
                                    Editar Perfil
                                </button>
                                <button
                                    onClick={logout}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                                >
                                    Sair
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Endereços */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Endereços</h3>
                        <button
                            onClick={() => router.push('/enderecos')}
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                        >
                            Gerenciar
                        </button>
                    </div>
                    
                    {enderecos.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">
                            Nenhum endereço cadastrado
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {enderecos.map((endereco) => (
                                <div key={endereco.id} className="border border-gray-200 rounded p-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium">
                                                {endereco.rua}, {endereco.numero}
                                            </p>
                                            {endereco.complemento && (
                                                <p className="text-sm text-gray-600">{endereco.complemento}</p>
                                            )}
                                            <p className="text-sm text-gray-600">
                                                {endereco.bairro}, {endereco.cidade} - {endereco.estado}
                                            </p>
                                            <p className="text-sm text-gray-600">CEP: {endereco.cep}</p>
                                        </div>
                                        {endereco.principal && (
                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                                Principal
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}