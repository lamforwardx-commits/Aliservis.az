export type MenuItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  chefPick?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
};
