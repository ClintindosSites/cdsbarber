import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Clintin dos Sites!</h2>
        <p className="underline">Quinta-feira, 23 de abril</p>
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
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-1.png"
            alt="banner de CDS Barbershop"
            fill
            className="rounded-[10px] object-cover"
          />
        </div>
      </div>
    </div>
  )
}
