import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

type Notificacao = {
    id: number;
    titulo: string;
    mensagem: string;
    tipo: string;
    lida: boolean;
    data_envio: string;
};

export default function NotificacoesPage() {
    const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [unreadCount, setUnreadCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        carregarNotificacoes();
        carregarContadorNaoLidas();
    }, []);

    const carregarNotificacoes = async () => {
        try {
            const response = await api.get("/notificacoes/");
            setNotificacoes(response.data);
        } catch (error: any) {
            if (error.response?.status === 401) {
                router.push('/login');
            } else {
                setError("Erro ao carregar notificações");
            }
        } finally {
            setLoading(false);
        }
    };

    const carregarContadorNaoLidas = async () => {
        try {
            const response = await api.get("/notificacoes/unread");
            setUnreadCount(response.data.count);
        } catch (error) {
            console.error("Erro ao carregar contador:", error);
        }
    };

    const marcarComoLida = async (id: number) => {
        try {
            await api.put(`/notificacoes/${id}/read`);
            setNotificacoes(prev => 
                prev.map(notif => 
                    notif.id === id ? { ...notif, lida: true } : notif
                )
            );
            setUnreadCount(prev => Math.max(0, prev - 1));
        } catch (error) {
            console.error("Erro ao marcar como lida:", error);
        }
    };

    const marcarTodasComoLidas = async () => {
        try {
            await api.put("/notificacoes/read-all");
            setNotificacoes(prev => 
                prev.map(notif => ({ ...notif, lida: true }))
            );
            setUnreadCount(0);
        } catch (error) {
            console.error("Erro ao marcar todas como lidas:", error);
        }
    };

    const deletarNotificacao = async (id: number) => {
        try {
            await api.delete(`/notificacoes/${id}`);
            setNotificacoes(prev => prev.filter(notif => notif.id !== id));
            // Atualizar contador se necessário
            const notificacao = notificacoes.find(n => n.id === id);
            if (notificacao && !notificacao.lida) {
                setUnreadCount(prev => Math.max(0, prev - 1));
            }
        } catch (error) {
            console.error("Erro ao deletar notificação:", error);
        }
    };

    const deletarTodas = async () => {
        try {
            await api.delete("/notificacoes/");
            setNotificacoes([]);
            setUnreadCount(0);
        } catch (error) {
            console.error("Erro ao deletar todas:", error);
        }
    };

    const getTipoIcon = (tipo: string) => {
        switch (tipo) {
            case 'pedido': return '📦';
            case 'promocao': return '🎉';
            case 'aviso': return '📢';
            default: return '📄';
        }
    };

    const getTipoColor = (tipo: string) => {
        switch (tipo) {
            case 'pedido': return 'border-blue-400 bg-blue-50';
            case 'promocao': return 'border-green-400 bg-green-50';
            case 'aviso': return 'border-yellow-400 bg-yellow-50';
            default: return 'border-gray-400 bg-gray-50';
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
                    <p className="text-gray-600">Carregando notificações...</p>
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
        <main className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Notificações</h1>
                <div className="flex gap-2">
                    {unreadCount > 0 && (
                        <button
                            onClick={marcarTodasComoLidas}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Marcar todas como lidas
                        </button>
                    )}
                    {notificacoes.length > 0 && (
                        <button
                            onClick={deletarTodas}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                            Deletar todas
                        </button>
                    )}
                </div>
            </div>

            {unreadCount > 0 && (
                <div className="mb-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
                    <p className="text-blue-700 font-medium">
                        Você tem {unreadCount} notificação{unreadCount !== 1 ? 'ões' : ''} não lida{unreadCount !== 1 ? 's' : ''}
                    </p>
                </div>
            )}

            {notificacoes.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">🔔</div>
                    <h2 className="text-xl font-semibold text-gray-600 mb-2">
                        Nenhuma notificação
                    </h2>
                    <p className="text-gray-500">
                        Você não possui notificações no momento.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {notificacoes.map((notif) => (
                        <div
                            key={notif.id}
                            className={`rounded-lg p-4 shadow border transition-all hover:shadow-md ${
                                notif.lida
                                    ? "bg-gray-100 border-gray-200"
                                    : `bg-white ${getTipoColor(notif.tipo)}`
                            }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">{getTipoIcon(notif.tipo)}</span>
                                    <span className="font-semibold text-gray-800">{notif.titulo}</span>
                                    {!notif.lida && (
                                        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                                            Nova
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    {!notif.lida && (
                                        <button
                                            onClick={() => marcarComoLida(notif.id)}
                                            className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded hover:bg-green-200 transition"
                                        >
                                            Marcar como lida
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deletarNotificacao(notif.id)}
                                        className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded hover:bg-red-200 transition"
                                    >
                                        Deletar
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-2">{notif.mensagem}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">
                                    {formatDate(notif.data_envio)}
                                </span>
                                <span className="text-xs text-gray-400 capitalize">
                                    {notif.tipo}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}