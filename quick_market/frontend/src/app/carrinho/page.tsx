"use client"
import * as React from "react";
import { useRouter } from "next/navigation";
import HeaderBar from "@/components/ui/headerBar";
import api from "@/lib/api";

type ProdutoCarrinho = {
	id: number;
	nome: string;
	preco: number;
	quantidade: number;
	imagem: string;
	mercado: string;
	observacoes?: string;
	subtotal: number;
};

export default function CarrinhoPage() {
	const [carrinho, setCarrinho] = React.useState<ProdutoCarrinho[]>([]);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState<string | null>(null);
	const router = useRouter();

	const fetchCarrinho = async (): Promise<ProdutoCarrinho[]> => {
		try {
			const response = await api.get("/carrinho/");
			return response.data;
		} catch (error: any) {
			if (error.response?.status === 401) {
				router.push('/login');
				return [];
			}
			throw error;
		}
	};

	React.useEffect(() => {
		fetchCarrinho()
			.then(setCarrinho)
			.catch((error) => {
				console.error("Erro ao buscar carrinho:", error);
				setError("Erro ao carregar carrinho");
			})
			.finally(() => setLoading(false));
	}, []);

	const alterarQuantidade = async (id: number, delta: number) => {
		try {
			await api.put("/carrinho/items", { id, delta });
			// Recarregar carrinho
			const novoCarrinho = await fetchCarrinho();
			setCarrinho(novoCarrinho);
		} catch (error) {
			console.error("Erro ao alterar quantidade:", error);
		}
	};

	const removerItem = async (id: number) => {
		try {
			await api.delete("/carrinho/items/remove", { data: { id } });
			// Recarregar carrinho
			const novoCarrinho = await fetchCarrinho();
			setCarrinho(novoCarrinho);
		} catch (error) {
			console.error("Erro ao remover item:", error);
		}
	};

	const finalizarCompra = () => {
		if (carrinho.length === 0) return;
		router.push('/pagamento');
	};

	const total = carrinho.reduce(
		(acc: number, item: ProdutoCarrinho) => acc + item.subtotal,
		0
	);

	if (loading) {
		return (
			<>
				<HeaderBar />
				<main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10 px-2">
					<div className="max-w-4xl mx-auto flex justify-center items-center h-64">
						<div className="text-center">
							<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
							<p className="text-gray-600">Carregando carrinho...</p>
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
				<section className="max-w-4xl mx-auto flex flex-col gap-8">
					<h1 className="text-3xl font-extrabold text-blue-700 mb-2 drop-shadow text-center">
						Seu Carrinho
					</h1>
					{error && (
						<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
							{error}
						</div>
					)}
					{carrinho.length === 0 ? (
						<div className="text-center py-12">
							<p className="text-gray-500 text-lg mb-4">
								Seu carrinho está vazio
							</p>
							<button 
								onClick={() => router.push('/lista_mercados')}
								className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
							>
								Ver Mercados
							</button>
						</div>
					) : (
						<>
							<div className="flex flex-col gap-6">
								{carrinho.map((item) => (
									<div
										key={item.id}
										className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md p-4 gap-4 border border-gray-100"
									>
										<img
											src={item.imagem || "/placeholder-product.jpg"}
											alt={item.nome}
											className="w-24 h-24 object-cover rounded-lg"
										/>
										<div className="flex-1 flex flex-col gap-1">
											<span className="font-bold text-lg text-gray-800">
												{item.nome}
											</span>
											<span className="text-sm text-gray-500">
												{item.mercado}
											</span>
											<span className="text-sm text-gray-500">
												Preço: {" "}
												<span className="font-semibold text-blue-700">
													R$ {item.preco.toFixed(2)}
												</span>
											</span>
											{item.observacoes && (
												<span className="text-xs text-gray-400 italic">
													Obs: {item.observacoes}
												</span>
											)}
											<div className="flex items-center gap-2 mt-2">
												<button
													className="px-2 py-1 bg-blue-200 rounded-full text-blue-700 font-bold hover:bg-blue-300 disabled:opacity-50"
													onClick={() => alterarQuantidade(item.id, -1)}
													disabled={item.quantidade <= 1}
												>
													-
												</button>
												<span className="px-3">{item.quantidade}</span>
												<button
													className="px-2 py-1 bg-blue-200 rounded-full text-blue-700 font-bold hover:bg-blue-300"
													onClick={() => alterarQuantidade(item.id, 1)}
												>
													+
												</button>
												<button
													className="ml-4 px-3 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
													onClick={() => removerItem(item.id)}
												>
													Remover
												</button>
											</div>
										</div>
										<div className="font-bold text-green-600 text-lg">
											R$ {item.subtotal.toFixed(2)}
										</div>
									</div>
								))}
							</div>
							<div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
								<span className="text-xl font-bold text-blue-700">
									Total: R$ {total.toFixed(2)}
								</span>
								<button 
									onClick={finalizarCompra}
									className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition"
								>
									Finalizar Compra
								</button>
							</div>
						</>
					)}
				</section>
			</main>
		</>
	);
}