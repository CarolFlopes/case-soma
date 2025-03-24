import * as S from './styles';
import Typography from "../../components/Typography";
import { colors } from "../../styles/designSystem";
import { useNavigate } from 'react-router-dom';

interface CategorySectionProps {
  title: string;
  data: { [key: string]: string[] };
  onClose: () => void;
  hasDivider?: boolean;
}

const categoryRoutes = {
  'VESTIDO': '/vestido',
  'TOP/BLUSA': '/top&blusa',
  'CALÇA': '/calca',
  'CAMISA': '/camisa',
  'JAQUETA': '/jaqueta',
  'MACACÃO': '/macacao',
  'SAIA': '/saia',
  'SHORT': '/short',
  'BLAZER': '/blazer',
  'COLETE': '/colete',
  'VER TUDO >': '/tudo',
  'COURO': '/couro',
  'SEDA': '/seda',
  'TRICOT': '/tricot',
  'CLUB/NOITE': '/club&noite',
  'JEANS': '/jeans',
  'MALHA': '/malha',
  'ALFAIATARIA': '/alfaiataria',
  'BOLSAS': '/bolsas',
  'CALÇADOS': '/calcados',
  'CINTO': '/cinto',
  'COLAR': '/colar',
  'ANEL': '/anel',
  'BRINCO': '/brinco',
  'PILSEIRA/BRACELETE': '/pulseira-bracelete',
  'ECHARPE/LENÇO': '/echarpe-lenco',
  'LINGERIE': '/lingerie',
  'UNDERWEAR': '/underwear',
};

const CategorySection = ({
  title,
  data,
  onClose,
  hasDivider,
}: CategorySectionProps) => {
  const navigate = useNavigate();

  const handleItemClick = (item: string) => {
    const route = categoryRoutes[item as keyof typeof categoryRoutes]; // Obtém a rota correspondente ao item
    if (route) {
      navigate(route); // Navega para a rota
    }
    onClose(); // Fecha o dropdown
  };

  return (
    <S.MainContainer>
      <S.Title>
        <Typography
          size={'12px'}
          fontWeight={'700'}
          color={colors.black[300]}
          onClick={onClose}
        >
          {title}
        </Typography>
      </S.Title>
      <S.ColumnsContainer>
        {Object.entries(data).map(([key, items], index) => (
          <S.Content
            key={key}
            style={
              hasDivider && index === 1 
                ? {
                    paddingRight: '56px',
                    borderRight: `1px solid ${colors.gray[100]}`,
                  }
                : {}
            }
          >
            {items.map((item, index) => (
              <S.Item key={index} onClick={() => handleItemClick(item)}>
                <Typography size={'11px'} color={colors.black[300]}>
                  {item}
                </Typography>
              </S.Item>
            ))}
          </S.Content>
        ))}
      </S.ColumnsContainer>
    </S.MainContainer>
  );
};

export default CategorySection;