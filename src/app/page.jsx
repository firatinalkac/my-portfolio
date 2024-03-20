import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">Frontend Developer</h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo doloribus odio fugiat, reiciendis sapiente ducimus ipsam pariatur possimus maxime temporibus ad. Debitis possimus voluptas nobis soluta, sunt inventore optio!</p>
        {/* BUTTONS */}
        <div className="flex gap-4">
          <button className="p-4 rounded ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
