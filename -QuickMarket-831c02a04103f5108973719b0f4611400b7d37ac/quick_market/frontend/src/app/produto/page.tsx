"use client"
import React from "react";
import HeaderBar from "@/components/ui/headerBar";
import { ShoppingCart, Heart, Star, Truck, Shield, Award } from "lucide-react";

type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    precoOriginal: number;
    imagemUrl: string;
    avaliacao: number;
    quantidade: number;
};

const produto: Produto = {
    id: 1,
    nome: "Arroz Tipo 1 Especial",
    descricao: "Arroz Tipo 1 - Pacote de 5kg. Grãos selecionados, alta qualidade. Ideal para o dia a dia. Produzido com os mais altos padrões de qualidade.",
    preco: 19.99,
    precoOriginal: 24.99,
    imagemUrl: "imgCards/card1.jpg",
    avaliacao: 4.5,
    quantidade: 1,
};

export default function ProdutoPage() {
    const [quantidade, setQuantidade] = React.useState(produto.quantidade);
    const [desejo, setDesejo] = React.useState(false);
    
    return (
        <>
            <HeaderBar />
            <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Imagem do Produto */}
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <div className="relative">
                                <img
                                    src={produto.imagemUrl}
                                    alt={produto.nome}
                                    className="w-full h-[500px] object-cover rounded-2xl"
                                />
                                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                                    -{Math.round(((produto.precoOriginal - produto.preco) / produto.precoOriginal) * 100)}%
                                </div>
                                <button 
                                    onClick={() => setDesejo(!desejo)}
                                    className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                                >
                                    <Heart className={`w-6 h-6 ${desejo ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                                </button>
                            </div>
                        </div>
                        
                        {/* Detalhes do Produto */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex text-amber-400">
                                        {Array(5).fill(0).map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={`w-5 h-5 ${i < Math.floor(produto.avaliacao) ? 'fill-current' : ''}`} 
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-600">({produto.avaliacao}) • 234 avaliações</span>
                                </div>
                                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                                    {produto.nome}
                                </h1>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {produto.descricao}
                                </p>
                            </div>
                            
                            {/* Preço */}
                            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border-2 border-emerald-200">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                        R$ {produto.preco.toFixed(2)}
                                    </span>
                                    <span className="text-2xl text-gray-400 line-through">
                                        R$ {produto.precoOriginal.toFixed(2)}
                                    </span>
                                </div>
                                <p className="text-emerald-600 font-semibold">
                                    Economize R$ {(produto.precoOriginal - produto.preco).toFixed(2)}!
                                </p>
                            </div>
                            
                            {/* Quantidade */}
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">Quantidade</label>
                                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-inner max-w-xs">
                                    <button
                                        onClick={() => quantidade > 1 && setQuantidade(quantidade - 1)}
                                        className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-emerald-600 font-bold hover:bg-emerald-50 transition shadow"
                                    >
                                        −
                                    </button>
                                    <span className="text-2xl font-bold w-12 text-center">{quantidade}</span>
                                    <button
                                        onClick={() => setQuantidade(quantidade + 1)}
                                        className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-emerald-600 font-bold hover:bg-emerald-50 transition shadow"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            
                            {/* Botões */}
                            <div className="space-y-4">
                                <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-[1.02] transition flex items-center justify-center gap-3">
                                    <ShoppingCart className="w-6 h-6" />
                                    Adicionar ao Carrinho
                                </button>
                                <button className="w-full border-2 border-emerald-600 text-emerald-600 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition">
                                    Comprar Agora
                                </button>
                            </div>
                            
                            {/* Benefícios */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                                <h3 className="font-bold text-lg text-gray-800 mb-4">Por que escolher este produto?</h3>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Truck className="w-6 h-6 text-emerald-600" />
                                    <span>Entrega rápida e gratuita</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Shield className="w-6 h-6 text-emerald-600" />
                                    <span>Compra 100% segura</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Award className="w-6 h-6 text-emerald-600" />
                                    <span>Qualidade garantida</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Produtos Relacionados */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Produtos Relacionados</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition border-2 border-transparent hover:border-emerald-300">
                                    <img src={`imgCards/card${i}.jpg`} alt="Produto" className="w-full h-40 object-cover" />
                                    <div className="p-5">
                                        <h3 className="font-bold text-gray-800 mb-2">Produto Relacionado</h3>
                                        <p className="text-2xl font-bold text-emerald-600">R$ 19,99</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}