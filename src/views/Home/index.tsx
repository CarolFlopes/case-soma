import * as S from "./styles";
import Dropdown from "../../components/Dropdown";
import useDropdown from "../../hooks/useDropdown";
import Menu from "../../components/Menu";

const HomePage = () => {
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
        <S.BrandContainer>
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

      <S.ContentBg />
    </>
  );
};

export default HomePage;