export interface FoodProps {
  name: string;
  cost: number;
  img: string;
  onAdd: () => void;
}

export interface Order {
  name: string;
  count: number;
}

export interface OrderContentProps extends Order {
  func: () => number;
  onDelete: (name: string) => void;
}
