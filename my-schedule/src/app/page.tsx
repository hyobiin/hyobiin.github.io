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
import UserCrud from "./components/Test";
import { DefaultPopup } from "./components/Popup";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Category>('전체');
  const [selectedIds, setSelectedIds] = useState<number[]>([]); // 선택된 게시물 id 관리
  const [searchTerm, setSearchTerm] = useState('');
  const [isOn, setIsOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 팝업

  // 탭 기준으로 먼저 필터
  const filteredPosts = selectedTab === '전체'
    ? posts
    : posts.filter(post => post.category === selectedTab);

  // 검색어가 있을 때만 탭 기준 결과에서 검색 (빈 검색어일 땐 빈 배열)
  const q = searchTerm.trim().toLowerCase();
  const filteredPostsSearch = q
    ? filteredPosts.filter(post =>
      post.title.toLowerCase().includes(q) ||
      (post.content && post.content.toLowerCase().includes(q)) ||
      post.username.toLowerCase().includes(q)
    )
    : [];

  const displayPosts = q ? filteredPostsSearch : filteredPosts;

  const currnetPostIds = filteredPosts.map(post => post.id); // 활성 탭 게시물의 id ex(전체탭: [1,2,3])
  const isAllSelected = currnetPostIds.length > 0 && currnetPostIds.every(id => selectedIds.includes(id)); // 전체선택 여부 // 배열 안의 모든 요소가 조건을 만족하는지 확인

  const toggleSelectAll = () => { // 전체설택 토글
    if(isAllSelected){
      setSelectedIds(prev => prev.filter(id => !currnetPostIds.includes(id)));
    }else{
      setSelectedIds(prev => [...new Set([...prev, ...currnetPostIds])]);
    }
  }

  const tabList: TabItem[] = [
    { id: 0, name: '전체' },
    { id: 1, name: '인기' },
    { id: 2, name: '최신' },
    { id: 3, name: '카테고리' },
    { id: 4, name: '붕' },
  ];

  useEffect(() => {
    console.log('consolelog=======================');
    console.log(currnetPostIds);
  }, [currnetPostIds]);

  return (
    <main>
      <Header onSearch={setSearchTerm}/>
      {/* <UserCrud /> */}
      {/* 필터링 */}
      <Toggle
        isOn={isOn}
        isOnFalse='체크 옵션 나옴'
        isOnTrue='체크 옵션 숨김'
        onToggle={() => setIsOn(prev => !prev)}
      />
      {isOn && (
        <Checkbox
        options={['전체', '이름', '작성자', '날짜']}
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

        {/* 검색 중이고 검색 결과가 없으면 메시지 보여주기 */}
        {displayPosts.length > 0 ? (
          displayPosts.map((item) => (
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
        ) : q ? (
          <p className={styles.no_data}>검색 결과 없어요~!</p>
        ) : (
          <p className={styles.no_data}>게시물이 없습니다.</p>
        )}

        {/* 하단 코드 리팩토링 */}
        {/* {displayPosts.map((item) => (
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
        ))} */}
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
