import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/api";

type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem_url: string;
    tempo_preparo?: number;
    disponivel: boolean;
    categoria?: string;
    mercado: string;
};

export default function ProdutoPage() {
    const [produto, setProduto] = useState<Produto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [quantidade, setQuantidade] = useState(1);
    const [observacoes, setObservacoes] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const produtoId = searchParams.get('id');
    const mercadoId = searchParams.get('mercado');

    useEffect(() => {
        if (produtoId) {
            carregarProduto(parseInt(produtoId));
        } else if (mercadoId) {
            carregarProdutosMercado(parseInt(mercadoId));
        } else {
            setError("ID do produto ou mercado não fornecido");
            setLoading(false);
        }
    }, [produtoId, mercadoId]);

    const carregarProduto = async (id: number) => {
        try {
            const response = await api.get(`/produtos/${id}`);
            setProduto(response.data);
        } catch (error) {
            console.error("Erro ao carregar produto:", error);
            setError("Erro ao carregar produto");
        } finally {
            setLoading(false);
        }
    };

    const carregarProdutosMercado = async (mercadoId: number) => {
        try {
            const response = await api.get(`/mercados/${mercadoId}/produtos`);
            const produtos = response.data;
            if (produtos.length > 0) {
                setProduto(produtos[0]); // Mostrar primeiro produto como exemplo
            } else {
                setError("Nenhum produto encontrado neste mercado");
            }
        } catch (error) {
            console.error("Erro ao carregar produtos:", error);
            setError("Erro ao carregar produtos");
        } finally {
            setLoading(false);
        }
    };

    const adicionarAoCarrinho = async () => {
        if (!produto) return;

        try {
            await api.post("/carrinho/", {
                produto_id: produto.id,
                quantidade,
                observacoes: observacoes || undefined
            });
            
            alert("Produto adicionado ao carrinho!");
            router.push('/carrinho');
        } catch (error: any) {
            if (error.response?.status === 401) {
                router.push('/login');
            } else {
                alert("Erro ao adicionar produto ao carrinho");
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Carregando produto...</p>
                </div>
            </div>
        );
    }

    if (error || !produto) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Erro</h1>
                    <p className="text-gray-600 mb-4">{error || "Produto não encontrado"}</p>
                    <button 
                        onClick={() => router.push('/lista_mercados')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                    >
                        Voltar aos Mercados
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img
                        src={produto.imagem_url || "/placeholder-product.jpg"}
                        alt={produto.nome}
                        className="w-full h-64 md:h-80 object-cover rounded-md mb-6"
                        onError={(e) => {
                            e.currentTarget.src = "/placeholder-product.jpg";
                        }}
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{produto.nome}</h1>
                    <p className="text-gray-600 mb-4">{produto.descricao}</p>
                    
                    <div className="mb-4">
                        <span className="text-sm text-gray-500">Mercado: </span>
                        <span className="font-semibold text-blue-600">{produto.mercado}</span>
                    </div>
                    
                    {produto.categoria && (
                        <div className="mb-4">
                            <span className="text-sm text-gray-500">Categoria: </span>
                            <span className="font-semibold">{produto.categoria}</span>
                        </div>
                    )}
                    
                    {produto.tempo_preparo && (
                        <div className="mb-4">
                            <span className="text-sm text-gray-500">Tempo de preparo: </span>
                            <span className="font-semibold">{produto.tempo_preparo} minutos</span>
                        </div>
                    )}
                    
                    <div className="mb-6">
                        <span className="text-3xl font-bold text-green-600">
                            R$ {produto.preco.toFixed(2)}
                        </span>
                    </div>

                    {produto.disponivel ? (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quantidade
                                </label>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-1 border rounded">{quantidade}</span>
                                    <button
                                        onClick={() => setQuantidade(quantidade + 1)}
                                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Observações (opcional)
                                </label>
                                <textarea
                                    value={observacoes}
                                    onChange={(e) => setObservacoes(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows={3}
                                    placeholder="Ex: Sem cebola, bem temperado..."
                                />
                            </div>
                            
                            <button
                                onClick={adicionarAoCarrinho}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
                            >
                                Adicionar ao Carrinho - R$ {(produto.preco * quantidade).toFixed(2)}
                            </button>
                        </div>
                    ) : (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            Produto indisponível
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}