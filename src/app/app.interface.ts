export interface RootInterface {
    Id: string;
    productName: string;
    quantity: number;
    isActive: boolean;
}

export interface OrderInterface {
  orderId:string,
  customerId: string;
  productId: number;
  quantity: number;
  isCancel: boolean;
}