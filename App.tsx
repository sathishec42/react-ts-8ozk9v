import * as React from 'react';
import './style.css';

export default function App() {
  const arr = [
    { name: 'abc', items: ['itemA', 'itemB', 'itemC'], days: 138 },
    { name: 'def', items: ['itemA1', 'itemB2', 'itemC1'], days: 157 },
    { name: 'hfg', items: ['itemAN', 'itemB7', 'itemC7'], days: 189 },
  ];

  const handleSearch = (arr, searchInput) => {
    let res=arr.filter((obj) =>
      Object.values(obj)
        .flat()
        .some((v) =>
          `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase())
        )
    );
    console.log(res);
  };

  return (
    <div>
      <h1>Search value in Array</h1>
      <input onChange={(e) => handleSearch(arr, e.target.value)} />
    </div>
  );
}
