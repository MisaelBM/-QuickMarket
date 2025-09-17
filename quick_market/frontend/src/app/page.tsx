"use client"
import * as React from "react";
import HeaderBar from "@/components/ui/headerBar";
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Home() {
  const [arrayCardsHome, setArrayCardsHome] = React.useState([{title: "Card1", img: "imgCards/card1.jpg"}, {title: "Card2", img: "imgCards/card2.jpeg"}, {title: "Card3", img: "imgCards/card3.jpg"}, {title: "Card4", img: "imgCards/card4.jpg"}]);
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )
  return (
    <>
      <HeaderBar />
      <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-2 py-[1px] flex flex-col justify-between">
        <section className="flex flex-col gap-8 items-center max-w-6xl mx-auto w-full">
          <div className="w-full flex justify-center">
            <div className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold shadow mb-2 animate-pulse text-center">
              🚚 Entrega grátis para compras acima de <span className="font-bold">R$ 100</span>!
            </div>
          </div>
          <label htmlFor="search-input" className="w-fit flex justify-center">
            <div className="w-fit flex justify-between max-w-lg px-4 py-2 rounded-full border border-gray-300 shadow">
            <input
              type="text"
              id="search-input"
              placeholder="Buscar mercados ou produtos..."
              className="min-w-[300px] px-[10px] max-w-lg rounded-full border-transparent border-gray-300 shadow-none focus:outline-none focus:ring-0 transition"
            /> <Search />
          </div>
          </label>
          <div className="w-full flex justify-center">
            <Carousel
              plugins={[plugin.current]}
              className="w-fit"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {arrayCardsHome.map((_, index) => (
                  <CarouselItem key={index} className="flex items-center justify-center">
                    <img
                      src={arrayCardsHome[index].img}
                      alt={arrayCardsHome[index].title}
                      className="w-[60vw] h-[70vh] object-cover rounded-2xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="w-full mt-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Promoções do Dia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-start border border-gray-100 hover:shadow-xl transition">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded mb-2">Oferta</span>
                <span className="font-bold text-lg text-gray-800">Arroz 5kg</span>
                <span className="text-xl font-extrabold text-green-600">R$ 19,99</span>
                <span className="text-sm text-gray-500 mt-1">Supermercado Bom Preço</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-start border border-gray-100 hover:shadow-xl transition">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded mb-2">Oferta</span>
                <span className="font-bold text-lg text-gray-800">Feijão 1kg</span>
                <span className="text-xl font-extrabold text-green-600">R$ 7,49</span>
                <span className="text-sm text-gray-500 mt-1">Mercado Econômico</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-start border border-gray-100 hover:shadow-xl transition">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded mb-2">Oferta</span>
                <span className="font-bold text-lg text-gray-800">Óleo de Soja</span>
                <span className="text-xl font-extrabold text-green-600">R$ 5,99</span>
                <span className="text-sm text-gray-500 mt-1">Supermercado Central</span>
              </div>
            </div>
          </div>
          <div className="w-full mt-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Mercados na sua área</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-start border border-gray-100 hover:shadow-xl transition">
                <span className="font-bold text-lg text-blue-700 flex items-center gap-2">Supermercado Bom Preço
                  <span className="flex text-yellow-400 ml-1">★ ★ ★ ★ ☆</span>
                </span>
                <span className="text-sm text-gray-500 mt-1">Rua das Flores, 123</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-start border border-gray-100 hover:shadow-xl transition">
                <span className="font-bold text-lg text-blue-700 flex items-center gap-2">Mercado Econômico
                  <span className="flex text-yellow-400 ml-1">★ ★ ★ ☆ ☆</span>
                </span>
                <span className="text-sm text-gray-500 mt-1">Av. Brasil, 456</span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-start border border-gray-100 hover:shadow-xl transition">
                <span className="font-bold text-lg text-blue-700 flex items-center gap-2">Supermercado Central
                  <span className="flex text-yellow-400 ml-1">★ ★ ★ ★ ★</span>
                </span>
                <span className="text-sm text-gray-500 mt-1">Praça Central, 789</span>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full bg-white border-t border-gray-200 mt-12 py-6 flex flex-col items-center gap-2">
          <div className="flex gap-4 mb-1">
            <a href="#" className="text-blue-600 hover:underline">Sobre</a>
            <a href="#" className="text-blue-600 hover:underline">Contato</a>
            <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a>
          </div>
          <span className="text-xs text-gray-400">© 2025 QuickMarket. Todos os direitos reservados.</span>
        </footer>
      </main>
    </>
  );
}