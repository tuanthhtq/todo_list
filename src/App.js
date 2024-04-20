import './App.css';
import {useState} from "react";
import JobAdd from "./components/JobAdd";
import JobsList from "./components/JobsList";



function App() {
    let [jobList, setJobList] = useState([]);
    const onAddJob = (e, h, m, name)=>{
        e.preventDefault();
        let nextList = [
            ...jobList,
            {
                id: jobList.length,
                h: h,
                m: m,
                name: name,
                isRemoved: false,
                isCompleted: false
            }
        ]
        let sorted = nextList.sort((a, b) =>{
            if(a.h === b.h){
                return a.m - b.m
            }else{
                return a.h - b.h
            }
        })
        setJobList(sorted)
    }

    const update = (id, edited) => {
        let nextList = jobList.map((item) => {
            if(item.id === id){
                return {
                    ...item,
                    name: edited
                };
            }else{
                return item;
            }
        })
        setJobList(nextList)
    }

    const del = (id) => {
        let nextList = jobList.filter(e =>  e.id !== id)
        setJobList(nextList)
    }

    const complete = (id) => {
        let nextList = jobList.map(e => {
            if(e.id === id){
                return {
                    ...e,
                    isCompleted: !e.isCompleted
                }
            }else{
                return e;
            }
        })
        setJobList(nextList)
    }
    return (
        <div className={"content"}>
            <h1>TODO LIST</h1>
            <JobAdd
                onAddJob={onAddJob}
            />
            <h3>Jobs list</h3>
            <JobsList
                jobsList={jobList}
                update={update}
                del={del}
                completed={complete}
            />
        </div>
    );
}

export default App;
