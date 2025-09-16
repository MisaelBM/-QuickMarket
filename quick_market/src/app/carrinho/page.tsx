"use client"
import * as React from "react";
import HeaderBar from "@/components/ui/headerBar";

const produtosCarrinho = [
	{
		id: 1,
		nome: "Arroz 5kg",
		preco: 19.99,
		quantidade: 2,
		imagem: "/imgCards/card1.jpg",
	},
	{
		id: 2,
		nome: "Feijão 1kg",
		preco: 7.49,
		quantidade: 1,
		imagem: "/imgCards/card2.jpeg",
	},
];

export default function CarrinhoPage() {
	const [carrinho, setCarrinho] = React.useState(produtosCarrinho);

	const alterarQuantidade = (id: number, delta: number) => {
		setCarrinho((carrinho) =>
			carrinho.map((item) =>
				item.id === id
					? { ...item, quantidade: Math.max(1, item.quantidade + delta) }
					: item
			)
		);
	};

	const removerItem = (id: number) => {
		setCarrinho((carrinho) => carrinho.filter((item) => item.id !== id));
	};

	const total = carrinho.reduce(
		(acc, item) => acc + item.preco * item.quantidade,
		0
	);

	return (
		<>
			<HeaderBar />
			<main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10 px-2">
				<section className="max-w-4xl mx-auto flex flex-col gap-8">
					<h1 className="text-3xl font-extrabold text-blue-700 mb-2 drop-shadow text-center">
						Seu Carrinho
					</h1>
					{carrinho.length === 0 ? (
						<p className="text-center text-gray-500">
							Adicione produtos ao seu carrinho para começar a fazer compras.
						</p>
					) : (
						<>
							<div className="flex flex-col gap-6">
								{carrinho.map((item) => (
									<div
										key={item.id}
										className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md p-4 gap-4 border border-gray-100"
									>
										<img
											src={item.imagem}
											alt={item.nome}
											className="w-24 h-24 object-cover rounded-lg"
										/>
										<div className="flex-1 flex flex-col gap-1">
											<span className="font-bold text-lg text-gray-800">
												{item.nome}
											</span>
											<span className="text-sm text-gray-500">
												Preço:{" "}
												<span className="font-semibold text-blue-700">
													R$ {item.preco.toFixed(2)}
												</span>
											</span>
											<div className="flex items-center gap-2 mt-2">
												<button
													className="px-2 py-1 bg-blue-200 rounded-full text-blue-700 font-bold hover:bg-blue-300"
													onClick={() => alterarQuantidade(item.id, -1)}
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
											R$ {(item.preco * item.quantidade).toFixed(2)}
										</div>
									</div>
								))}
							</div>
							<div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
								<span className="text-xl font-bold text-blue-700">
									Total: R$ {total.toFixed(2)}
								</span>
								<button className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition">
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