import Image from "next/image";
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger,} from "@/components/ui/menubar"
import { Bell, ShoppingCart, Package, Store, User } from 'lucide-react';

export default function HeaderBar() {
  return (
    <header>
      <section className="p-2 bg-blue-500 flex flex-row gap-4 justify-between items-center w-100dvw">
        <Image
          src="/logo.png"
          alt="Logo QuickMarket"
          width={50}
          height={50}
          className="ml-4"
        />
        <Menubar className="text-black flex justify-between w-full max-w-200 bg-transparent border-transparent shadow-none">
          <MenubarMenu>
            <MenubarTrigger className="flex gap-2 hover:bg-blue-100 px-3 py-2 duration-300 text-2ml"><Store/> <p>Lista de Mercados</p></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="flex gap-2 hover:bg-blue-100 px-3 py-2 duration-300 text-2ml"><Bell/> <p>Notificações</p></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="flex gap-2 hover:bg-blue-100 px-3 py-2 duration-300 text-2ml"><Package/><p>Entrega</p></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="flex gap-2 hover:bg-blue-100 px-3 py-2 duration-300 text-2ml"><ShoppingCart/><p>Carrinho</p></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Menubar>
          {true ? (<MenubarMenu>
            <MenubarTrigger className="flex gap-2"><User/> <p>Perfil</p></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Dados pessoais</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Configurações</MenubarItem>
            </MenubarContent>
          </MenubarMenu>) : (<>
            <MenubarMenu>
              <MenubarTrigger>Entrar</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Cadastrar-se</MenubarTrigger>
            </MenubarMenu>
          </>)}
        </Menubar>
      </section>
    </header>);
}

