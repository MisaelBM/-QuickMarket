'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

export default function CadastroPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
    });

    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErro('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');
        setLoading(true);

        // Validation
        if (!form.nome || !form.email || !form.senha || !form.confirmarSenha) {
            setErro('Preencha todos os campos.');
            setLoading(false);
            return;
        }

        if (form.senha !== form.confirmarSenha) {
            setErro('As senhas não coincidem.');
            setLoading(false);
            return;
        }

        if (form.senha.length < 6) {
            setErro('A senha deve ter no mínimo 6 caracteres.');
            setLoading(false);
            return;
        }

        try {
            // Make API call to register endpoint
            const response = await api.post('/auth/register', {
                nome: form.nome,
                email: form.email,
                senha: form.senha
            });

            // Store token and user data
            const { token, user } = response.data;
            
            // Save token to localStorage
            localStorage.setItem('token', token);
            
            // Save user data to localStorage
            localStorage.setItem('user', JSON.stringify(user));

            // Show success message and redirect
            alert('Cadastro realizado com sucesso! Bem-vindo ao QuickMarket!');
            router.push('/');
            
        } catch (error: any) {
            console.error('Erro ao cadastrar:', error);
            
            // Handle error response
            if (error.response) {
                const errorMessage = error.response.data?.error || 'Erro ao realizar cadastro';
                setErro(errorMessage);
            } else {
                setErro('Erro de conexão. Verifique sua internet e tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-amber-50">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-2 border-emerald-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                        Criar Conta
                    </h1>
                    <p className="text-gray-600">Junte-se ao QuickMarket</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                            Nome Completo
                        </label>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            required
                            value={form.nome}
                            onChange={handleChange}
                            disabled={loading}
                            placeholder="João Silva"
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            E-mail
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            disabled={loading}
                            placeholder="seu@email.com"
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-2">
                            Senha
                        </label>
                        <input
                            id="senha"
                            name="senha"
                            type="password"
                            required
                            value={form.senha}
                            onChange={handleChange}
                            disabled={loading}
                            placeholder="••••••••"
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirmar Senha
                        </label>
                        <input
                            id="confirmarSenha"
                            name="confirmarSenha"
                            type="password"
                            required
                            value={form.confirmarSenha}
                            onChange={handleChange}
                            disabled={loading}
                            placeholder="••••••••"
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none transition"
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
                        className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 px-4 py-3 font-semibold text-white transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Já tem uma conta?{' '}
                    <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">
                        Entrar
                    </Link>
                </p>
            </div>
        </div>
    );
}