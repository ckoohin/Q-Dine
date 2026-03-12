import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function TableStatsLoading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="rounded-full flex justify-center py-0">
          <CardContent className="flex items-center gap-3 p-4">

            <Skeleton className="size-10 rounded-full" />

            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-5 w-10" />
            </div>

          </CardContent>
        </Card>
      ))}
    </div>
  )
}