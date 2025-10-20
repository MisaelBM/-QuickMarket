import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

'use client';

export default function CadastroPage() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        data_nascimento: '',
    });

    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErro('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErro('');

        if (form.senha !== form.confirmarSenha) {
            setErro('As senhas não coincidem.');
            setLoading(false);
            return;
        }

        if (form.senha.length < 6) {
            setErro('A senha deve ter pelo menos 6 caracteres.');
            setLoading(false);
            return;
        }

        try {
            const response = await api.post('/auth/register', {
                nome: form.nome,
                email: form.email,
                senha: form.senha,
                data_nascimento: form.data_nascimento || null
            });

            const { token, usuario } = response.data;
            
            // Salvar token e dados do usuário
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(usuario));
            
            // Redirecionar para a página inicial
            router.push('/');
        } catch (error: any) {
            setErro(error.response?.data?.error || 'Erro ao criar conta');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-gray-800">Criar Conta</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            required
                            value={form.nome}
                            onChange={handleChange}
                            disabled={loading}
                            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700">
                            Data de Nascimento (opcional)
                        </label>
                        <input
                            id="data_nascimento"
                            name="data_nascimento"
                            type="date"
                            value={form.data_nascimento}
                            onChange={handleChange}
                            disabled={loading}
                            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
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
                            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700">
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
                            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none disabled:opacity-50"
                        />
                    </div>
                    {erro && <p className="text-sm text-red-500">{erro}</p>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {loading ? 'Criando conta...' : 'Cadastrar'}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Já tem uma conta?{' '}
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Entrar
                    </Link>
                </p>
            </div>
        </div>
    );
}