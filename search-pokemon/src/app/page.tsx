import Loading from "@/components/Loading";
import PokemonContent from "@/components/PokemonContent";
import { Suspense } from "react";

export default function Home() {

  return (
    <div className="min-h-screen bg-fixed bg-gradient-to-b from-red-400 to-white flex items-center justify-center p-4 font-mono text-neutral-700">
      <Suspense fallback={<Loading />}>
        <PokemonContent />
      </Suspense>
    </div>
  );
}


