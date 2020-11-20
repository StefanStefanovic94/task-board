import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Validator from 'validatorjs';
import PropTypes from 'prop-types';
import Input from '../../atom/input';
import { addUserToList, deleteUser } from '../../../redux/actions';
import Button from '../../atom/button';

import './createUsers.css';

const CreateUser = ({ history }) => {
  const [stateUser, setStateUser] = useState({
    name: '',
  });

  const dispatch = useDispatch();

  const changeState = (newState) => {
    setStateUser((prevState) => ({ ...prevState, ...newState }));
  };

  const delUser = (id) => {
    dispatch(deleteUser(id));
  };

  const [errorState, setErrorState] = useState({});
  const users = useSelector((state) => state.users.allUsers);

  const Valid = () => {
    const rules = {
      name: 'required',
    };
    const validation = new Validator(stateUser, rules);
    if (validation.fails()) {
      setErrorState(validation.errors.errors);
      return false;
    }
    setErrorState({});
    return true;
  };

  const goBack = () => {
    history.goBack();
  };

  const setUserValidation = () => {
    if (Valid()) {
      dispatch(addUserToList(stateUser));
      setStateUser({ name: '' });
    }
  };

  const nameFunc = (text) => {
    changeState({ name: text });
  };

  return (
    <div>
      <div>
        <Input
          placeholder="name"
          onChange={nameFunc}
          err={errorState.name}
          value={stateUser.name}
        />
      </div>
      <Button value="submit" onClick={setUserValidation} />
      <div className="wrapUsers">
        {users.map((user) => {
          return (
            <div className="wrapCard">
              <h4>{user.name}</h4>
              <Button onClick={() => delUser(user.value)} value="delete" />
            </div>
          );
        })}
      </div>
      <Button onClick={() => goBack()} value="back" />
    </div>
  );
};

CreateUser.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default CreateUser;
