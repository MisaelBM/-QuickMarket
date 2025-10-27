"use client"
import * as React from "react";
import api from "@/lib/api";
import HeaderBar from "@/components/ui/headerBar";
import type { ProdutoCarrinho } from "@/types";
import { useRouter } from "next/navigation";

const fetchCarrinho = async (): Promise<ProdutoCarrinho[]> => {
	const response = await api.get("/cart/");
	return response.data;
};

export default function CarrinhoPage() {
	const router = useRouter();
	const [carrinho, setCarrinho] = React.useState<ProdutoCarrinho[]>([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const loadCart = async () => {
			try {
				// Check if user is logged in
				const token = localStorage.getItem('token');
				if (!token) {
					router.push('/login');
					return;
				}
				const data = await fetchCarrinho();
				setCarrinho(data);
			} catch (error) {
				console.error("Erro ao carregar carrinho:", error);
			} finally {
				setLoading(false);
			}
		};
		loadCart();
	}, [router]);

	const alterarQuantidade = async (id: number, delta: number) => {
		try {
			const item = carrinho.find(i => i.id === id);
			if (!item) return;

			const newQuantity = item.quantidade + delta;
			
			if (newQuantity <= 0) {
				// Remove item if quantity becomes 0
				await removerItem(id);
				return;
			}

			// Update quantity using PUT endpoint
			await api.put(`/cart/${id}`, { quantidade: newQuantity });
			
			// Reload cart data
			const data = await fetchCarrinho();
			setCarrinho(data);
		} catch (error) {
			console.error("Erro ao alterar quantidade:", error);
			alert('Erro ao alterar quantidade. Tente novamente.');
		}
	};

	const handleFinalize = async () => {
		try {
			// Clear cart via API
			await api.delete('/cart/');
			// Navigate to payment page
			router.push('/pagamento');
		} catch (error) {
			console.error('Erro ao limpar carrinho ao finalizar:', error);
			alert('Erro ao processar pedido. Tente novamente.');
		}
	};

	const removerItem = async (id: number) => {
		try {
			await api.delete(`/cart/${id}`);
			
			// Reload cart data
			const data = await fetchCarrinho();
			setCarrinho(data);
		} catch (error) {
			console.error("Erro ao remover item:", error);
		}
	};

	const total = carrinho.reduce(
		(acc: number, item: ProdutoCarrinho) => acc + item.preco * item.quantidade,
		0
	);

	if (loading) {
		return (
			<>
				<HeaderBar />
				<main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-10 px-4">
					<div className="max-w-5xl mx-auto text-center">
						<p className="text-gray-500">Carregando carrinho...</p>
					</div>
				</main>
			</>
		);
	}

	return (
		<>
			<HeaderBar />
			<main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-10 px-4">
				<section className="max-w-5xl mx-auto flex flex-col gap-8">
					<h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2 text-center">
						🛒 Seu Carrinho
					</h1>
					{carrinho.length === 0 ? (
						<div className="text-center bg-white rounded-2xl shadow-lg p-12">
							<p className="text-gray-500 text-lg mb-4">
								Seu carrinho está vazio
							</p>
							<button 
								onClick={() => router.push('/')}
								className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition"
							>
								Continuar Comprando
							</button>
						</div>
					) : (
						<>
							<div className="flex flex-col gap-4">
								{carrinho.map((item) => (
									<div
										key={item.id}
										className="flex items-center bg-white rounded-2xl shadow-lg p-6 gap-6 border-2 border-transparent hover:border-emerald-300 transition"
									>
										<img
											src={item.imagem || "imgCards/card1.jpg"}
											alt={item.nome}
											className="w-32 h-32 object-cover rounded-xl shadow-md"
										/>
										<div className="flex-1">
											<h3 className="font-bold text-xl text-gray-800 mb-2">
												{item.nome}
											</h3>
											<p className="text-sm text-gray-500 mb-4">
												Preço unitário: R$ {item.preco.toFixed(2)}
											</p>
											<div className="flex items-center gap-4">
												<div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
													<button
														className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-emerald-600 font-bold hover:bg-emerald-50 transition shadow"
														onClick={() => alterarQuantidade(item.id, -1)}
													>
														−
													</button>
													<span className="px-4 font-bold text-gray-800 min-w-[40px] text-center">{item.quantidade}</span>
													<button
														className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-emerald-600 font-bold hover:bg-emerald-50 transition shadow"
														onClick={() => alterarQuantidade(item.id, 1)}
													>
														+
													</button>
												</div>
												<button
													className="ml-auto px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 font-semibold transition"
													onClick={() => removerItem(item.id)}
												>
													Remover
												</button>
											</div>
										</div>
										<div className="text-right">
											<p className="text-sm text-gray-500 mb-1">Subtotal</p>
											<p className="font-bold text-emerald-600 text-2xl">
												R$ {(item.preco * item.quantidade).toFixed(2)}
											</p>
										</div>
									</div>
								))}
							</div>
							<div className="bg-white rounded-2xl shadow-xl p-8 mt-8 border-2 border-emerald-200">
								<div className="flex flex-col sm:flex-row justify-between items-center gap-6">
									<div className="flex flex-col">
										<p className="text-sm text-gray-500 mb-1">Total</p>
										<p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
											R$ {total.toFixed(2)}
										</p>
									</div>
									<div className="flex flex-col sm:flex-row gap-3">
										<button 
											onClick={() => router.push('/')}
											className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition"
										>
											Continuar Comprando
										</button>
										<button 
											onClick={handleFinalize}
											className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition"
										>
											Finalizar Compra →
										</button>
									</div>
								</div>
							</div>
						</>
					)}
				</section>
			</main>
		</>
	);
}