import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Validator from 'validatorjs';
import DropMenu from '../../atom/dropMenu';
import Input from '../../atom/input';
import Button from '../../atom/button';
import './create.css';

import itemsPriority from '../../objects/itemsPriority';
import issueType from '../../objects/items';
import { addIssueToList } from '../../../redux/actions';

const Create = ({ history }) => {
  const [createState, setState] = useState({
    title: '',
    description: '',
    issueType: undefined,
    priority: undefined,
    assignee: undefined,
    listColumn: undefined,
    reporter: undefined,
  });

  const [errorState, setErrorState] = useState({});

  const dispatch = useDispatch();

  const changeState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const columns = useSelector((state) => state.listColumn.allListColumns);
  const users = useSelector((state) => state.users.allUsers);

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
    const validation = new Validator(createState, rules);
    if (validation.fails()) {
      setErrorState(validation.errors.errors);
      return false;
    }
    setErrorState({});
    return true;
  };

  const setIssueValidation = () => {
    if (Valid()) {
      dispatch(addIssueToList(createState));
      history.goBack();
    }
  };

  const titleFunc = (text) => {
    changeState({ title: text });
  };

  const descriptionFunc = (text) => {
    changeState({ description: text });
  };

  const onIssueTypeChange = (issue) => {
    changeState({ issueType: issue });
  };

  const onPiorityTypeChange = (priority) => {
    changeState({ priority });
  };

  const onAssigneeChange = (assignee) => {
    changeState({ assignee });
  };

  const onListColumnChange = (listColumn) => {
    changeState({ listColumn });
  };

  const onReporterChange = (reporter) => {
    changeState({ reporter });
  };

  return (
    <div className="createPage">
      <div className="createPageDiv">
        <div>
          <Input
            placeholder="title"
            value={createState.title}
            onChange={titleFunc}
            label="Title: "
            err={errorState.title}
          />
        </div>
        <div>
          <Input
            placeholder="description"
            value={createState.description}
            onChange={descriptionFunc}
            label="Description: "
            err={errorState.description}
          />
        </div>

        <div>
          <DropMenu
            items={issueType}
            value={createState.issueType}
            onSelect={onIssueTypeChange}
            label="Issue Type: "
            err={errorState.issueType}
          />
        </div>

        <div>
          <DropMenu
            items={itemsPriority}
            value={createState.priority}
            onSelect={onPiorityTypeChange}
            label="Priority: "
            err={errorState.priority}
          />
        </div>

        <div>
          <DropMenu
            items={users}
            value={createState.assignee}
            onSelect={onAssigneeChange}
            label="Assignee: "
            err={errorState.assignee}
          />
        </div>
        <div>
          <DropMenu
            items={columns}
            value={createState.listColumn}
            onSelect={onListColumnChange}
            label="ListColumn: "
            err={errorState.listColumn}
          />
        </div>

        <div>
          <DropMenu
            items={users}
            value={createState.reporter}
            onSelect={onReporterChange}
            label="Reporter: "
            err={errorState.reporter}
          />
        </div>

        <div>
          <Button onClick={setIssueValidation} value="submit" />
        </div>
      </div>
    </div>
  );
};

Create.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Create;
