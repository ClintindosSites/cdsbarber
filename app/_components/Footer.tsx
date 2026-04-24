import Link from "next/link"
import { Card, CardContent } from "./ui/card"

export default function Footer() {
  return (
    <footer>
      <Card className="p-0">
        <CardContent className="px-5 py-6 text-center">
          <h3 className="text-sm text-gray-400">&copy; Copyright CDS Barber</h3>
          <p className="text-sm text-gray-400">Application developed by</p>
          <Link
            href="https://clintindossites.com.br"
            target="_blank"
            className="text-xl text-purple-600"
          >
            Clintin dos Sites
          </Link>
        </CardContent>
      </Card>
    </footer>
  )
}
