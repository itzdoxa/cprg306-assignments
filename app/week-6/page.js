import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="max-w-xl mx-auto p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
