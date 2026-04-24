import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const Header = () => {
  return (
    <Card className="p-2">
      <CardContent className="flex flex-row items-center justify-between p-2 py-0">
        <Image
          alt="Logo de cds barber"
          src="/logo.png"
          className="rounded-[5px] object-cover"
          height={18}
          width={80}
        />
        <Button
          size="icon"
          className="rounded-[5px] bg-purple-700 text-gray-300"
        >
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
