import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const models = [
  {
    id: 1,
    name: 'ARINA',
    eyeColor: 'blue',
    height: 175,
    images: ['/models/arina/1.jpg', '/models/arina/2.jpg'],
  },
  {
    id: 2,
    name: 'KATERINA',
    eyeColor: 'green',
    height: 178,
    images: ['/models/katerina/1.jpg', '/models/katerina/2.jpg'],
  },
  {
    id: 2,
    name: 'KATERINA',
    eyeColor: 'green',
    height: 178,
    images: ['/models/katerina/1.jpg', '/models/katerina/2.jpg'],
  },
  {
    id: 2,
    name: 'KATERINA',
    eyeColor: 'green',
    height: 178,
    images: ['/models/katerina/1.jpg', '/models/katerina/2.jpg'],
  },
  {
    id: 2,
    name: 'KATERINA',
    eyeColor: 'green',
    height: 178,
    images: ['/models/katerina/1.jpg', '/models/katerina/2.jpg'],
  }
];

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);
  const [filterEye, setFilterEye] = useState('');

  const addToCart = (id: number) => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };

  const filtered = filterEye
    ? models.filter((m) => m.eyeColor === filterEye)
    : models;

  return (
    <>
      <Head>
        <title>Model Catalog</title>
      </Head>
      <div className="p-6">
        <header className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Danaya Models</h1>
          <Link href="/cart" className="underline">
            Cart ({cart.length})
          </Link>
        </header>

        <div className="mb-4">
          <label className="mr-2">Eye color filter:</label>
          <select onChange={(e) => setFilterEye(e.target.value)} className="border px-2">
            <option value="">All</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="brown">Brown</option>
            <option value="grey">Grey</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((model) => (
            <div key={model.id} className="border rounded-xl overflow-hidden shadow-md">
     <img src={model.images[0]} alt={model.name} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{model.name}</h2>
                <p>Eye Color: {model.eyeColor}</p>
                <p>Height: {model.height} cm</p>
                <button
                  onClick={() => addToCart(model.id)}
                  className="mt-2 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                >
                  Забукировать модель
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
