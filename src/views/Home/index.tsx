import { useEffect, useRef, useState } from "react";
import Typography from "../../components/Typography";
import * as S from "./styles";
import { colors } from "../../styles/designSystem";
import Dropdown from "./Dropdown";

const HomePage = () => {
  const products = ["NOVIDADES", "COLEÇÃO", "JOIAS", "SALE"];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <>
      <S.Content>
        <S.BrandContainer>
          <img src="/images/logo.svg" alt="Logo" width={124} height={"auto"} />
        </S.BrandContainer>
        <div>
          <S.MenuContainer>
            <S.IconsContainer isLeft>
              <img
                src="/images/lojas.png"
                alt="lojas"
                style={{ marginRight: "20px" }}
              />
              <img src="/images/contato.png" alt="contato" />
            </S.IconsContainer>
            {products.map((i, index) => (
              <S.MenuItemsContainer
                key={index}
                ref={i === "COLEÇÃO" ? menuItemRef : null}
                onClick={() => toggleDropdown(i)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <Typography size={"15px"} color={colors.black[300]}>
                  {i}
                </Typography>
              </S.MenuItemsContainer>
            ))}
            <S.MenuItemsContainer>
              <img src="/images/Grupo 439.svg" alt="Inside" />
            </S.MenuItemsContainer>
            <S.IconsContainer>
              <img src="/images/login.png" alt="login" style={{ marginRight: "20px" }} />
              <img src="/images/Grupo 437.png" alt="carrinho" style={{ marginRight: "20px" }} />
              <img src="/images/busca.png" alt="busca" />
            </S.IconsContainer>
          </S.MenuContainer>
        </div>
      </S.Content>

      <Dropdown
        ref={dropdownRef}
        isOpen={dropdownOpen}
        onClose={() => setDropdownOpen(false)}
        activeProduct={activeProduct}
      />

      <S.ContentBg />
    </>
  );
};

export default HomePage;