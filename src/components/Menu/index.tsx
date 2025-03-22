import Typography from "../../components/Typography";
import * as S from "./styles";
import { colors } from "../../styles/designSystem";

interface MenuProps {
  products: string[];
  menuItemRef: React.RefObject<HTMLDivElement | null>;
  toggleDropdown: (product: string) => void;
  handleMouseEnter: (product: string) => void;
  handleMouseLeave: (event: React.MouseEvent) => void;
}

const Menu = ({
  products,
  menuItemRef,
  toggleDropdown,
  handleMouseEnter,
  handleMouseLeave,
}: MenuProps) => {
  return (
    <S.MenuContainer>
      <S.IconsContainer isLeft>
        <img
          src="/images/lojas.png"
          alt="lojas"
          style={{ marginRight: "20px" }}
        />
        <img src="/images/contato.png" alt="contato" />
      </S.IconsContainer>
      {products.map((product, index) => (
        <S.MenuItemsContainer
          key={index}
          ref={product === "COLEÇÃO" ? menuItemRef : null}
          onClick={() => toggleDropdown(product)}
          onMouseEnter={() => handleMouseEnter(product)}
          onMouseLeave={handleMouseLeave}
        >
          <Typography size={"15px"} color={colors.black[300]}>
            {product}
          </Typography>
        </S.MenuItemsContainer>
      ))}
      <S.MenuItemsContainer>
        <img src="/images/Grupo 439.svg" alt="Inside" />
      </S.MenuItemsContainer>
      <S.IconsContainer>
        <img
          src="/images/login.png"
          alt="login"
          style={{ marginRight: "20px" }}
        />
        <img
          src="/images/Grupo 437.png"
          alt="carrinho"
          style={{ marginRight: "20px" }}
        />
        <img src="/images/busca.png" alt="busca" />
      </S.IconsContainer>
    </S.MenuContainer>
  );
};

export default Menu;