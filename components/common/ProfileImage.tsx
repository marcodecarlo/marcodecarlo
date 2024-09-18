import Image from "next/image";
import Link from "next/link";

interface ProfileImageProps {
  size: "small" | "large";
}

export default function ProfileImage({ size = "large" }: ProfileImageProps) {
  return (
    <Link
      href="/"
      title="Navigate home"
      className={`group rounded-full bg-gradient-to-tl from-green-700/50 to-green-400/60 p-0.5 shadow-lg mb-auto ${
        size == "large" ? "mx-auto" : "mr-auto"
      }`}
    >
      <div
        className={`${
          size == "large" ? "h-36 w-36" : "h-16 w-16"
        } rounded-full p-1 shadow-lg ring-8 ring-green-900/10 transition duration-300 group-hover:scale-105`}
      >
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
    </Link>
  );
}
