import Image from "next/image";
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger,} from "@/components/ui/menubar"

export default function Home() {
  return (
    <>
      <section className="w-full flex justify-center p-2 bg-blue-500 flex flex-row gap-4 justify-evenly">
        <Image
          src="/logo.png"
          alt="Logo QuickMarket"
          width={150}
          height={37.5}
          className="ml-4"
        />
        <Menubar className="text-black flex justify-between w-full max-w-200 bg-transparent border-transparent">
          <MenubarMenu>
            <MenubarTrigger>Lista de Mercados</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Notificações</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Entrega</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Carrinho</MenubarTrigger>
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
            <MenubarTrigger>Perfil</MenubarTrigger>
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
    </>
  );
}
