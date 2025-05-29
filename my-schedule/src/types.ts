export type Post = {
    id: number;
    title: string;
    description: string;
    date: string | number;
    username: string;
    category: Category | string;
    content?: string;
    imgUrl?: string;
}

export type Category = '전체' | '인기' | '최신' | '카테고리';

export type TabItem = {
    id: number;
    name: Category | string;
}

export type HeaderProps = {
    onSearch: (searchTerm: string) => void;
};