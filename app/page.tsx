// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold">Generate cinematic first-person historical videos with AI.</h1>
      <p className="mt-2">Experience history through your own eyes.</p>
      <h2 className="text-2xl mt-8">Popular Time Periods</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <button className="bg-blue-600 p-4 rounded">Roman Soldier – 50 BC</button>
        <button className="bg-blue-600 p-4 rounded">Victorian London – 1888</button>
      </div>
    </div>
  );
}
