import BarbershopItem from "../_components/BarbershopItem"
import Search from "../_components/search"
import { db } from "../_lib/prisma"

interface BarbershopsPageProps {
  searchParams: Promise<{
    search?: string
  }>
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  const params = await searchParams
  const search = params.search ?? ""

  const barbershops = await db.barbershop.findMany({
    where: search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              services: {
                some: {
                  name: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
              },
            },
          ],
        }
      : undefined,
    include: {
      services: true,
    },
  })

  return (
    <div className="">
      <div className="my-6 px-5">
        {" "}
        <Search />
      </div>
      <div className="px-5">
        {" "}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{search}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopsPage
