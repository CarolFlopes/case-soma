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
  filterByCategoryAndCluster: (category: string, cluster: string, size?: string) => void;
  sortByPrice: (order: "asc" | "desc") => void;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });

    try {
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
          images: items.flatMap((item: any) => item.images?.map((img: any) => img.imageUrl) || []),
          Installments: commertialOffers.flatMap((offer: any) => offer.Installments || []),
          Price: commertialOffers[0]?.Price || 0,
        };
      });

      set({ products: processedData, filteredProducts: processedData, loading: false });
    } catch (error: any) {
      console.error('Erro ao buscar produtos:', error);
      set({ error: error.message || 'Failed to fetch products', loading: false });
    }
  },

  filterByCategoryAndCluster: (category: string, cluster: string, size?: string) => {
    const { products } = get();

    const categoryFiltered = products.filter((product) =>
      product.categories.some((cat) => cat.toLowerCase().includes(category.toLowerCase()))
    );

    const clusterFiltered = products.filter((product) =>
      Object.values(product.productClusters).some((value) =>
        value.toLowerCase().includes(cluster.toLowerCase())
      ) &&
      !product.categories.some((cat) => cat.toLowerCase().includes(category.toLowerCase()))
    );

    let combinedFiltered = Array.from(new Set([...categoryFiltered, ...clusterFiltered]));

    if (size) {
      combinedFiltered = combinedFiltered.filter((product) =>
        product.Tamanho.some((t) => t.includes(size))
      );
    }

    set({ filteredProducts: combinedFiltered });
  },

  sortByPrice: (order: "asc" | "desc") => {
    const { filteredProducts } = get();
    const sortedProducts = [...filteredProducts].sort((a, b) => 
      order === "asc" ? a.Price - b.Price : b.Price - a.Price
    );
    set({ filteredProducts: sortedProducts });
  },
}));