import Typography from '../../components/Typography';
import * as S from './styles';
import {colors} from '../../styles/designSystem';

const HomePage = () => {
  return (
    <> 
      <S.Content>
        <S.BrandContainer>       
          <img src="/images/logo.svg" alt="Logo" width={124} height={'auto'}/>     
        </S.BrandContainer>
      </S.Content>
  
     
    </>   
  );
}

export default HomePage;
