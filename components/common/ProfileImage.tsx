import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="group rounded-full bg-gradient-to-tl from-green-700/50 to-green-400/60 p-0.5 shadow-lg mb-auto">
      <div className="h-36 w-36 rounded-full p-1 shadow-lg ring-8 ring-green-900/10 transition duration-300 group-hover:scale-105">
        <Image
          src="/marco_decarlo.png"
          quality={100}
          width={144}
          height={144}
          priority={true}
          className="rounded-full"
          alt="Foto di Marco De Carlo"
        />
      </div>
    </div>
  );
}
