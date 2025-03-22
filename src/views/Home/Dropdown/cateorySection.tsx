import * as S from './styles';
import Typography from "../../../components/Typography";
import { colors } from "../../../styles/designSystem";

interface CategorySectionProps {
  title: string;
  data: { [key: string]: string[] };
  onClose: () => void;
  hasDivider?: boolean;
}

const CategorySection = ({
  title,
  data,
  onClose,
  hasDivider,
}: CategorySectionProps) => (
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
            <S.Item key={index} onClick={onClose}>
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

export default CategorySection;