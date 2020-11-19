import React, { useContext, useState } from "react"
import Button from "../../atom/button"
import { Link } from "react-router-dom"
import ListColumn from "../../organism/listColumn"
import UsersContext from "../../context/userContext"

const Board = () => {
    return (
        <div>
            <div className="buttonTask">

                <Link to="/create_task">
                    <Button value={"Create Task"} />
                </Link>

            </div>
            <ListColumn />
            <div>
                <Link to="/create_column">
                    <Button value={"Create Column"} />
                </Link>

                <Link to="/create_user">
                    <Button value={"Create User"} />
                </Link>
            </div>
        </div>
    )
}

export default Board