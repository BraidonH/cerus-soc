import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-start justify-between font-mono text-lg flex flex-col gap-10 lg:flex">
        <h1>What are we about?</h1>
        <h1>What can we offer?</h1>
      </div>
    </main>
  );
} 
