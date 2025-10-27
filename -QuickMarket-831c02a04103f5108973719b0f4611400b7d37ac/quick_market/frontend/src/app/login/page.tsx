"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro("");
        setLoading(true);

        // Validation
        if (!email || !senha) {
            setErro("Preencha todos os campos.");
            setLoading(false);
            return;
        }

        try {
            // Make API call to login endpoint
            const response = await api.post('/auth/login', {
                email,
                senha
            });

            // Store token and user data
            const { token, user } = response.data;
            
            // Save token to localStorage
            localStorage.setItem('token', token);
            
            // Save user data to localStorage (optional, for easier access)
            localStorage.setItem('user', JSON.stringify(user));

            // Redirect to home page
            router.push('/');
            
        } catch (error: any) {
            console.error('Erro ao fazer login:', error);
            
            // Handle error response
            if (error.response) {
                const errorMessage = error.response.data?.error || 'Erro ao fazer login';
                setErro(errorMessage);
            } else {
                setErro('Erro de conexão. Verifique sua internet e tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-amber-50">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-2 border-emerald-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                        Bem-vindo de volta!
                    </h1>
                    <p className="text-gray-600">Faça login no QuickMarket</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            E-mail
                        </label>
                        <input
                            type="email"
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            required
                            autoFocus
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Senha
                        </label>
                        <input
                            type="password"
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            placeholder="••••••••"
                            required
                            disabled={loading}
                        />
                    </div>
                    {erro && (
                        <div className="bg-red-50 border-2 border-red-200 text-red-700 text-sm rounded-xl py-3 px-4">
                            {erro}
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 rounded-xl transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
                
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Não tem uma conta?{" "}
                        <Link href="/cadastro" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}