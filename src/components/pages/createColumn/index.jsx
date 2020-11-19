import React, { useState } from "react"
import { useDispatch } from "react-redux";
import Button from "../../atom/button";
import Input from "../../atom/input";
import Validator from "validatorjs";
import { addColumn } from "../../../redux/actions"


const CreateColumn = ({ history }) => {
    const [stateColumn, setStateColumn] = useState({
        name: "",
        value: ""
    })

    const [errorState, setErrorState] = useState({})

    const changeState = (newState) => {
        setStateColumn((prevState) => ({ ...prevState, ...newState }))
    }

    const Valid = () => {
        const rules = {
            name: "required",
        }
        const validation = new Validator(stateColumn, rules)
        if (validation.fails()) {
            setErrorState(validation.errors.errors)
            return false
        } else {
            setErrorState({})
            return true

        }
    }

    const dispatch = useDispatch()

    const setColumnValidation = () => {
        if (Valid()) {
            dispatch(addColumn(stateColumn))
            history.goBack()
        }
    }

    const nameFunc = (text) => { changeState({ name: text }) }

    return (
        <div>
            <Input placeholder={"name"} onChange={nameFunc} value={stateColumn.name} err={errorState.name} />
            <Button value="submit" onClick={setColumnValidation} />
        </div>
    )
}
export default CreateColumn