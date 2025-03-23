import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import Typography from '../../components/Typography';
import * as S from './styles'

interface CategoryPageProps {
  category: string; 
  cluster: string; 
  image: string;
  title: string; 
  description: string; 
}

const CategoryPage = ({ category, cluster, image, title, description }: CategoryPageProps) => {
  return (
    <>
      <Header />
      <S.ImageContainer>
        <img src={image} alt={category} width="100%" height="525px" />
        <S.TextContainer>
          <S.Title>
            <Typography size={'30px'}>
              {title}
            </Typography>
          </S.Title>
          <S.Description>
            <Typography>
              {description}
            </Typography>
          </S.Description>
        </S.TextContainer>
      </S.ImageContainer>
      <ProductList category={category} cluster={cluster} />
    </>
  );
};

export default CategoryPage;