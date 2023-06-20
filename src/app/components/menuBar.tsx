import menuBar from "/public/menubar.svg";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../../components/ui/menubar";

import { ShoppingCart } from "lucide-react";

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Image src={menuBar} alt="menubar" />
        </MenubarTrigger>
        <MenubarContent className="border-none shadow-none">
          <MenubarItem>
            <div className="h-7 w-7 rounded-full bg-gray-300 flex justify-center items-center">
              <ShoppingCart className="h-4 w-4" />
            </div>
          </MenubarItem>
          <MenubarItem>Male</MenubarItem>
          <MenubarItem>Female</MenubarItem>
          <MenubarItem>Kids</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
