type Tab = { id: number; name: string; };
type TabProps = {
    tabList: Tab[];
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
};

export default function Tab({ tabList, selectedTab, setSelectedTab }: TabProps){
    return(
        <div className="tab_box">
        {tabList.map((item) => (
            <button
                key={item.id}
                type='button'
                className={selectedTab === item.name ? 'active' : ''}
                onClick={() => setSelectedTab(item.name)}
            >
                {item.name}
            </button>
        ))}
        </div>
    )
};