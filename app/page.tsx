import { ProfileImage } from "@/components"


export default function Home() {
  return (
    <div className="rounded-2xl bg-white/5 p-7 shadow-lg  shadow-green-800/50">
      <div className="flex items-center space-x-6">
        <ProfileImage/>
        <div className="mb-auto">
          <h1 className="text-4xl font-semibold leading-none text-green-100">
            Marco De Carlo
          </h1>
          <h2 className="mt-2 text-lg font-medium leading-none text-green-100/50">
            Web Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
