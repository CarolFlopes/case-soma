import { create } from "zustand";

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
  loading: boolean;
  error: string | null;
  fetchProducts: (jsonUrl: string) => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async (jsonUrl: string) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) throw new Error("Erro ao carregar os produtos");
      
      const data = await response.json();
      
      const processedData: Product[] = data.map((product: any) => ({
        productName: product.productName,
        productTitle: product.productTitle,
        productClusters: product.productClusters || {},
        categories: product.categories || [],
        SALE: product.SALE || [],
        Tamanho: product.items?.flatMap((item: any) => item.Tamanho) || [],
        images: product.items?.flatMap((item: any) =>
          item.images?.map((img: any) => img.imageUrl)
        ) || [],
        Installments: product.items?.flatMap((item: any) =>
          item.sellers?.flatMap((seller: any) =>
            seller.commertialOffer?.Installments || []
          )
        ) || [],
        Price: product.items?.flatMap((item: any) =>
          item.sellers?.map((seller: any) => seller.commertialOffer?.Price)
        )[0] || 0, 
      }));

      set({ products: processedData, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
