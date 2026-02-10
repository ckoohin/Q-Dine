"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/libs/axios";

export default function TestConnectPage() {
    const [status, setStatus] = useState("Đang kết nối...");
    const [data, setData] = useState<any>(null);

    useEffect(() => {

        axiosInstance.get("/")
            .then((res) => {
                setStatus("✅ Kết nối thành công (Qua Proxy FE)!");
                setData(res);
            })
            .catch((err) => {
                setStatus("❌ Kết nối thất bại");
                setData({
                    message: err.message,
                    hint: "Đảm bảo BE đang chạy port 3000 và FE chạy port 3001"
                });
            });
    }, []);

    return (
        <div className="p-10 space-y-4">
            <h1 className="text-2xl font-bold">Test Connection (FE Port 3001)</h1>
            <div className={`p-4 text-white font-bold rounded ${status.includes("thành công") ? "bg-green-600" : "bg-red-500"}`}>
                {status}
            </div>
            <pre className="bg-slate-900 text-green-400 p-4 rounded overflow-auto">
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}