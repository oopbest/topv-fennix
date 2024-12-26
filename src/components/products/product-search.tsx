import Image from "next/image";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { formatThaiBaht } from "@/utils/format-currency.util";
import allproducts from "@mockup/allproducts.json";
// import { Product } from "@/interfaces/dto/products.dto";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  thumbnail?: string[];
  short_description: string;
  rating: number;
  tags: string[];
  category: string;
}

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3-second delay
      // Simulate fetching data from an API or static JSON file
      const data: Product[] = allproducts;
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus(); // Set focus on the input when the modal opens
    }
  }, [isOpen]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSuggestionClick = (product: Product) => {
    setSearchTerm(""); // Clear the search term when an item is selected
    setIsOpen(false);
    router.push(`/products/${product.id}`);
  };

  const toggleModal = () => {
    if (isOpen) {
      // Clear search term when closing the modal
      setSearchTerm("");
    }
    setIsOpen(!isOpen);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  // Filter products only if searchTerm length is 3 or more
  const filteredProducts =
    searchTerm.length >= 3
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  // Close modal if clicked outside of it
  const handleOutsideClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isOpen && !target.closest(".modal-content")) {
      toggleModal();
    }
  };

  return (
    <div
      className="relative w-full max-w-md mx-auto"
      onClick={handleOutsideClick}
    >
      <div className="flex justify-center border border-gray-300 rounded-lg overflow-hidden">
        <span className="flex items-center justify-center px-3 text-gray-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          onClick={toggleModal}
          type="text"
          placeholder="ค้นหาผลิตภัณฑ์..."
          readOnly
          className="flex-1 px-1 py-2 border-none outline-none focus:ring-0 text-base focus:outline-none"
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="modal-content bg-transparent text-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-2/3 max-w-3xl mx-auto fixed top-1/4">
            <div className="relative">
              <input
                type="text"
                ref={inputRef}
                value={searchTerm}
                onChange={handleChange}
                placeholder="e.g. Wireless Bluetooth, Earbuds, Gaming"
                className="border border-gray-300 text-gray-400 rounded pl-10 pr-10 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
              <div className="absolute left-3 top-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M16.5 10.5A6.5 6.5 0 1110 4a6.5 6.5 0 016.5 6.5z"
                  />
                </svg>
              </div>
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            {isLoading ? (
              <div className="mt-4 flex justify-center items-center">
                <svg
                  className="animate-spin h-8 w-8 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              </div>
            ) : (
              <>
                {filteredProducts.length > 0 ? (
                  <ul className="mt-4 max-h-60 overflow-y-auto border border-gray-300 rounded-lg shadow-lg">
                    {filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleSuggestionClick(product)}
                        className="cursor-pointer p-2 hover:bg-white hover:text-black flex items-center space-x-4"
                      >
                        <Image
                          width={50}
                          height={50}
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 object-cover max-w-full"
                        />
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="font-medium">
                            {formatThaiBaht(product.price)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  searchTerm.length >= 3 && (
                    <div className="mt-4 text-white flex flex-col text-center justify-center">
                      <p>ไม่พบผลการค้นหา</p>
                      <p>
                        ลองใช้คำอื่นที่แตกต่างหรือคำอื่นที่มีความหมายกว้างกว่านี้
                      </p>
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
