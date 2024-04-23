'use client'

import { useEffect, useState } from "react";
import { fetchAPI } from "./hooks/api/fetchAPI";

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI('https://api.binance.com/api/v3/time', {method: 'GET'})

      setData(data)
    }

    getData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => console.log(data)}>{JSON.stringify(data)}</button>
    </main>
  );
}
