import { useEffect, useRef, useState } from "react";

const useDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuItemRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (product: string) => {
    if (product === "COLEÇÃO") {
      setDropdownOpen((prev) => !prev);
      setActiveProduct(product);
    } else {
      setDropdownOpen(false);
      setActiveProduct(null);
    }
  };

  const handleMouseEnter = (product: string) => {
    if (product === "COLEÇÃO") {
      setDropdownOpen(true);
      setActiveProduct(product);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (
      !dropdownRef.current?.contains(event.relatedTarget as Node) &&
      !menuItemRef.current?.contains(event.relatedTarget as Node)
    ) {
      setDropdownOpen(false);
      setActiveProduct(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        menuItemRef.current &&
        !menuItemRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        setActiveProduct(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    dropdownOpen,
    activeProduct,
    dropdownRef,
    menuItemRef,
    toggleDropdown,
    handleMouseEnter,
    handleMouseLeave,
    setDropdownOpen,
  };
};

export default useDropdown;