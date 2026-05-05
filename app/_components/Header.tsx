"use client"

import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SideBarSheet from "./SidebartSheet"

const Header = () => {
  return (
    <Card className="p-2">
      <CardContent className="flex flex-row items-center justify-between p-2 py-0">
        <Link href="/">
          {" "}
          <Image
            alt="Logo de cds barber"
            src="/logo.png"
            className="rounded-[5px] object-cover"
            height={18}
            width={80}
          />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="bg-purple-00 absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SideBarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
