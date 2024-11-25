'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { debounce } from 'lodash';
import './SearchBar.css';

const SearchBar = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // navigate to search page with query parameter
  const handleChange = () => {
    debounce(() => navigate(), 200)();

    const navigate = () => {
      const query = inputRef.current?.value || '';
      router.push(`/search?query=${query}`);
    };
  };

  return (
    <div className="search-bar">
      <input type="text" ref={inputRef} placeholder="Find a character..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
