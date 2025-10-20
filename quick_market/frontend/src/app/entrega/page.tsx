import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

type Entrega = {
    id: number;
    status: string;
    tempo_estimado?: number;
    latitude_atual?: number;
    longitude_atual?: number;
    pedido_id: number;
    numero_pedido: string;
    created_at: string;
    updated_at: string;
};

export default function EntregaPage() {
    const [entregas, setEntregas] = useState<Entrega[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        carregarEntregas();
    }, []);

    const carregarEntregas = async () => {
        try {
            const response = await api.get("/entregas/");
            setEntregas(response.data);
        } catch (error: any) {
            if (error.response?.status === 401) {
                router.push('/login');
            } else {
                setError("Erro ao carregar entregas");
            }
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'agendado': return 'text-blue-600';
            case 'coletado': return 'text-yellow-600';
            case 'em_rota': return 'text-orange-600';
            case 'entregue': return 'text-green-600';
            case 'problema': return 'text-red-600';
            default: return 'text-gray-600';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'agendado': return 'Agendado';
            case 'coletado': return 'Coletado';
            case 'em_rota': return 'Em trânsito';
            case 'entregue': return 'Entregue';
            case 'problema': return 'Problema na entrega';
            default: return status;
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('pt-BR');
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Carregando entregas...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Erro</h1>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button 
                        onClick={() => router.push('/')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                    >
                        Voltar ao Início
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Acompanhar Entregas
                </h1>
                
                {entregas.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📦</div>
                        <h2 className="text-xl font-semibold text-gray-600 mb-2">
                            Nenhuma entrega encontrada
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Você ainda não possui entregas para acompanhar.
                        </p>
                        <button 
                            onClick={() => router.push('/lista_mercados')}
                            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                        >
                            Fazer Pedido
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {entregas.map((entrega) => (
                            <div key={entrega.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Pedido #{entrega.numero_pedido}
                                    </h3>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(entrega.status)} bg-gray-100`}>
                                        {getStatusText(entrega.status)}
                                    </span>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Status:</span>
                                        <span className={`font-semibold ${getStatusColor(entrega.status)}`}>
                                            {getStatusText(entrega.status)}
                                        </span>
                                    </div>
                                    
                                    {entrega.tempo_estimado && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Previsão:</span>
                                            <span className="font-semibold text-gray-800">
                                                {entrega.tempo_estimado} minutos
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Última atualização:</span>
                                        <span className="text-gray-800">
                                            {formatDate(entrega.updated_at)}
                                        </span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Pedido criado:</span>
                                        <span className="text-gray-800">
                                            {formatDate(entrega.created_at)}
                                        </span>
                                    </div>
                                </div>
                                
                                {entrega.status === 'em_rota' && entrega.latitude_atual && entrega.longitude_atual && (
                                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                        <p className="text-sm text-blue-700 font-medium mb-2">
                                            📍 Localização atual do entregador
                                        </p>
                                        <p className="text-xs text-blue-600">
                                            Lat: {entrega.latitude_atual.toFixed(6)}, 
                                            Lng: {entrega.longitude_atual.toFixed(6)}
                                        </p>
                                    </div>
                                )}
                                
                                <div className="mt-4 pt-4 border-t">
                                    <button 
                                        onClick={() => router.push(`/pedidos/${entrega.pedido_id}`)}
                                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                                    >
                                        Ver Detalhes do Pedido
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}