import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"

export default function Home() {
  return (
    <div>
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">Olá, Clintin dos Sites!</h2>
        <p className="underline">Quinta-feira, 23 de abril</p>

        {/* BUSCA */}
        <div className="mt-6 flex items-center gap-2">
          {" "}
          <Input
            placeholder="Faça sua busca..."
            className="rounded-[7px] border-purple-500"
          />{" "}
          <Button className="rounded-[7px]">
            <SearchIcon className="text-gray-300" />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-1.png"
            alt="banner de CDS Barbershop"
            fill
            className="rounded-[10px] object-cover"
          />
        </div>

        {/* AGENDAMENTO */}
        <Card className="mt-6">
          <CardContent className="flex">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5">
              <Badge className="w-fit rounded-[7px] bg-purple-700 p-4 uppercase text-gray-300">
                Confirmado
              </Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia Clintin dos Sites</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
