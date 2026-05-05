import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/search"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const SideBarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid p-5">
        <h2 className="text-lg font-bold">Olá, faça seu login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google.
              </DialogDescription>
            </DialogHeader>
            <Button variant={"outline"} className="gap-2 font-bold">
              <Image
                src="/google.svg"
                width={18}
                height={18}
                alt="Fazer login com o Google"
              />
              Fazer Login com o Google
            </Button>
          </DialogContent>
        </Dialog>
        {/*   {" "}
        <Avatar>
          <AvatarImage src="/avatar.png" />
        </Avatar>
        <div>
          <p className="font-bold">Clintin dos Sites</p>
          <p className="text-xs">clintindossites.com.br</p>
        </div> */}
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
