 export interface IProducts {
  id: number;
  title: string;
  price: number;
  category: string;
  descriptions: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  }
 }
