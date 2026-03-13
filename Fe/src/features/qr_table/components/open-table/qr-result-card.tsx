import QrGenerator from "../qr-generator"

interface Props {
  tableId: string
}

export default function QrResultCard({ tableId }: Props) {

  return (
    <div className="bg-white p-8 rounded-xl border">

      <QrGenerator
        tableId={tableId}
      />

    </div>
  )
}