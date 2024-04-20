import {useState} from "react";


export default function JobAdd({jobsList, onAddJob}){
    let hours = [];
    let mins = [];
    let [hour, setHour] = useState(0)
    let [min, setMin] = useState(0)
    let [name, setName] = useState("")


    for (let i = 0; i < 24; i++) {
        hours.push(i)
    }

    for (let i = 0; i < 60; i += 5) {
        mins.push(i)
    }

    const onAdd = (e) => {
        onAddJob(e, hour, min, name)
    }

    return(
        <div className={"job-add"}>
            <form id={"add-form"} onSubmit={onAdd}>
                <select
                    name="hours"
                    onChange={e => {
                        setHour(parseInt(e.target.value))
                    }}
                >
                    {hours.map(h => {
                        return (
                            <option key={h} value={h}>{h}</option>
                        );
                    })}
                </select>
                <span> : </span>
                <select
                    name="minutes"
                    onChange={e => {
                        setMin(parseInt(e.target.value))
                    }}
                >
                    {mins.map(m => {
                        return (
                            <option key={m} value={m}>{m}</option>
                        );
                    })}
                </select>
                <span> | </span>
                <input
                    type="text"
                    name={"jobName"}
                    placeholder={"job title"}
                    onChange={e => {
                        setName(e.target.value)
                    }}
                />

                <input type="submit" name={"addJob"} value={"Add"} />
            </form>
        </div>
    )
}