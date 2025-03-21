import Typography from "../../components/Typography";
import * as S from "./styles";
import { colors } from "../../styles/designSystem";

const HomePage = () => {
  const products = ["NOVIDADES", "COLEÇÃO", "JOIAS", "SALE"];

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
              <S.MenuItemsContainer>
                <Typography key={index} size={"15px"} color={colors.black[300]}>
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
      <S.ContentBg />      
    </>
  );
};

export default HomePage;
