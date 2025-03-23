import { create } from "zustand";
import productsData from '../data/products.json';

interface Installment {
  Value: number;
  NumberOfInstallments: number;
  PaymentSystemName: string;
}

interface Product {
  productName: string;
  productTitle: string;
  productClusters: Record<string, string>;
  categories: string[];
  SALE: string[];
  Tamanho: string[];
  images: string[];
  Installments: Installment[];
  Price: number;
}

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  filterByCategoryAndCluster: (category: string, cluster: string) => void;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });

    try {
      console.log('Iniciando fetchProducts...'); // Log inicial

      // Log dos dados brutos do JSON
      console.log('Dados brutos do JSON:', productsData);

      const processedData: Product[] = (productsData as unknown as Product[]).map((product: any) => {
        const items = product.items || [];
        const sellers = items.flatMap((item: any) => item.sellers || []);
        const commertialOffers = sellers.flatMap((seller: any) => seller.commertialOffer || []);

        return {
          productName: product.productName,
          productTitle: product.productTitle,
          productClusters: product.productClusters || {},
          categories: product.categories || [],
          SALE: product.SALE || [],
          Tamanho: items.flatMap((item: any) => item.Tamanho || []),
          images: items.flatMap((item: any) =>
            item.images?.map((img: any) => img.imageUrl) || []
          ),
          Installments: commertialOffers.flatMap((offer: any) => offer.Installments || []),
          Price: commertialOffers[0]?.Price || 0,
        };
      });

      // Log dos produtos processados
      console.log('Produtos processados:', processedData);

      set({ products: processedData, filteredProducts: processedData, loading: false });

      // Log do estado após o fetch
      console.log('Estado após fetchProducts:', {
        products: processedData,
        filteredProducts: processedData,
        loading: false,
        error: null,
      });
    } catch (error: any) {
      console.error('Erro ao buscar produtos:', error);
      set({ error: error.message || 'Failed to fetch products', loading: false });
    }
  },

  filterByCategoryAndCluster: (category: string, cluster: string) => {
    console.log('Iniciando filterByCategoryAndCluster...'); // Log inicial
    console.log('Categoria recebida:', category);
    console.log('Cluster recebido:', cluster);
  
    const { products } = get();
  
    // Log dos produtos antes de filtrar
    console.log('Produtos antes de filtrar:', products);
  
    // Filtro pela categoria
    const categoryFiltered = products.filter((product) =>
      product.categories.includes(category)
    );
  
    // Log dos produtos filtrados por categoria
    console.log('Produtos filtrados por categoria:', categoryFiltered);
  
    // Filtro pelo cluster (verifica se o cluster contém a string desejada)
    const clusterFiltered = products.filter((product) =>
      Object.values(product.productClusters).some((value) =>
        value.toLowerCase().includes(cluster.toLowerCase())
      ) &&
      !product.categories.includes(category) // Só entra aqui se não estiver na categoria
    );
  
    // Log dos produtos filtrados por cluster
    console.log('Produtos filtrados por cluster:', clusterFiltered);
  
    // Combina os resultados e remove duplicatas
    const combinedFiltered = Array.from(
      new Set([...categoryFiltered, ...clusterFiltered])
    );
  
    // Log dos produtos combinados e filtrados
    console.log('Produtos combinados e filtrados:', combinedFiltered);
  
    set({ filteredProducts: combinedFiltered });
  
    // Log do estado após o filtro
    console.log('Estado após filterByCategoryAndCluster:', {
      filteredProducts: combinedFiltered,
    });
  },
}));