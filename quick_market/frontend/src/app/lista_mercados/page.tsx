"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import HeaderBar from "@/components/ui/headerBar";
import api from "@/lib/api";

type Mercado = {
    id: number;
    nome: string;
    endereco: string;
    avaliacao: number;
    ofertas: number;
    imagem: string;
};

export default function ListaMercadosPage() {
    const [mercados, setMercados] = useState<Mercado[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        type BackendMercado = Mercado & { rua?: string };
        api.get<BackendMercado[]>("/Database/Seeders/MercadosSeeder.php")
            .then((res) => {
                setMercados(
                    res.data.map((item) => ({
                        id: item.id,
                        nome: item.nome,
                        endereco: item.endereco || item.rua || "",
                        avaliacao: item.avaliacao || 4,
                        ofertas: item.ofertas || 0,
                        imagem: item.imagem || "/imgSupermercados/extra.png"
                    }))
                );
                setLoading(false);
            })
            .catch(() => {
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

    return (
        <>
            <HeaderBar />
            <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10 px-2">
                <section className="max-w-5xl mx-auto flex flex-col gap-8">
                    <h1 className="text-3xl font-extrabold text-blue-700 mb-2 drop-shadow text-center">Mercados próximos de você</h1>
                    {loading && <div className="text-center">Carregando...</div>}
                    {error && <div className="text-center text-red-500">{error}</div>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {mercados.map((mercado) => (
                            <div key={mercado.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center p-5 hover:shadow-2xl transition">
                                <div className="min-h-45">
                                    <img src={mercado.imagem} alt={mercado.nome} className="w-40 object-cover mb-4" />
                                </div>
                                <h2 className="text-xl font-bold text-blue-700 mb-1 text-center">{mercado.nome}</h2>
                                <div className="text-sm text-gray-500 mb-2 text-center">{mercado.endereco}</div>
                                <div className="flex items-center gap-2 mb-2">
                                    {getStars(mercado.avaliacao)}
                                    <span className="text-xs text-gray-400">({mercado.avaliacao})</span>
                                </div>
                                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded mb-2">{mercado.ofertas} ofertas</span>
                                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">Ver ofertas</button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}