import PokemonContent from "@/components/PokemonContent";
import { Suspense } from "react";

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-b from-[#E0E6EE] to-[#D0D7DE] flex items-center justify-center p-4 font-sans">
      <Suspense fallback={<p>loading...</p>}>
        <PokemonContent />
      </Suspense>
    </div>
  );
}


