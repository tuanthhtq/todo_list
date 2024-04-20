import {useState} from "react";

//job data
export default function Job({job, update, del, completed}){

    const [isUpdating, setIsUpdating] = useState(false);
    const [edited, setEdited] = useState(job.name)
    const [ok, setOk] = useState(job.isCompleted)

    //change name field to input
    const onStartEdit = () =>{
        setIsUpdating(true)
    }

    //update state of name
    const onEditing = (e) =>{
        setEdited(e.target.value)
    }

    //commit update
    const onConfirmEdit = () => {
        setIsUpdating(false);
        update(job.id,  edited)
    }

    //checkbox for job completion
    const onCheckComplete = () =>{
        setOk(true);
        completed(job.id)
    }
    return (
        <tr id={job.id} className={job.isCompleted ? "completed" : ""}>
            <td>
                <input type={"checkbox"}
                       value={job.id}
                       onChange={onCheckComplete}
                /> </td>
            <td> {job.h}:{job.m} </td>
            {isUpdating ?
                (<>
                    <td>
                        <input
                            type="text"
                            defaultValue={job.name}
                            onChange={onEditing}/>
                    </td>
                    <td>
                        <button
                            type={"button"}
                            onClick={onConfirmEdit}
                        >Confirm
                        </button>
                    </td>
                </>) :
                (<>
                    <td> {job.name} </td>
                    <td>
                        <button
                            type={"button"}
                            onClick={onStartEdit}
                            disabled={job.isCompleted }
                        >Update
                        </button>
                    </td>
                </>)
            }

            <td>
                <button
                    type={"button"}
                    onClick={() => del(job.id)}
                >Delete
                </button>
            </td>
        </tr>
    )
}