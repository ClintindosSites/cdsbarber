import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

const BookingItem = () => {
  return (
    <>
      {/* AGENDAMENTO */}
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
      <Card className="rounded-[7px]">
        <CardContent className="flex justify-between p-0">
          {/* ESQUERDA */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit rounded-[7px] bg-purple-700 p-4 text-[15px] uppercase text-gray-300">
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

          {/* DIREITA */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid border-purple-800 px-5">
            <p className="text-xl">Abril</p>
            <p className="text-6xl">24</p>
            <p className="text-xl">00:04</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
