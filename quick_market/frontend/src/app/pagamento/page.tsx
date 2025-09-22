import React, { useState } from "react";
import Link from "next/link";

"use client";

export default function PagamentoPage() {
    const [paymentMethod, setPaymentMethod] = useState("credit_card");
    const [cardDetails, setCardDetails] = useState({
        name: "",
        number: "",
        expiry: "",
        cvv: "",
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    }

    function handlePaymentMethodChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPaymentMethod(e.target.value);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Lógica de pagamento aqui
        alert("Pagamento realizado com sucesso!");
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-bold mb-6 text-center text-primary">
                    Pagamento
                </h1>
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {paymentMethod === "pix" && (
                        <div className="bg-gray-100 rounded-md p-4 text-center">
                            <p className="mb-2 text-gray-700">Escaneie o QR Code abaixo para pagar com Pix:</p>
                            <div className="flex justify-center">
                                <img
                                    src="/pix-qrcode.png"
                                    alt="QR Code Pix"
                                    className="w-32 h-32 object-contain"
                                />
                            </div>
                            <p className="mt-2 text-xs text-gray-500">Após o pagamento, clique em "Confirmar Pagamento".</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition"
                    >
                        Confirmar Pagamento
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