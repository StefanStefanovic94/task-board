import React, { useState } from 'react';
import Validator from 'validatorjs';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DropMenu from '../../atom/dropMenu';
import Input from '../../atom/input';
import issueType from '../../objects/items';
import itemsPriority from '../../objects/itemsPriority';
import Button from '../../atom/button';

import { editIssue } from '../../../redux/actions';

const EditIssue = ({ history, match }) => {
  // const globalState = useContext(UsersContext)
  // const someState = globalState.issues //ovaj se koristio prvo//
  const { id } = match.params;
  const stateI = useSelector((state) => state.issues.allIssues[id]); // ovaj se poziva iz reduxa//

  const columns = useSelector((state) => state.listColumn.allListColumns);
  const users = useSelector((state) => state.users.allUsers);

  const [editState, setEditState] = useState(stateI);

  const setIssueState = (newState) =>
    setEditState((prevState) => ({
      ...prevState,
      ...newState,
    }));

  const dispatch = useDispatch();

  const [errorState, setErrorState] = useState({});

  const Valid = () => {
    const rules = {
      title: 'required',
      description: 'required',
      issueType: 'required',
      priority: 'required',
      assignee: 'required',
      listColumn: 'required',
      reporter: 'required',
    };
    const validation = new Validator(editState, rules);

    if (validation.fails()) {
      setErrorState(validation.errors.errors);
      return false;
    }
    setErrorState({});
    return true;
  };

  const setIssueValidation = () => {
    const isValid = Valid();
    if (isValid) {
      dispatch(editIssue(editState));
      history.push('/');
    }
  };

  const titleFunc = (text) => {
    setIssueState({ title: text }, id);
  };

  const descriptionFunc = (text) => {
    setIssueState({ description: text }, id);
  };

  const onIssueTypeChange = (issue) => {
    setIssueState({ issueType: issue }, id);
  };

  const onPiorityTypeChange = (priority) => {
    setIssueState({ priority }, id);
  };

  const onAssigneeChange = (assignee) => {
    setIssueState({ assignee }, id);
  };

  const onListColumnChange = (listColumn) => {
    setIssueState({ listColumn }, id);
  };

  const onReporterChange = (reporter) => {
    setIssueState({ reporter }, id);
  };

  return (
    <div>
      <div>
        <Input
          placeholder="title"
          value={editState.title}
          onChange={titleFunc}
          label="Title: "
          err={errorState.title}
        />
      </div>
      <div>
        <Input
          placeholder="description"
          value={editState.description}
          onChange={descriptionFunc}
          label="Description: "
          err={errorState.description}
        />
      </div>

      <div>
        <DropMenu
          items={issueType}
          value={editState.issueType}
          onSelect={onIssueTypeChange}
          label="Issue Type: "
          err={errorState.issueType}
        />
      </div>

      <div>
        <DropMenu
          items={itemsPriority}
          value={editState.priority}
          onSelect={onPiorityTypeChange}
          label="Priority: "
          err={errorState.priority}
        />
      </div>

      <div>
        <DropMenu
          items={users}
          value={editState.assignee}
          onSelect={onAssigneeChange}
          label="Assignee: "
          err={errorState.assignee}
        />
      </div>
      <div>
        <DropMenu
          items={columns}
          value={editState.listColumn}
          onSelect={onListColumnChange}
          label="ListColumn: "
          err={errorState.listColumn}
        />
      </div>

      <div>
        <DropMenu
          items={users}
          value={editState.reporter}
          onSelect={onReporterChange}
          label="Reporter: "
          err={errorState.reporter}
        />
      </div>

      <div>
        <Button onClick={setIssueValidation} value="submit" />
      </div>
    </div>
  );
};

EditIssue.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default EditIssue;
