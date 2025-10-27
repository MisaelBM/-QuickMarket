"use client"
import * as React from "react";
import HeaderBar from "@/components/ui/headerBar";
import { Search, ShoppingBag, Clock, Shield, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const [arrayCardsHome, setArrayCardsHome] = React.useState([
    {title: "Fresco & Natural", img: "imgCards/card1.jpg"}, 
    {title: "Descontos Imperdíveis", img: "imgCards/card2.jpeg"}, 
    {title: "Melhor Qualidade", img: "imgCards/card3.jpg"}, 
    {title: "Entrega Rápida", img: "imgCards/card4.jpg"}
  ]);
  
  // dynamic categories (menus) loaded from API; we'll exclude some categories below
  const [categoriesList, setCategoriesList] = React.useState<any[]>([]);
  const [loadingCategories, setLoadingCategories] = React.useState(false);
  const [categoriesError, setCategoriesError] = React.useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState<number | null>(null);

  const getIconForCategory = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('frut') || n.includes('verd')) return '�';
    if (n.includes('carn')) return '🥩';
    if (n.includes('bebid')) return '�';
    if (n.includes('padar')) return '�';
    return '🛒';
  }
  
  const [featuredProducts, setFeaturedProducts] = React.useState<any[]>([]);
  const [loadingFeatured, setLoadingFeatured] = React.useState(false);
  const [featuredError, setFeaturedError] = React.useState<string | null>(null);

  const handleAddToCart = async (product: any) => {
    try {
      // Check if user is logged in
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to login if not authenticated
        router.push('/login');
        return;
      }

      // Add product to cart via API
      await api.post('/cart/', {
        produto_id: product.id,
        quantidade: 1
      });

  // Show success message (support both API field names)
  const name = product.nome || product.name || 'Produto';
  alert(`${name} adicionado ao carrinho!`);
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      alert('Erro ao adicionar produto ao carrinho. Tente novamente.');
    }
  };

  // Fetch categories (menus) from API and auto-select first one (excluding some)
  React.useEffect(() => {
    let mounted = true;
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        setCategoriesError(null);
        const resp = await api.get('/categories');
        const data = resp.data?.data || [];

        // remove unwanted categories by name
        const filtered = data.filter((c: any) => {
          const name = (c.nome || c.name || '').toLowerCase();
          return name !== 'congelados' && name !== 'limpeza';
        });

        if (mounted) {
          setCategoriesList(filtered);
          if (filtered.length > 0) setSelectedCategoryId(filtered[0].id);
        }
      } catch (err: any) {
        console.error('Erro ao carregar categorias:', err);
        if (mounted) setCategoriesError(err?.message || 'Erro ao carregar categorias');
      } finally {
        if (mounted) setLoadingCategories(false);
      }
    }

    fetchCategories();
    return () => { mounted = false; };
  }, []);

  // When selectedCategoryId changes, load products for that category
  React.useEffect(() => {
    if (!selectedCategoryId) return;
    let mounted = true;
    const fetchByCategory = async () => {
      try {
        setLoadingFeatured(true);
        setFeaturedError(null);
        const resp = await api.get(`/categories/${selectedCategoryId}/products`);
        const data = resp.data?.data || [];
        if (mounted) setFeaturedProducts(data);
      } catch (err: any) {
        console.error('Erro ao carregar produtos por categoria:', err);
        if (mounted) setFeaturedError(err?.message || 'Erro ao carregar produtos');
      } finally {
        if (mounted) setLoadingFeatured(false);
      }
    }

    fetchByCategory();
    return () => { mounted = false; };
  }, [selectedCategoryId]);
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )
  
  return (
    <>
      <HeaderBar />
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        {/* Hero Banner */}
        <section className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-6 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Entrega em 30-60 min</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Compra 100% Segura</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Entregas Grátis acima de R$ 100</span>
            </div>
          </div>
        </section>
        
        {/* Search Bar */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl px-4 py-3 border-2 border-emerald-200 focus-within:border-emerald-400 transition">
              <Search className="w-6 h-6 text-emerald-600" />
              <input
                type="text"
                placeholder="Buscar produtos, marcas, categorias..."
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-lg"
              />
              <button className="bg-emerald-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">
                Buscar
              </button>
            </div>
          </div>
        </section>
        
        {/* Banner Carousel */}
        <section className="max-w-7xl mx-auto px-4 mb-8">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {arrayCardsHome.map((card, index) => (
                <CarouselItem key={index}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-green-900/60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-5xl font-bold text-white drop-shadow-2xl">{card.title}</h2>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white" />
          </Carousel>
        </section>
        
        {/* Categories */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-emerald-600" />
            Navegar por Categorias
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {loadingCategories && (
              <div className="col-span-full text-center text-gray-500">Carregando categorias...</div>
            )}
            {categoriesError && (
              <div className="col-span-full text-center text-red-500">{categoriesError}</div>
            )}
            {!loadingCategories && !categoriesError && categoriesList.map((cat: any, index: number) => {
              const name = cat.nome || cat.name || 'Categoria';
              const icon = getIconForCategory(name);
              const active = selectedCategoryId === cat.id;
              return (
                <div 
                  key={cat.id ?? index}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition cursor-pointer border-2 ${active ? 'border-emerald-300' : 'border-transparent'}`}
                >
                  <span className="text-5xl mb-3">{icon}</span>
                  <span className="font-semibold text-gray-800 text-sm text-center">{name}</span>
                </div>
              )
            })}
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-500" />
              Promoções Especiais
            </h2>
            <button className="text-emerald-600 font-semibold hover:underline">
              Ver todas →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loadingFeatured && (
              <div className="col-span-full text-center text-gray-500">Carregando produtos...</div>
            )}
            {featuredError && (
              <div className="col-span-full text-center text-red-500">{featuredError}</div>
            )}
            {!loadingFeatured && !featuredError && featuredProducts.length === 0 && (
              <div className="col-span-full text-center text-gray-500">Nenhum produto em destaque encontrado.</div>
            )}
            {featuredProducts.map((product: any, index) => {
              const name = product.nome || product.name || 'Produto';
              const price = typeof product.preco === 'number' ? product.preco : product.price;
              const originalPrice = product.preco_original || product.originalPrice;
              const discount = product.desconto || product.discount || (originalPrice && price ? Math.round(((originalPrice - price) / originalPrice) * 100) : null);
              const imgSrc = product.imagem_url ? `/${product.imagem_url}` : (product.img || '/imgCards/card1.jpg');

              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group border-2 border-transparent hover:border-emerald-300"
                >
                  <div className="relative">
                    <img
                      src={imgSrc}
                      alt={name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                    />
                    {discount ? (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                        -{discount}%
                      </div>
                    ) : null}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-emerald-600">R$ {price ? Number(price).toFixed(2) : '0.00'}</span>
                      {originalPrice ? (
                        <span className="text-sm text-gray-400 line-through">R$ {Number(originalPrice).toFixed(2)}</span>
                      ) : null}
                    </div>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-20 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4 text-emerald-400">Sobre Nós</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Quem Somos</a></li>
                  <li><a href="#" className="hover:text-white transition">Nossa História</a></li>
                  <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-emerald-400">Ajuda</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Central de Ajuda</a></li>
                  <li><a href="#" className="hover:text-white transition">Fale Conosco</a></li>
                  <li><a href="#" className="hover:text-white transition">Perguntas Frequentes</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-emerald-400">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
                  <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-white transition">Política de Cookies</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-emerald-400">Redes Sociais</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                  <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© 2025 QuickMarket. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}