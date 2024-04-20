import Job from "./Job";


export default function JobsList({jobsList, update, del, completed}){
    //populate jobs
    let list = jobsList.map(j => {
        return (
            <Job key={j.id} job={j} update={update} del={del} completed={completed}/>
        )
    })

    return(
        <table>
            <thead>
                <tr>
                    <th>Check</th>
                    <th>HH/MM</th>
                    <th>Title</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
            {list}
            </tbody>
        </table>
    )
}

