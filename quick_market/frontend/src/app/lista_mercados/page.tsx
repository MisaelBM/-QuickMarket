"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderBar from "@/components/ui/headerBar";
import api from "@/lib/api";

type Mercado = {
    id: number;
    nome: string;
    endereco: string;
    avaliacao: number;
    ofertas: number;
    imagem: string;
    tempo_medio_preparo?: number;
    taxa_entrega?: number;
};

export default function ListaMercadosPage() {
    const [mercados, setMercados] = useState<Mercado[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        api.get<Mercado[]>("/mercados/produtos")
            .then((res) => {
                setMercados(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao carregar mercados:", error);
                setError("Erro ao carregar mercados");
                setLoading(false);
            });
    }, []);

    const getStars = (rating: number) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return (
            <span className="flex text-yellow-400">
                {Array(full).fill(0).map((_, i) => <span key={"f"+i}>★</span>)}
                {half ? <span key="half">☆</span> : null}
                {Array(empty).fill(0).map((_, i) => <span key={"e"+i}>☆</span>)}
            </span>
        );
    };

    const verOfertas = (mercadoId: number) => {
        router.push(`/produto?mercado=${mercadoId}`);
    };

    if (loading) {
        return (
            <>
                <HeaderBar />
                <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10 px-2">
                    <div className="max-w-5xl mx-auto flex justify-center items-center h-64">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">Carregando mercados...</p>
                        </div>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <HeaderBar />
            <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10 px-2">
                <section className="max-w-5xl mx-auto flex flex-col gap-8">
                    <h1 className="text-3xl font-extrabold text-blue-700 mb-2 drop-shadow text-center">
                        Mercados próximos de você
                    </h1>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
                            {error}
                        </div>
                    )}
                    {mercados.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">
                                Nenhum mercado encontrado
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {mercados.map((mercado) => (
                                <div key={mercado.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center p-5 hover:shadow-2xl transition">
                                    <div className="min-h-45">
                                        <img 
                                            src={mercado.imagem} 
                                            alt={mercado.nome} 
                                            className="w-40 h-32 object-cover mb-4 rounded-lg"
                                            onError={(e) => {
                                                e.currentTarget.src = "/imgSupermercados/extra.png";
                                            }}
                                        />
                                    </div>
                                    <h2 className="text-xl font-bold text-blue-700 mb-1 text-center">{mercado.nome}</h2>
                                    <div className="text-sm text-gray-500 mb-2 text-center">{mercado.endereco}</div>
                                    <div className="flex items-center gap-2 mb-2">
                                        {getStars(mercado.avaliacao)}
                                        <span className="text-xs text-gray-400">({mercado.avaliacao})</span>
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded mb-2">
                                        {mercado.ofertas} produtos
                                    </span>
                                    {mercado.tempo_medio_preparo && (
                                        <span className="text-xs text-gray-500 mb-1">
                                            ⏱️ {mercado.tempo_medio_preparo} min
                                        </span>
                                    )}
                                    {mercado.taxa_entrega !== undefined && (
                                        <span className="text-xs text-gray-500 mb-2">
                                            🚚 Taxa: R$ {mercado.taxa_entrega.toFixed(2)}
                                        </span>
                                    )}
                                    <button 
                                        onClick={() => verOfertas(mercado.id)}
                                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                                    >
                                        Ver Produtos
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}