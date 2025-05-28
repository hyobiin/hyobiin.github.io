'use client';
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import Tab from "./components/Tab";
import { Post, TabItem } from "@/types";

const tabNames = ['전체', '인기', '최신', '카테고리'] as const;
type TabType = typeof tabNames[number];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<TabType>('전체');

  const posts: Post[] = [
    {
      id: 1,
      title: '인기 포스트',
      description: '1번 포스트 설명',
      date: '2025-05-28',
      username: 'user1',
      category: '인기'
    },
    {
      id: 2,
      title: '최신 포스트',
      description: '2번 포스트 설명',
      date: '2025-05-30',
      username: 'user2',
      category: '최신'
    },
    {
      id: 3,
      title: '카테고리 포스트',
      description: '3번 포스트 설명',
      date: '2025-05-30',
      username: 'user3',
      category: '카테고리'
    },
  ];

  const tabList: TabItem[] = [
    { id: 0, name: '전체' },
    { id: 1, name: '인기' },
    { id: 2, name: '최신' },
    { id: 3, name: '카테고리' },
  ];

  const filteredPosts = selectedTab === '전체'
    ? posts
    : posts.filter(post => post.category === selectedTab);

  return (
    <main>
      <Header />
      <section>
        {/* 탭 */}
        <Tab
          tabList={tabList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {filteredPosts.map((item) => (
          <PostCard key={item.id} post={item} />
        ))}
      </section>
    </main>
  );
}
