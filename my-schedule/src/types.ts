export type Post = {
    id: number;
    title: string;
    description: string;
    date: string | number;
    username: string | number;
    category: Category | string;
}

export type Category = '전체' | '인기' | '최신' | '카테고리';

export type TabItem = {
    id: number;
    name: Category | string;
}