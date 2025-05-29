'use client';
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import Tab from "./components/Tab";
import { TabItem, Category } from "@/types";
import { posts } from "@/data";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Category>('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPostsSearch = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <Header onSearch={setSearchTerm}/>
      <section>
        {/* 탭 */}
        <Tab
          tabList={tabList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {filteredPostsSearch.length > 0 && searchTerm
          ? (
            filteredPostsSearch.map((item) => (
              <PostCard key={item.id} post={item} />
            ))
          ) : (
            filteredPosts.map((item) => (
              <PostCard key={item.id} post={item} />
            ))
          )
        }
      </section>
    </main>
  );
}
