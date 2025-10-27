"use client";
import Image from "next/image";
import Link from "next/link";
import { Bell, ShoppingCart, User, Menu, MapPin, LogOut } from 'lucide-react';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

interface UserData {
  id: number;
  nome: string;
  email: string;
  tipo: string;
}

interface CartItem {
  id: number;
  quantidade: number;
}

export default function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Load user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }, []);

  useEffect(() => {
    // Load cart count when user is logged in
    const loadCartCount = async () => {
      const token = localStorage.getItem('token');
      if (!token || !user) {
        setCartCount(0);
        return;
      }

      try {
        const response = await api.get('/cart/');
        const cartItems: CartItem[] = response.data;
        
        // Calculate total items in cart
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantidade, 0);
        setCartCount(totalItems);
      } catch (error) {
        console.error('Error loading cart count:', error);
        setCartCount(0);
      }
    };

    loadCartCount();

    // Refresh cart count every 2 seconds to keep it updated
    const interval = setInterval(loadCartCount, 2000);

    return () => clearInterval(interval);
  }, [user]);

  const handleLogout = async () => {
    try {
      // Call logout API
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      setCartCount(0);
      // Redirect to login
      router.push('/login');
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <section className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <MapPin className="w-4 h-4" />
            <span>Entrega para: <strong>São Paulo, SP</strong></span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:underline">Atendimento</Link>
            <Link href="/" className="hover:underline">Sobre</Link>
            <Link href="/" className="hover:underline">Promoções</Link>
          </div>
        </div>
      </section>
      
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="QuickMarket"
              width={60}
              height={60}
              className="rounded-full shadow-lg"
            />
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                QuickMarket
              </h1>
              <p className="text-xs text-gray-500">Supermercado Online</p>
            </div>
          </Link>
          
          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="w-full flex items-center bg-gray-100 rounded-full px-4 py-3 border-2 border-transparent focus-within:border-emerald-500 transition">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition">
                Buscar
              </button>
            </div>
          </div>
          
          {/* Nav Icons */}
          <div className="flex items-center gap-4">
            <Link href="/carrinho" className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
            
            <Link href="/notificacoes" className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
            </Link>
            
            {user ? (
              <div className="relative">
                <div 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {getInitials(user.nome)}
                  </div>
                  <span className="hidden md:block text-sm font-semibold text-gray-700">{user.nome}</span>
                </div>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border-2 border-gray-100 overflow-hidden">
                    <div className="p-4 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-800">{user.nome}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 transition flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
                <User className="w-4 h-4" />
                <span className="hidden md:block text-sm font-semibold">Entrar</span>
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* Categories Bar */}
      <section className="hidden md:block bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <Link href="/lista_mercados" className="flex items-center gap-2 font-semibold text-gray-700 hover:text-emerald-600 transition cursor-pointer">
              <Menu className="w-5 h-5" />
              <span className="text-sm">Todas as Categorias</span>
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-semibold transition">Promoções</Link>
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-semibold transition">Mais Vendidos</Link>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
}

