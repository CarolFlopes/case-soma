import * as S from './styles';

const Couro = () => {
  return (
    <S.DropdownMenu style={{ backgroundColor: '#f0e0d0', color: '#333' }}>
      <h2>Bem-vindo à página de Couro</h2>
      <p>Explore nossa coleção exclusiva de produtos em couro.</p>
      <ul>
        <li>Jaquetas de couro</li>
        <li>Bolsas de couro</li>
        <li>Acessórios em couro</li>
      </ul>
    </S.DropdownMenu>
  );
};

export default Couro;