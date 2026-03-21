"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

interface IQRGeneratorProps {
  tableId?: string;
}
export default function QRGenerator({ tableId }: IQRGeneratorProps) {
  const [link, setLink] = useState("");

  useEffect(() => {
    const link = `http://localhost:3000/staff/${tableId}`;
    setLink(link);
  }, [tableId]);

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Nhập link..."
        onChange={(e) => setLink(e.target.value)}
      /> */}

      {link &&
        <QRCodeSVG value={"https://github.com/ckoohin/Q-Dine"} size={200} />
      }
    </div>
  );
}