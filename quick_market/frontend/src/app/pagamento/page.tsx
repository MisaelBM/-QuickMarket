import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

"use client";

type FormaPagamento = {
    id: number;
    nome: string;
    codigo: string;
};

type CarrinhoItem = {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    subtotal: number;
};

export default function PagamentoPage() {
    const [paymentMethod, setPaymentMethod] = useState("credit_card");
    const [cardDetails, setCardDetails] = useState({
        name: "",
        number: "",
        expiry: "",
        cvv: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);
    const [formasPagamento, setFormasPagamento] = useState<FormaPagamento[]>([]);
    const [qrCodePix, setQrCodePix] = useState("");
    const router = useRouter();

    useEffect(() => {
        carregarCarrinho();
        carregarFormasPagamento();
    }, []);

    const carregarCarrinho = async () => {
        try {
            const response = await api.get("/carrinho/");
            setCarrinho(response.data);
        } catch (error: any) {
            if (error.response?.status === 401) {
                router.push('/login');
            } else {
                setError("Erro ao carregar carrinho");
            }
        }
    };

    const carregarFormasPagamento = async () => {
        try {
            const response = await api.get("/pagamentos/formas");
            setFormasPagamento(response.data);
        } catch (error) {
            console.error("Erro ao carregar formas de pagamento:", error);
        }
    };

    const gerarQRCodePix = async () => {
        try {
            const total = carrinho.reduce((acc, item) => acc + item.subtotal, 0);
            const response = await api.post("/pagamentos/pix/qrcode", {
                valor: total
            });
            setQrCodePix(response.data.qr_code);
        } catch (error) {
            console.error("Erro ao gerar QR Code PIX:", error);
        }
    };

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    }

    function handlePaymentMethodChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPaymentMethod(e.target.value);
        if (e.target.value === "pix") {
            gerarQRCodePix();
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const total = carrinho.reduce((acc, item) => acc + item.subtotal, 0);
            
            const paymentData = {
                forma_pagamento_id: paymentMethod === "credit_card" ? 1 : 2, // Assumindo IDs
                valor: total,
                ...(paymentMethod === "credit_card" && { dados_cartao: cardDetails })
            };

            const response = await api.post("/pagamentos/", paymentData);
            
            if (response.data.status === "pago") {
                alert("Pagamento realizado com sucesso!");
                router.push('/entrega');
            } else {
                setError("Pagamento não foi processado");
            }
        } catch (error: any) {
            setError(error.response?.data?.error || "Erro ao processar pagamento");
        } finally {
            setLoading(false);
        }
    }

    const total = carrinho.reduce((acc, item) => acc + item.subtotal, 0);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-bold mb-6 text-center text-primary">
                    Pagamento
                </h1>
                
                {/* Resumo do pedido */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Resumo do Pedido</h3>
                    {carrinho.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm mb-1">
                            <span>{item.nome} x{item.quantidade}</span>
                            <span>R$ {item.subtotal.toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="flex justify-between font-bold mt-2 pt-2 border-t">
                        <span>Total:</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block font-medium mb-2 text-gray-700">
                            Método de pagamento
                        </label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="credit_card"
                                    checked={paymentMethod === "credit_card"}
                                    onChange={handlePaymentMethodChange}
                                    className="accent-primary"
                                />
                                Cartão de Crédito
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="pix"
                                    checked={paymentMethod === "pix"}
                                    onChange={handlePaymentMethodChange}
                                    className="accent-primary"
                                />
                                Pix
                            </label>
                        </div>
                    </div>

                    {paymentMethod === "credit_card" && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nome no cartão
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={cardDetails.name}
                                    onChange={handleInputChange}
                                    required
                                    disabled={loading}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Número do cartão
                                </label>
                                <input
                                    type="text"
                                    name="number"
                                    value={cardDetails.number}
                                    onChange={handleInputChange}
                                    required
                                    maxLength={19}
                                    disabled={loading}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50"
                                    placeholder="0000 0000 0000 0000"
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Validade
                                    </label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        value={cardDetails.expiry}
                                        onChange={handleInputChange}
                                        required
                                        maxLength={5}
                                        disabled={loading}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50"
                                        placeholder="MM/AA"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        CVV
                                    </label>
                                    <input
                                        type="password"
                                        name="cvv"
                                        value={cardDetails.cvv}
                                        onChange={handleInputChange}
                                        required
                                        maxLength={4}
                                        disabled={loading}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {paymentMethod === "pix" && (
                        <div className="bg-gray-100 rounded-md p-4 text-center">
                            <p className="mb-2 text-gray-700">Escaneie o QR Code abaixo para pagar com Pix:</p>
                            <div className="flex justify-center">
                                {qrCodePix ? (
                                    <img
                                        src={qrCodePix}
                                        alt="QR Code Pix"
                                        className="w-32 h-32 object-contain"
                                    />
                                ) : (
                                    <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-500 text-xs">Carregando QR Code...</span>
                                    </div>
                                )}
                            </div>
                            <p className="mt-2 text-xs text-gray-500">Após o pagamento, clique em "Confirmar Pagamento".</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-red-600 text-sm text-center">{error}</div>
                    )}

                    <button
                        type="submit"
                        disabled={loading || carrinho.length === 0}
                        className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition disabled:opacity-50"
                    >
                        {loading ? "Processando..." : "Confirmar Pagamento"}
                    </button>
                </form>
                <Link
                    href="/carrinho"
                    className="block text-center text-primary mt-6 hover:underline"
                >
                    Voltar ao carrinho
                </Link>
            </div>
        </main>
    );
}