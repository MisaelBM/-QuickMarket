import React from "react";

const deliveryStatus = {
    status: "Em trânsito",
    estimatedTime: "30 minutos",
    lastUpdate: "2024-06-10 15:30",
    trackingId: "QMK123456789",
};

export default function EntregaPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] bg-white px-4">
            <div className="w-full max-w-md bg-gray-50 rounded-xl shadow-md p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Status da Entrega</h1>
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-gray-500 font-medium">Status</span>
                        <span className="text-blue-600 font-semibold">{deliveryStatus.status}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-gray-500 font-medium">Previsão de entrega</span>
                        <span className="text-gray-800">{deliveryStatus.estimatedTime}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-gray-500 font-medium">Última atualização</span>
                        <span className="text-gray-800">{deliveryStatus.lastUpdate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-medium">Código de rastreio</span>
                        <span className="text-gray-800">{deliveryStatus.trackingId}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}