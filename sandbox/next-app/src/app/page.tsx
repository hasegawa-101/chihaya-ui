import { Stack } from "@chihaya-ui/react";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <Stack gap={8}>
        <h1 className="font-bold text-4xl">
          Chihaya UI - Next.js App router Sandbox
        </h1>

        <section>
          <h2 className="mb-4 font-semibold text-2xl">Stack Component</h2>
          <Stack gap={4}>
            <div className="rounded bg-blue-500 p-4 text-white">Item 1</div>
            <div className="rounded bg-green-500 p-4 text-white">Item 2</div>
            <div className="rounded bg-red-500 p-4 text-white">Item 3</div>
          </Stack>
        </section>
      </Stack>
    </main>
  );
}
