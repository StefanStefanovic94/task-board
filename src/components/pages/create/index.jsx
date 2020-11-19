import React, { useState } from "react"
import { issueType } from "../../objects/items"
import DropMenu from "../../atom/dropMenu"
import Input from "../../atom/input"
import { itemsPriority } from "../../objects/itemsPriority"
import Button from "../../atom/button"
import "./create.css"
import Validator from "validatorjs"
import { useDispatch, useSelector } from "react-redux";
import { addIssueToList } from "../../../redux/actions";


const Create = ({ history }) => {
    const [state, setState] = useState({
        title: "",
        description: "",
        issueType: "",
        priority: "",
        assignee: "",
        listColumn: "",
        reporter: ""
    })

    const [errorState, setErrorState] = useState({})

    const dispatch = useDispatch();

    const changeState = (newState) => {
        setState((prevState) => ({ ...prevState, ...newState }))
    }

    const columns = useSelector((state) => state.listColumn.allListColumns);
    const users = useSelector((state) => state.users.allUsers);
    const stateGlobal = useSelector((state) => state);
    console.log("Create -> stateGlobal", stateGlobal)

    const Valid = () => {
        const rules = {
            title: "required",
            description: "required",
            issueType: "required",
            priority: "required",
            assignee: "required",
            listColumn: "required",
            reporter: "required"
        }
        const validation = new Validator(state, rules)
        if (validation.fails()) {
            setErrorState(validation.errors.errors)
            return false
        } else {
            setErrorState({})
            return true

        }
    }

    const setIssueValidation = () => {
        if (Valid()) {
            dispatch(addIssueToList(state))
            history.goBack()
        }
    }

    const titleFunc = (text) => { changeState({ title: text }) }

    const descriptionFunc = (text) => { changeState({ description: text }) }

    const onIssueTypeChange = (issue) => { changeState({ issueType: issue }) }

    const onPiorityTypeChange = (priority) => { changeState({ priority: priority }) }

    const onAssigneeChange = (assignee) => { changeState({ assignee: assignee }) }

    const onListColumnChange = (listColumn) => { changeState({ listColumn: listColumn }) }

    const onReporterChange = (reporter) => { changeState({ reporter: reporter }) }



    return (
        <div className="createPage">
            <div className="createPageDiv">
                <div>
                    <Input placeholder={"title"} value={state.title} onChange={titleFunc} label={"Title: "} err={errorState.title} />
                </div>
                <div>
                    <Input placeholder={"description"} value={state.description} onChange={descriptionFunc} label={"Description: "} err={errorState.description} />
                </div>

                <div>
                    <DropMenu items={issueType} value={state.issueType} onSelect={onIssueTypeChange} label={"Issue Type: "} err={errorState.issueType} />
                </div>

                <div>
                    <DropMenu items={itemsPriority} value={state.priority} onSelect={onPiorityTypeChange} label={"Priority: "} err={errorState.priority} />
                </div>

                <div>
                    <DropMenu items={users} value={state.assignee} onSelect={onAssigneeChange} label={"Assignee: "} err={errorState.assignee} />
                </div>
                <div>
                    <DropMenu items={columns} value={state.listColumn} onSelect={onListColumnChange} label={"ListColumn: "} err={errorState.listColumn} />
                </div>

                <div>
                    <DropMenu items={users} value={state.reporter} onSelect={onReporterChange} label={"Reporter: "} err={errorState.reporter} />
                </div>

                <div>
                    <Button onClick={setIssueValidation} value="submit" />
                </div>

            </div>
        </div>
    )
}

export default Create