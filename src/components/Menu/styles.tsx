import styled from "styled-components";

interface PropsIcon {
  isLeft?: boolean;
}

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 34px;
  margin-top: 35px;
`;

export const MenuContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
  padding: 10px;

  &:hover {
    cursor: pointer;
    
    p {
      font-weight: bold;
    }

    border-bottom: 1px solid black;
  }
`;

export const IconsContainer = styled.div<PropsIcon>`
  display: flex;
  align-items: center;
  position: absolute;
  ${({ isLeft }) => (isLeft ? "left: 25px;" : "right: 40px;")}
  margin-top: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const ContentBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
  background-image: url("/images/plano-de-fundo.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

