import Image from 'next/image'


export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw]">
     <Image src="/bgtwo.webp" alt='this image will create bug' width={100} height={100} />
     <Image src="/logof.png" alt='this image will create bug' width={200} height={100} />
    </main>
  )
}
