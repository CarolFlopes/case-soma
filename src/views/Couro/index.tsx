import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

const CouroPage = () => { 
  return (
    <>
      <Header />   
      <img src="/images/couro.png" alt="Couro" width="100%" height="525px" />
      <ProductList
      category="COURO"
      cluster="couro" 
    />
    </>
  );
};

export default CouroPage;
