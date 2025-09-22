import React from "react";

type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagemUrl: string;
};

const produto: Produto = {
    id: 1,
    nome: "Arroz",
    descricao: "Arroz 5kg - Tipo 1",
    preco: 29.9,
    imagemUrl: "https://via.placeholder.com/400x400.png?text=Produto",
};

export default function ProdutoPage() {
    return (
        <div className="flex flex-col items-center max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
            <img
                src={produto.imagemUrl}
                alt={produto.nome}
                className="w-64 h-64 object-cover rounded-md mb-6"
            />
            <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
            <p className="text-gray-600 mb-4 text-center">{produto.descricao}</p>
            <span className="text-xl font-semibold text-green-600">
                R$ {produto.preco.toFixed(2)}
            </span>
        </div>
    );
}