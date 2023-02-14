import {useState} from "react";

function TabControl ({posts}) {

    const [tabState, setTabState] = useState(posts[0])

    return (
        <div className=" w-[400px] mx-auto">
            <ul className="flex justify-between gap-4 text-lg bg-blue-400">
                {posts.map(tab =>
                    <li
                        className="border-black  border-2 px-4 py-2 w-[100px]"
                        onClick={() => setTabState(tab)}
                        key={tab.id}
                    >
                        <p>{tab.title}</p>
                    </li>
                )}
            </ul>
            <img
                className="border-black border mt-1"
                src={tabState.img}
                alt={tabState.title}/>
        </div>
    );
}

export default TabControl