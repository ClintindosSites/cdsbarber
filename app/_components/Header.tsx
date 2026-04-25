import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import Link from "next/link"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"

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
            <Button size="icon" variant="outline" className="z-50">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b border-solid p-5">
              {" "}
              <Avatar>
                <AvatarImage src="/avatar.png" />
              </Avatar>
              <div>
                <p className="font-bold">Clintin dos Sites</p>
                <p className="text-xs">clintindossites.com.br</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid p-5 ">
              <SheetClose asChild />
              <Button className="justify-start gap-2" variant="ghost" asChild>
                <Link href="/">
                  {" "}
                  <HomeIcon size={18} />
                  Inicio
                </Link>
              </Button>
              <Button className="justify-start gap-2" variant="ghost" asChild>
                <Link href="/">
                  {" "}
                  <CalendarIcon size={18} /> Agendamento
                </Link>
              </Button>
            </div>
            <div className="flex flex-col gap-2 border-b border-solid p-5 ">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="justify-start gap-2"
                  variant="ghost"
                >
                  <Image
                    alt={option.title}
                    src={option.imageUrl}
                    height={18}
                    width={18}
                  />
                  {option.title}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2 border-b border-solid p-5 ">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} /> Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
