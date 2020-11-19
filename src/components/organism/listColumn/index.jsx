import React from "react"
import { useSelector } from "react-redux"
import "./listColumn.css"
import Task from "../task"
import { useDispatch } from "react-redux";
import { deleteColumn } from "../../../redux/Columns/columnAction";
import Button from "../../atom/button"


const ListColumn = () => {
    const issues = useSelector(state => state.issues.allIssues)
    const columns = useSelector((state) => state.listColumn.allListColumns);
    const dispatch = useDispatch()

    const delCol=(id)=>{
        dispatch(deleteColumn(id))
    }

    return (
        <div>
            <div className="listColumn">
                {columns.map(list => {
                    return (
                        <div className="list">
                            <h2>{list.name}</h2>

                            <Button onClick={()=>delCol(list.value)}  value="delete" />

                            {issues.filter(issue => {
                                return issue.listColumn.value === list.value
                            }).map((list) => {
                                return <Task

                                    assignee={list.assignee.name}
                                    src={list.assignee.avatarImage}
                                    title={list.title}
                                    description={list.description}
                                    issueType={list.issueType.name}
                                    priority={list.priority.name}
                                    index={list.id}
                                    key={""}
                                />
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ListColumn