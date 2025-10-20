import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

"use client";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErro("");

        if (!email || !senha) {
            setErro("Preencha todos os campos.");
            setLoading(false);
            return;
        }

        try {
            const response = await api.post("/auth/login", {
                email,
                senha
            });

            const { token, usuario } = response.data;
            
            // Salvar token e dados do usuário
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(usuario));
            
            // Redirecionar para a página inicial
            router.push('/');
        } catch (error: any) {
            setErro(error.response?.data?.error || "Erro ao fazer login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-bold mb-6 text-center text-green-700">
                    Entrar no QuickMarket
                </h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            autoFocus
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Senha
                        </label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>
                    {erro && (
                        <div className="text-red-600 text-sm text-center">{erro}</div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-600">
                    Não tem uma conta?{" "}
                    <Link href="/cadastro" className="text-green-700 hover:underline">
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </main>
    );
}