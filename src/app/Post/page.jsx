import Link from 'next/link';
import React from 'react';

export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};


const Posts = async() => {
    const products = await getProducts()
    console.log(products);
    
    return (
        <div className='grid grid-cols-4 gap-4 mt-20 max-w-7xl mx-auto'>
            {
                products.map(p=> <div className='bg-gray-300 px-5'>
                    <h1>{p.title}</h1>
                    <img className='w-[200px]' src={p.image} alt="" srcset="" />
                    <Link href={`/Post/${p.id}`} className='btn btn-primary'>Details</Link>
                </div>)
            }
        </div>
    );
};

export default Posts;
