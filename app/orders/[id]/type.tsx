export type Status = {
    id: string;
    name: string;
  };
  
  export type Product = {
    id: string;
    name: string;
    description: string;
    stock: number;
    price: string;
    weight: string;
  };
  
  export type ProductOrder = {
    id: string;
    quantity: number;
    product: Product;
  };
  
  export type Order = {
    id: string;
    approvalDate: string | null; // null is possible
    username: string;
    email: string;
    phone: string;
    productOrders: ProductOrder[];
    status: Status;
  };