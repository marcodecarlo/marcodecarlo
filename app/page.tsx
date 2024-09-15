import { ProfileImage } from "@/components"


export default function Home() {
  return (
    <div className="rounded-2xl bg-white/5 p-4 md:p-7 shadow-lg  shadow-green-800/50 animate-grow">
       <div className="flex flex-wrap items-center">
        
        <ProfileImage/>
   
        <div className="mx-3 md:mx-6 flex-1">
          <h1 className="text-4xl font-semibold leading-none text-green-100">
            Marco De Carlo
          </h1>
          <h2 className="mt-2 text-lg font-medium leading-none text-green-100/50">
            Web Developer
          </h2>
        </div>

        <div className="my-5">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

        </div>
       
      </div>
    </div>
  );
}
