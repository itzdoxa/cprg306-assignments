import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="max-w-xl mx-auto p-6 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">New Item</h1>
      <NewItem />
    </main>
  );
}
