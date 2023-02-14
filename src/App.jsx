import './App.css';
import MyForm from "./components/MyForm";
import Posts from "./components/Posts";
import TabControl from "./components/TabControl";
import Chart from "./components/Chart";
import {CChart} from "@coreui/react-chartjs";
import {useState} from "react";
import Popup from "./components/Popup";

function App () {

    const [showModal, setShowModal] = useState(false)

    const posts = [
        {
            id: 1,
            title: 'Russia',
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png'
        },
        {
            id: 2,
            title: 'USA',
            img: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
        },
        {
            id: 3,
            title: 'UK',
            img: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg'
        }
    ]

    return (
        <div className="App w-[1000px] mx-auto mt-2 mb-4">
            <button className="bg-blue-500 text-white p-2 mb-2" onClick={() => setShowModal(prevState => !prevState)}>{showModal ? 'Close modal': 'Open modal'}</button>
            {showModal && <Popup/>}
            <MyForm/>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut dolores esse
                quisquam tempora velit.</p>
            <img
                className="w-1/2 mx-auto mb-2"
                src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
                alt="beach"
            />
            <Posts posts={posts}/>
            <TabControl posts={posts}/>
            <CChart
                type="line"
                data={{
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "First dataset",
                            backgroundColor: "rgba(220, 220, 220, 0.2)",
                            borderColor: "rgba(220, 220, 220, 1)",
                            pointBackgroundColor: "rgba(220, 220, 220, 1)",
                            pointBorderColor: "#fff",
                            data: [40, 60, 12, 39, 10, 40, 39, 80, 40]
                        },
                        {
                            label: "Second dataset",
                            backgroundColor: "rgba(151, 187, 205, 0.2)",
                            borderColor: "rgba(151, 187, 205, 1)",
                            pointBackgroundColor: "rgba(151, 187, 205, 1)",
                            pointBorderColor: "#fff",
                            data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                        },
                    ],
                }}
            />
        </div>
    );
}

export default App;
