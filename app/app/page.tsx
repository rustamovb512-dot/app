"use client";

import { useState } from "react";

export default function Page() {
  const [orders, setOrders] = useState<any[]>([]);
  const [form, setForm] = useState({
    cargoNumber: "",
    sender: "",
    receiver: "",
    status: "Создан",
  });

  const addOrder = () => {
    if (!form.cargoNumber) return;

    setOrders([
      ...orders,
      {
        ...form,
        id: Date.now(),
      },
    ]);

    setForm({
      cargoNumber: "",
      sender: "",
      receiver: "",
      status: "Создан",
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🚛 Logistics System</h1>

      <h2>Добавить груз</h2>

      <input
        placeholder="Номер груза"
        value={form.cargoNumber}
        onChange={(e) =>
          setForm({ ...form, cargoNumber: e.target.value })
        }
      />
      <br />

      <input
        placeholder="Отправитель"
        value={form.sender}
        onChange={(e) => setForm({ ...form, sender: e.target.value })}
      />
      <br />

      <input
        placeholder="Получатель"
        value={form.receiver}
        onChange={(e) =>
          setForm({ ...form, receiver: e.target.value })
        }
      />
      <br />

      <button onClick={addOrder}>Добавить</button>

      <h2>Список грузов</h2>

      {orders.map((o) => (
        <div
          key={o.id}
          style={{
            border: "1px solid #ccc",
            marginTop: 10,
            padding: 10,
          }}
        >
          <div>№: {o.cargoNumber}</div>
          <div>Отправитель: {o.sender}</div>
          <div>Получатель: {o.receiver}</div>
          <div>Статус: {o.status}</div>
        </div>
      ))}
    </div>
  );
}
