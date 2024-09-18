import { Nav, ProfileImage } from "@/components";

interface HeaderProps {
  sticky: boolean;
}

export default function Header({ sticky }: HeaderProps) {
  return (
    <div
      className={`flex items-center ${
        sticky
          ? "rounded-2xl backdrop-blur-sm bg-green-100/2 p-2 shadow-lg shadow-green-800/50 animate-grow"
          : "flex-wrap"
      }`}
    >
      <ProfileImage size={sticky ? "small" : "large"} />
      <div
        className={`text-center sm:mx-6 sm:text-left ${
          sticky ? "" : "mx-auto"
        }`}
      >
        {!sticky && (
          <>
            <h1 className="text-4xl font-semibold leading-none text-green-100">
              Marco De Carlo
            </h1>
            <h2 className="mt-2 text-lg font-medium leading-none text-green-100/50">
              Web Developer
            </h2>
          </>
        )}
        <Nav sticky={sticky} />
      </div>
    </div>
  );
}
