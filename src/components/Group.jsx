import React, { Component } from 'react'

import TaskList from './TaskList'
import EditGroup from './EditGroup'

export default class extends Component {
    state = {
        isGroupEdit: false,
        value: null,
    }

    handleEditGroup = () => {
        if (!this.props.isUserSignIn) return;

        this.setState({
            isGroupEdit: true,
        })
    }

    onClickCancel = (event) => {
        event.preventDefault();

        this.setState({ isGroupEdit: false })
    }

    render() {
        const { groupID, groupTitle, onClickGroup } = this.props;

        return (

            <div onClick={onClickGroup.bind(this, groupID)} className="groups__item" id={groupID}>
                <header className="title">

                    {this.state.isGroupEdit
                        ? <EditGroup
                            {...this.props}
                            cancelClickGroup={this.onClickCancel}
                        />
                        : <h5 onClick={this.handleEditGroup}>{groupTitle}</h5>
                    }

                </header>

                <TaskList {...this.props} />
            </div>
        )
    }
}