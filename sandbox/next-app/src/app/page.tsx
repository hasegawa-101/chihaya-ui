import { Stack } from "@chihaya-ui/react";

export default function Home() {

  return (
    <main className="min-h-screen p-24">
      <Stack gap={8}>
        <h1 className="text-4xl font-bold">Chihaya UI - Next.js App router Sandbox</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Stack Component</h2>
          <Stack gap={4}>
            <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
            <div className="bg-green-500 text-white p-4 rounded">Item 2</div>
            <div className="bg-red-500 text-white p-4 rounded">Item 3</div>
          </Stack>
        </section>
      </Stack>
    </main>
  );
}