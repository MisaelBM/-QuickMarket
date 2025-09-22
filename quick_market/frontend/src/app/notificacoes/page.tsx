import React from "react";

const notifications = [
    {
        id: 1,
        title: "Pedido confirmado",
        message: "Seu pedido #1234 foi confirmado com sucesso!",
        date: "2024-06-10 14:30",
        read: false,
    },
    {
        id: 2,
        title: "Promoção especial",
        message: "Aproveite 10% de desconto em toda seção de frutas hoje!",
        date: "2024-06-09 09:00",
        read: true,
    },
];

export default function NotificacoesPage() {
    return (
        <main className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Notificações</h1>
            <ul className="space-y-3">
                {notifications.length === 0 ? (
                    <li className="text-gray-500">Nenhuma notificação no momento.</li>
                ) : (
                    notifications.map((notif) => (
                        <li
                            key={notif.id}
                            className={`rounded-lg p-4 shadow border ${
                                notif.read
                                    ? "bg-gray-100 border-gray-200"
                                    : "bg-white border-blue-400"
                            }`}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold">{notif.title}</span>
                                <span className="text-xs text-gray-400">{notif.date}</span>
                            </div>
                            <p className="text-gray-700">{notif.message}</p>
                            {!notif.read && (
                                <span className="inline-block mt-2 text-xs text-blue-600 font-medium">
                                    Nova
                                </span>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </main>
    );
}