 export interface Recipe {
    _id?: number;
    title: string;
    description: string;
    image: string;
    difficulty: number;
    published: boolean;
    date?: string;
    createdAt?: string;
  }
