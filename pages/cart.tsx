import Link from 'next/link';
import { useState } from 'react';

const models = [
  { id: 1, name: 'ARINA' },
  { id: 2, name: 'KATERINA' },
  { id: 3, name: 'DALIA' },
  { id: 4, name: 'ALI OSK' },
  { id: 5, name: 'KATRIN' },
];

export default function CartPage() {
  const [cart, setCart] = useState<number[]>([1, 3]);
  const removeFromCart = (id: number) => setCart(cart.filter((x) => x !== id));
  const selected = models.filter((m) => cart.includes(m.id));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Корзина</h1>
      <Link href="/" className="underline">← Назад</Link>
      {selected.length === 0 ? (
        <p className="mt-4">Корзина пуста.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {selected.map((m) => (
            <li key={m.id} className="flex justify-between border-b pb-2">
              <span>{m.name}</span>
              <button onClick={() => removeFromCart(m.id)} className="text-red-500">Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
