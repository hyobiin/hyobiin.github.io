import { Post } from "./types";

export const posts: Post[] = [
    {
        id: 1,
        title: '인기 포스트',
        description: '1번 포스트 설명',
        date: '2025-05-28',
        username: 'user1',
        category: '인기',
        content: '인기 포스트 내용이 나옵니다. 여기에 포스트의 상세 내용이 들어갑니다. 이 포스트는 많은 사람들이 읽고 좋아하는 내용입니다.',
        imgUrl: 'https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg',
    },
    {
        id: 2,
        title: '최신 포스트',
        description: '2번 포스트 설명',
        date: '2025-05-30',
        username: 'user2',
        category: '최신',
        content: '최신 포스트 내용이 나옵니다. 여기에 포스트의 상세 내용이 들어갑니다. 이 포스트는 최근에 작성된 내용입니다.',
        imgUrl: 'https://shopping-phinf.pstatic.net/main_4731061/47310617618.20240426090954.jpg',
    },
    {
        id: 3,
        title: '카테고리 포스트',
        description: '3번 포스트 설명',
        date: '2025-09-12',
        username: 'user3',
        category: '카테고리',
        content: '카테고리 포스트 내용이 나옵니다. 여기에 포스트의 상세 내용이 들어갑니다. 이 포스트는 특정 카테고리에 속하는 내용입니다.',
        imgUrl: 'https://shopping-phinf.pstatic.net/main_3247334/32473346832.20221227204218.jpg',
    },
];