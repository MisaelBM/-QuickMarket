import React from "react";

export default function UserPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-primary">Perfil do Usuário</h1>
            <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-primary">
                        U
                    </div>
                    <div className="ml-4">
                        <h2 className="text-xl font-semibold">Nome do Usuário</h2>
                        <p className="text-gray-500">usuario@email.com</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Informações</h3>
                    <ul className="text-gray-700">
                        <li>
                            <span className="font-medium">Telefone:</span>
                        </li>
                        <li>
                            <span className="font-medium">Endereço:</span>
                        </li>
                        <li>
                            <span className="font-medium">Data de cadastro:</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-8 flex justify-end">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
                        Editar Perfil
                    </button>
                </div>
            </div>
        </div>
    );
}