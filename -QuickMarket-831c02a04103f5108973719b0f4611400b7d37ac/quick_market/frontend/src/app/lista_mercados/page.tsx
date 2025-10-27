"use client";

import * as React from "react";
import { useState } from "react";
import HeaderBar from "@/components/ui/headerBar";
import { ShoppingBag, TrendingUp, Award, TrendingDown } from "lucide-react";

type Categoria = {
    id: number;
    nome: string;
    icon: string;
    produtos: number;
    cor: string;
};

export default function ListaMercadosPage() {
    const categorias: Categoria[] = [
        { id: 1, nome: "Frutas & Verduras", icon: "🥬", produtos: 245, cor: "from-green-100 to-emerald-100" },
        { id: 2, nome: "Carnes & Aves", icon: "🥩", produtos: 89, cor: "from-red-100 to-pink-100" },
        { id: 3, nome: "Limpeza", icon: "🧹", produtos: 156, cor: "from-blue-100 to-cyan-100" },
        { id: 4, nome: "Bebidas", icon: "🥤", produtos: 124, cor: "from-purple-100 to-violet-100" },
        { id: 5, nome: "Padaria", icon: "🥖", produtos: 67, cor: "from-amber-100 to-yellow-100" },
        { id: 6, nome: "Congelados", icon: "🧊", produtos: 98, cor: "from-cyan-100 to-blue-100" },
        { id: 7, nome: "Laticínios", icon: "🥛", produtos: 112, cor: "from-white to-gray-50" },
        { id: 8, nome: "Petiscos", icon: "🍿", produtos: 203, cor: "from-orange-100 to-red-100" },
    ];
    
    const maisVendidos = [
        { nome: "Arroz Tipo 1 5kg", preco: 19.99, vendas: 1234 },
        { nome: "Feijão Carioca 1kg", preco: 7.49, vendas: 987 },
        { nome: "Óleo de Soja 900ml", preco: 5.99, vendas: 856 },
        { nome: "Açúcar Cristal 1kg", preco: 4.99, vendas: 742 },
    ];

    return (
        <>
            <HeaderBar />
            <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-10 px-4">
                <section className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                            Nossas Categorias
                        </h1>
                        <p className="text-xl text-gray-600">
                            Explore nossos produtos e encontre o que você precisa
                        </p>
                    </div>
                    
                    {/* Categorias Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {categorias.map((cat) => (
                            <div 
                                key={cat.id}
                                className={`bg-gradient-to-br ${cat.cor} rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition cursor-pointer border-2 border-transparent hover:border-emerald-300`}
                            >
                                <div className="text-6xl mb-4 text-center">{cat.icon}</div>
                                <h3 className="font-bold text-xl text-gray-800 text-center mb-2">{cat.nome}</h3>
                                <p className="text-sm text-gray-600 text-center">{cat.produtos} produtos</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Mais Vendidos */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-emerald-200">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-emerald-600" />
                                Mais Vendidos da Semana
                            </h2>
                            <button className="text-emerald-600 font-semibold hover:underline">
                                Ver todos →
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {maisVendidos.map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-transparent hover:border-emerald-300 transition shadow-lg hover:shadow-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Award className="w-6 h-6 text-amber-500" />
                                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                            #{index + 1} Mais Vendido
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 mb-2">{item.nome}</h3>
                                    <p className="text-2xl font-bold text-emerald-600 mb-2">R$ {item.preco.toFixed(2)}</p>
                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                        {item.vendas} vendas esta semana
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}