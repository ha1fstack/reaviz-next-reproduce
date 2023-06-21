import { Chart } from "./Chart";

// if the page is not pre generated, it builds fine
// to test, uncomment the following line
// export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chart />
    </main>
  );
}
