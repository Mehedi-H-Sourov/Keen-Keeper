import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen"> 
  <h2 className="text-2xl font-bold text-center mt-10">Welcome to Keen Keeper!</h2>
   <button className="btn btn-primary mt-5">Get Started</button>
   </div>
   
  );
}
