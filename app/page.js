'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/explore')
  }, [])

  return (
    <div className="md:max-w-3xl md:mx-auto lg:max-w-5xl flex flex-col items-center justify-center text-4xl">
      Redirecting ...
    </div>
  );
}
