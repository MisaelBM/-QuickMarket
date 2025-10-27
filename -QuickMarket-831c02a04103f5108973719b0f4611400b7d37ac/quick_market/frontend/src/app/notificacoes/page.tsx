"use client";
import React, { useState, useEffect } from "react";
import HeaderBar from "@/components/ui/headerBar";
import api from "@/lib/api";
import { Bell, CheckCircle, AlertCircle, Package, Gift, Calendar } from "lucide-react";

interface Notification {
    id: number;
    titulo: string;
    mensagem: string;
    tipo: string;
    data_criacao: string;
    lida: boolean;
}

export default function NotificacoesPage() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'unread'>('all');

    // Mock data for now - in production, fetch from API
    useEffect(() => {
        const loadNotifications = async () => {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // Mock notifications
                const mockNotifications: Notification[] = [
                    {
                        id: 1,
                        titulo: "Pedido confirmado",
                        mensagem: "Seu pedido #1234 foi confirmado com sucesso e está sendo preparado!",
                        tipo: "pedido",
                        data_criacao: new Date().toISOString(),
                        lida: false,
                    },
                    {
                        id: 2,
                        titulo: "Promoção especial",
                        mensagem: "Aproveite 10% de desconto em toda seção de frutas hoje!",
                        tipo: "promocao",
                        data_criacao: new Date(Date.now() - 86400000).toISOString(),
                        lida: true,
                    },
                    {
                        id: 3,
                        titulo: "Produto disponível",
                        mensagem: "O produto que você aguardava voltou ao estoque!",
                        tipo: "estoque",
                        data_criacao: new Date(Date.now() - 172800000).toISOString(),
                        lida: false,
                    },
                    {
                        id: 4,
                        titulo: "Pedido em trânsito",
                        mensagem: "Seu pedido #1234 está a caminho e será entregue em breve!",
                        tipo: "entrega",
                        data_criacao: new Date(Date.now() - 3600000).toISOString(),
                        lida: true,
                    },
                ];
                
                setNotifications(mockNotifications);
            } catch (error) {
                console.error('Erro ao carregar notificações:', error);
            } finally {
                setLoading(false);
            }
        };

        loadNotifications();
    }, []);

    const handleMarkAsRead = async (id: number) => {
        try {
            // Update local state
            setNotifications(notifications.map(notif => 
                notif.id === id ? { ...notif, lida: true } : notif
            ));
            
            // In production, call API to mark as read
            // await api.put(`/notifications/${id}/read`, {});
        } catch (error) {
            console.error('Erro ao marcar notificação como lida:', error);
        }
    };

    const handleMarkAllAsRead = async () => {
        try {
            setNotifications(notifications.map(notif => ({ ...notif, lida: true })));
            // In production, call API
            // await api.put('/notifications/read-all', {});
        } catch (error) {
            console.error('Erro ao marcar todas como lidas:', error);
        }
    };

    const getIcon = (tipo: string) => {
        switch (tipo) {
            case 'pedido':
                return <Package className="w-5 h-5" />;
            case 'promocao':
                return <Gift className="w-5 h-5" />;
            case 'entrega':
                return <CheckCircle className="w-5 h-5" />;
            default:
                return <Bell className="w-5 h-5" />;
        }
    };

    const getIconColor = (tipo: string) => {
        switch (tipo) {
            case 'pedido':
                return 'text-blue-500 bg-blue-50';
            case 'promocao':
                return 'text-amber-500 bg-amber-50';
            case 'entrega':
                return 'text-green-500 bg-green-50';
            default:
                return 'text-gray-500 bg-gray-50';
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Agora';
        if (diffMins < 60) return `${diffMins} min atrás`;
        if (diffHours < 24) return `${diffHours}h atrás`;
        if (diffDays < 7) return `${diffDays}d atrás`;
        return date.toLocaleDateString('pt-BR');
    };

    const filteredNotifications = filter === 'all' 
        ? notifications 
        : notifications.filter(n => !n.lida);

    const unreadCount = notifications.filter(n => !n.lida).length;

    if (loading) {
        return (
            <>
                <HeaderBar />
                <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-10 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gray-500">Carregando notificações...</p>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <HeaderBar />
            <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
                                    Notificações
                                </h1>
                                <p className="text-gray-600">
                                    Você tem {unreadCount} {unreadCount === 1 ? 'notificação não lida' : 'notificações não lidas'}
                                </p>
                            </div>
                            {unreadCount > 0 && (
                                <button
                                    onClick={handleMarkAllAsRead}
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-semibold"
                                >
                                    Marcar todas como lidas
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-4 py-2 rounded-lg font-semibold transition ${
                                    filter === 'all'
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Todas
                            </button>
                            <button
                                onClick={() => setFilter('unread')}
                                className={`px-4 py-2 rounded-lg font-semibold transition ${
                                    filter === 'unread'
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Não lidas
                            </button>
                        </div>
                    </div>

                    {/* Notifications List */}
                    <div className="space-y-3">
                        {filteredNotifications.length === 0 ? (
                            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                                <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg">
                                    Nenhuma notificação no momento.
                                </p>
                            </div>
                        ) : (
                            filteredNotifications.map((notif) => (
                                <div
                                    key={notif.id}
                                    className={`bg-white rounded-2xl shadow-lg p-6 border-2 transition ${
                                        notif.lida
                                            ? 'border-gray-100 hover:border-gray-200'
                                            : 'border-emerald-200 hover:border-emerald-300'
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`p-3 rounded-full ${getIconColor(notif.tipo)}`}>
                                            {getIcon(notif.tipo)}
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className={`font-bold text-lg ${notif.lida ? 'text-gray-700' : 'text-gray-900'}`}>
                                                    {notif.titulo}
                                                </h3>
                                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {formatDate(notif.data_criacao)}
                                                </span>
                                            </div>
                                            <p className={`${notif.lida ? 'text-gray-600' : 'text-gray-700'}`}>
                                                {notif.mensagem}
                                            </p>
                                            {!notif.lida && (
                                                <span className="inline-block mt-2 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                                                    Nova
                                                </span>
                                            )}
                                        </div>
                                        
                                        {/* Mark as read button */}
                                        {!notif.lida && (
                                            <button
                                                onClick={() => handleMarkAsRead(notif.id)}
                                                className="p-2 hover:bg-gray-100 rounded-lg transition"
                                                title="Marcar como lida"
                                            >
                                                <CheckCircle className="w-5 h-5 text-gray-400 hover:text-emerald-600" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}