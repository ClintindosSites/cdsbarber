import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import Link from "next/link"
import { Avatar, AvatarImage } from "./ui/avatar"
import { quickSearchOptions } from "../_constants/search"
import Image from "next/image"

const SideBarSheet = () => {
  return (
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
  )
}

export default SideBarSheet
