import { Category } from "@/types";

type Tab = { id: number; name: string; };
type TabProps = {
    tabList: Tab[];
    selectedTab: string;
    setSelectedTab: (tab: Category) => void;
};

export default function Tab({ tabList, selectedTab, setSelectedTab }: TabProps){
    return(
        <div className="tab_box">
        {tabList.map((item) => (
            <button
                key={item.id}
                type='button'
                className={selectedTab === item.name ? 'active' : ''}
                onClick={() => setSelectedTab(item.name as Category)}
            >
                {item.name}
            </button>
        ))}
        </div>
    )
};