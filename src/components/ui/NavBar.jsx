import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Solutions", "Products", "Company"];

  const handleConnectMetaMask = async () => {
    // Verifica se o MetaMask está instalado
    if (window.ethereum) {
      try {
        // Solicita a conexão com MetaMask
        await window.ethereum.request({ method: "eth_requestAccounts" });
        alert("MetaMask connected!"); // Mensagem de confirmação (opcional)
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <Navbar
      className="w-full backdrop-blur-md bg-[#242424]"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden w-full backdrop-blur-md bg-[#242424]" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src="/src/assets/logo.png" alt="EcoChain" className="w-16" />
          <p className="font-bold text-inherit text-base">CHAIN</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6">
        <NavbarBrand>
          <img
            src="/src/assets/logo.png"
            alt="EcoChain"
            className="justify-center items-center w-20"
          />
          <p className="font-bold text-inherit p-1 text-2xl">CHAIN</p>
        </NavbarBrand>
        <NavbarItem className="mx-auto items-center flex ml-52 tracking-wider">
          <Link className="text-white" href="#">
            Solutions
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Company
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="bg-[#242424] text-gray-50 tracking-wider px-5 border border-gray-700"
            radius="full"
            as={Link}
            variant="flat"
            onClick={handleConnectMetaMask} // Adiciona o evento de clique
          >
            Connect Wallet
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
