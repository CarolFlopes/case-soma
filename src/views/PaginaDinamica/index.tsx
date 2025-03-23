import { useParams } from 'react-router-dom';
import CategoryPage from '../../components/CategoryPages';

const categoryData = {
  VESTIDO: {
    cluster: 'VESTIDO',
    url:'vestido',
    image: '/images/couro.png',
    title: 'VESTIDO',
    description:
      'Os vestidos da ANIMALE são a essência da elegância e da modernidade. Com cortes impecáveis, tecidos luxuosos e detalhes únicos, nossos vestidos são perfeitos para transformar qualquer ocasião em um momento especial. Descubra peças que combinam conforto e sofisticação para destacar sua personalidade.',
  },
  'TOP&BLUSA': {
    cluster: 'BLUSA',
    url:'top&blusa',
    image: '/images/couro.png',
    title: 'TOP/BLUSA',
    description:
      'As blusas e tops da ANIMALE são ideais para looks versáteis e cheios de estilo. Com designs que variam do clássico ao contemporâneo, nossas peças são confeccionadas com tecidos de alta qualidade e detalhes que elevam qualquer produção. Perfeitas para o dia a dia ou ocasiões especiais.',
  },
  CALÇA: {
    cluster: 'CALÇA',
    url:'calca',
    image: '/images/couro.png',
    title: 'CALÇA',
    description:
      'As calças da ANIMALE são sinônimo de sofisticação e conforto. Com modelos que vão do slim ao wide leg, nossas peças são pensadas para valorizar sua silhueta e oferecer um caimento impecável. Ideal para looks modernos e cheios de personalidade.',
  },
  CAMISA: {
    cluster: 'CAMISA',
    url:'camisa',
    image: '/images/couro.png',
    title: 'CAMISA',
    description:
      'As camisas da ANIMALE combinam tradição e modernidade. Com cortes precisos, tecidos premium e detalhes refinados, nossas peças são perfeitas para looks elegantes e despojados. Descubra a versatilidade de uma camisa que vai além do básico.',
  },
  JAQUETA: {
    cluster: 'JAQUETA',
    url:'jaqueta',
    image: '/images/couro.png',
    title: 'JAQUETA',
    description:
      'As jaquetas da ANIMALE são peças-chave para um guarda-roupa sofisticado e funcional. Com designs que variam do clássico ao contemporâneo, nossas jaquetas são confeccionadas com materiais de alta qualidade e detalhes que fazem a diferença. Perfeitas para completar qualquer look.',
  },
  MACACÃO: {
    cluster: 'MACACÃO',
    url:'macacao',
    image: '/images/couro.png',
    title: 'MACACÃO',
    description:
      'Os macacões da ANIMALE são a combinação perfeita entre estilo e praticidade. Com cortes modernos e tecidos de alta qualidade, nossas peças são ideais para quem busca um visual impactante sem abrir mão do conforto. Descubra a versatilidade de um macacão que vai do dia à noite.',
  },
  SAIA: {
    cluster: 'SAIA',
    url:'saia',
    image: '/images/couro.png',
    title: 'SAIA',
    description:
      'As saias da ANIMALE são peças que traduzem feminilidade e sofisticação. Com modelos que variam do midi ao longo, nossas saias são confeccionadas com tecidos premium e detalhes que elevam qualquer produção. Perfeitas para looks despojados ou formais.',
  },
  SHORT: {
    cluster: 'SHORT',
    url:'short',
    image: '/images/couro.png',
    title: 'SHORT',
    description:
      'Os shorts da ANIMALE são a escolha perfeita para looks descontraídos e cheios de estilo. Com cortes modernos e tecidos de alta qualidade, nossas peças são ideais para o verão ou para compor produções despojadas. Conforto e elegância em um só lugar.',
  },
  BLAZER: {
    cluster: 'BLAZER',
    url:'blazer',
    image: '/images/couro.png',
    title: 'BLAZER',
    description:
      'Os blazers da ANIMALE são peças essenciais para um guarda-roupa sofisticado. Com cortes impecáveis e tecidos premium, nossos blazers são perfeitos para looks que exigem elegância e modernidade. Ideal para o escritório ou ocasiões especiais.',
  },
  COLETE: {
    cluster: 'COLETE',
    url:'colete',
    image: '/images/couro.png',
    title: 'COLETE',
    description:
      'Os coletes da ANIMALE são peças versáteis e cheias de estilo. Com designs que variam do clássico ao contemporâneo, nossos coletes são perfeitos para layering e para adicionar um toque de sofisticação a qualquer look. Descubra a praticidade e o charme de um colete ANIMALE.',
  },
  'VER TUDO': {
    cluster: 'TODOS',
    url:'tudo',
    image: '/images/couro.png',
    title: 'VER TUDO',
    description:
      'Explore a coleção completa da ANIMALE e descubra peças que combinam sofisticação, qualidade e design exclusivo. De vestidos a blazers, cada peça foi pensada para valorizar sua personalidade e elevar seu estilo. Renove seu guarda-roupa com as últimas tendências da moda.',
  },
  COURO: {
    cluster: 'COURO',
    url:'couro',
    image: '/images/couro.png',
    title: 'COURO',
    description:
      'As peças de couro da ANIMALE são irreverentes e se destacam nas produções. Os shapes assimétricos, detalhes metálicos e as tonalidades mais escuras e vibrantes imprimem sofisticação na hora de compor um look. Renove seu closet para as próximas estações com as roupas de couro femininas da nossa coleção.',
  },
  SEDA: {
    cluster: 'SEDA',
    url:'seda',
    image: '/images/couro.png',
    title: 'SEDA',
    description:
      'As peças de seda da ANIMALE trazem leveza e sofisticação para qualquer look. Com um toque suave e caimento impecável, nossas criações são perfeitas para quem busca elegância e conforto em um só lugar.',
  },
  TRICOT: {
    cluster: 'TRICOT',
    url:'tricot',
    image: '/images/couro.png',
    title: 'TRICOT',
    description:
      'Os tricots da ANIMALE são sinônimo de conforto e estilo. Com texturas envolventes e modelagens modernas, nossas peças garantem um toque sofisticado e aconchegante ao seu visual.',
  },
  'CLUB/NOITE': {
    cluster: 'CLUB',
    url:'club&noite',
    image: '/images/couro.png',
    title: 'CLUB/NOITE',
    description:
      'A coleção Club/Noite da ANIMALE foi criada para brilhar. Com tecidos sofisticados, brilhos e cortes modernos, nossas peças garantem presença e glamour para noites inesquecíveis.',
  },
  JEANS: {
    cluster: 'JEANS',
    url:'jeans',
    image: '/images/couro.png',
    title: 'JEANS',
    description:
      'Os jeans da ANIMALE são a união entre conforto e estilo. Com lavagens exclusivas e cortes que valorizam a silhueta, nossas peças são essenciais para looks versáteis e atemporais.',
  },
  MALHA: {
    cluster: 'MALHA',
    url:'malha',
    image: '/images/couro.png',
    title: 'MALHA',
    description:
      'As malhas da ANIMALE combinam suavidade e versatilidade. Com cortes confortáveis e tecidos de qualidade, nossas peças são ideais para o dia a dia sem perder a sofisticação.',
  },
  ALFAIATARIA: {
    cluster: 'ALFAIATARIA',
    url:'alfaiataria',
    image: '/images/couro.png',
    title: 'ALFAIATARIA',
    description:
      'A alfaiataria da ANIMALE é moderna e elegante. Com cortes estruturados e tecidos de alta qualidade, nossas peças oferecem sofisticação para todas as ocasiões.',
  },
};

const findCategoryByUrl = (url: string) => {
  return Object.values(categoryData).find((category) => category.url === url);
};

const CategoryDynamicPage = () => {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return <div>Categoria não encontrada na URL</div>;
  }

  const categoryInfo = findCategoryByUrl(category);

  if (!categoryInfo) {
    return <div>Categoria "{category}" não encontrada</div>;
  }

  const { cluster, image, title, description } = categoryInfo;

  return (
    <CategoryPage
      category={cluster}
      cluster={cluster}
      image={image}
      title={title}
      description={description}
    />
  );
};

export default CategoryDynamicPage;