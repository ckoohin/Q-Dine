"use client"
import QRGenerator from "@/app/(protected)/staff/qr_table/[tableId]/qr-generator";
import { useParams } from "next/navigation";

export default function TablesPage() {
  const { tableId } = useParams()
  return (
    <div>
      <h1>QR Table</h1>
      <QRGenerator tableId={tableId as string} />
    </div>
  );
}