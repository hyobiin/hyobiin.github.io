'use client';
import { useEffect, useState } from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import Tab from "./components/Tab";
import { TabItem, Category } from "@/types";
import { posts } from "@/data";
import styles from "./page.module.css";
import { Button } from "./components/Buttons";
import { Toggle } from "./components/Toggle";
import Checkbox from "./components/CheckboxList";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Category>('전체');
  const [selectedIds, setSelectedIds] = useState<number[]>([]); // 선택된 게시물 id 관리
  const [searchTerm, setSearchTerm] = useState('');
  const [isOn, setIsOn] = useState(false);

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

  const currnetPostIds = filteredPosts.map(post => post.id); // 활성 탭 게시물의 id ex(전체탭: [1,2,3])

  const isAllSelected = currnetPostIds.every(id => selectedIds.includes(id)); // 전체선택 여부 // 배열 안의 모든 요소가 조건을 만족하는지 확인

  const toggleSelectAll = () => { // 전체설택 토글
    if(isAllSelected){
      setSelectedIds(prev => prev.filter(id => !currnetPostIds.includes(id)));
    }else{
      setSelectedIds(prev => [...new Set([...prev, ...currnetPostIds])]);
    }
  }

  const displayPosts = (filteredPostsSearch.length > 0 && searchTerm)
    ? filteredPostsSearch
    : filteredPosts;

  useEffect(() => {
    console.log('consolelog=======================');
    console.log(currnetPostIds);
  }, [currnetPostIds]);

  return (
    <main>
      <Header onSearch={setSearchTerm}/>
      <Toggle
        isOn={isOn}
        isOnFalse='체크 옵션 나옴'
        isOnTrue='체크 옵션 숨김'
        onToggle={() => setIsOn(prev => !prev)}
      />
      {isOn && (
        <Checkbox
        options={['option', 'option2']}
      />
      )}
      <div className={styles.btn_box}>
        <Button href="/write" text={"게시물 작성"}></Button>
      </div>
      <section>
        {/* 탭 */}
        <Tab
          tabList={tabList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <label>
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={toggleSelectAll}
          />
          {selectedTab} 전체선택
        </label>

        {/* 하단 코드 리팩토링 */}
        {displayPosts.map((item) => (
          <PostCard
            key={item.id}
            post={item}
            isSelected={selectedIds.includes(item.id)}
            onToggle={() => {
              if(selectedIds.includes(item.id)){
                setSelectedIds(prev => prev.filter(id => id !== item.id));
              }else{
                setSelectedIds(prev => [...prev, item.id]);
              }
            }}
          />
        ))}
        {/* {filteredPostsSearch.length > 0 && searchTerm
          ? (
            filteredPostsSearch.map((item) => (
              <PostCard
                key={item.id}
                post={item}
                isSelected={selectedIds.includes(item.id)}
                onToggle={() => {
                  if(selectedIds.includes(item.id)){
                    setSelectedIds(prev => prev.filter(id => id !== item.id));
                  }else{
                    setSelectedIds(prev => [...prev, item.id]);
                  }
                }}
              />
            ))
          ) : (
            filteredPosts.map((item) => (
              <PostCard
                key={item.id}
                post={item}
                isSelected={selectedIds.includes(item.id)}
                onToggle={() => {
                  if(selectedIds.includes(item.id)){
                    setSelectedIds(prev => prev.filter(id => id !== item.id));
                  }else{
                    setSelectedIds(prev => [...prev, item.id]);
                  }
                }}
              />
            ))
          )
        } */}
      </section>
    </main>
  );
}
