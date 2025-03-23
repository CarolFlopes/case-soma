
import Dropdown from "../../components/Dropdown";
import useDropdown from "../../hooks/useDropdown";
import * as S from "./styles";
import Menu from "../Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const products = ["NOVIDADES", "COLEÇÃO", "JOIAS", "SALE"];
  const {
    dropdownOpen,
    activeProduct,
    dropdownRef,
    menuItemRef,
    toggleDropdown,
    handleMouseEnter,
    handleMouseLeave,
    setDropdownOpen,
  } = useDropdown();

  return (
    <>
      <S.Content>
      <S.BrandContainer onClick={() => navigate('/')}>
          <img src="/images/logo.svg" alt="Logo" width={124} height={"auto"} />
        </S.BrandContainer>
        <div>
          <Menu
            products={products}
            menuItemRef={menuItemRef}
            toggleDropdown={toggleDropdown}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
      </S.Content>

      <Dropdown
        ref={dropdownRef}
        isOpen={dropdownOpen}
        onClose={() => setDropdownOpen(false)}
        activeProduct={activeProduct}
      />

    </>
  );
};

export default Header;