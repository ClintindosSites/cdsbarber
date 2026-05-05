"use client"

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
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"

const SideBarSheet = () => {
  const { data } = useSession()
  const handleLoginWithGoogleClick = () => signIn("google")
  const handleLogoutClick = () => signOut()
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid p-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={data?.user?.image ?? " "}
                width={18}
                height={18}
              />
            </Avatar>
            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
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
                <Button
                  variant={"outline"}
                  onClick={handleLoginWithGoogleClick}
                  className="gap-2 font-bold"
                >
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
          </>
        )}
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
          <SheetClose key={option.title} asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  src={option.imageUrl}
                  height={18}
                  width={18}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-b border-solid p-5 ">
        <Button
          variant="ghost"
          className="justify-start gap-2"
          onClick={handleLogoutClick}
        >
          <LogOutIcon size={18} /> Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SideBarSheet
