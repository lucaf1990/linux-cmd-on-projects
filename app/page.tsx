import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
     <div>Il contenuto è statico</div>
     <p>{Math.random()}</p>
     <Link href="/route1" className="hover:text-green-500">Go to Route 1</Link>
    </main>
  );
}