import React, { useContext } from "react"
import { Link } from "react-router-dom"
import EditButton from "../../atom/editButton"
import "./task.css"
import { useDispatch } from "react-redux";
import { deleteTaskItem } from "../../../redux/actions";
import PropTypes from "prop-types"


const Task = ({ assignee, title, description, issueType, priority, src, index }) => {

    const dispatch = useDispatch()

    const deleteTask = () => {
        dispatch(deleteTaskItem(index))
    }

    return (
        <div className="taskWrap">

            <EditButton value={"delete"} deleteItem={deleteTask} />

            <Link to={`/editIssue/${index}`}>
                <EditButton value={"edit"} />
            </Link>
            <p className="parag">
                Assignee: <p className="prop">{assignee}</p>
            </p>
            <img src={src} />
            <p className="parag">
                Title: <p className="prop">{title}</p>
            </p>
            <p className="parag">
                Description: <p className="prop">{description}</p>
            </p>

            <p className="parag">
                IssueType: {issueType === "Bug" ? <p className="propRed">{issueType}</p> : <p className="prop">{issueType}</p>}
            </p>

            <p className="parag">
                Priority: <p className="prop">{priority}</p>
            </p>
        </div>
    )
}

Task.propTypes = {
    assignee: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    issueType: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired

}

export default Task