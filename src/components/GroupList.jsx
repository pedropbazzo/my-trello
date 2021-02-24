import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Sortable from 'sortablejs';

// import groups from '../fixtures'
import Group from './Group'
import AddGroup from './AddGroup'

export default class extends Component {
    state = {
        data: [],
        currentIDGroup: null,
        currentIndexGroup: null,
        currentTitleGroup: null,

        currentIDTask: null,
        currentIndexTask: null,
        currentTitleTask: null,
        currentDescriptionTask: '',

        isAddGroup: false,
    }

    handleClickGroup = (id) => {
        if (id === this.state.currentIDGroup) return
        
        const {currentIndexGroup} = this.findIndex(id);
        const currentTitleGroup = this.state.data[currentIndexGroup].title;

        this.setState({
            currentIDGroup: id,
            currentIndexGroup,
            currentTitleGroup
        })
    }

    handleClickTask = (idTask, idGroup) => {
        if (idTask === this.state.currentIDTask) return
        
        const {currentIndexTask, currentIndexGroup} = this.findIndex(idGroup, idTask);
        const currentTitleTask = this.state.data[currentIndexGroup].tasks[currentIndexTask].title;

        this.setState({
            currentIDTask: idTask,
            currentIndexTask,
            currentTitleTask
        })
    }


    handleClickAddGroup = (e) => {
        if (!this.props.isUserSignIn) return;
        
        this.setState({ isAddGroup: true })
    };
    
    findIndex = (idGroup, idTask) => {
        let currentIndexGroup;
        let currentIndexTask;
        
        this.state.data.forEach((item, index) => {
            if (item.id === idGroup) {
                currentIndexGroup = index
                
                item.tasks.forEach((task, index) => {
                    if (task.id === idTask) {
                        currentIndexTask = index;
                    }
                })
            }
        });
        
        return {currentIndexGroup, currentIndexTask};
    }

    createGroup = (item) => {
        this.state.data.push(item);

        this.setState({
            data: this.state.data,
            isAddGroup: false,
        })

    }

    updateGroup = (title) => {
        const groupClone = this.state.data[this.state.currentIndexGroup];
        groupClone.title = title;
        this.state.data.splice(this.state.currentIndexGroup, 1, groupClone);
        this.setState({data: this.state.data})
    }

    deleteGroup = () => {
        this.state.data.splice(this.state.currentIndexGroup, 1);

        this.setState({ data: this.state.data })
    }

    createTask = (item) => {
        this.state.data[this.state.currentIndexGroup].tasks.push(item);

        this.setState({
            data: this.state.data,
        })
    }

    updateTask = (title, description) => {
        const taskClone = this.state.data[this.state.currentIndexGroup].tasks[this.state.currentIndexTask];
        taskClone.title = title;
        taskClone.description = description;
        this.state.data[this.state.currentIndexGroup].tasks.splice(this.state.currentIndexTask, 1, taskClone)
        this.setState({data: this.state.data})
    }

    deleteTask = () => {
        this.state.data[this.state.currentIndexGroup].tasks.splice(this.state.currentIndexTask, 1);

        this.setState({ data: this.state.data })
    }

    sortableContainersDecorator = (componentBackingInstance) => {
        // check if backing instance not null
        if (componentBackingInstance) {
            let options = {
                animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
                handle: ".title", // Restricts sort start click/touch to the specified element
                // onUpdate: function (evt/**Event*/){
                //     var item = evt.item; // the current dragged HTMLElement
                // }
            };
            Sortable.create(componentBackingInstance, options);
        }
    };

    sortableGroupDecorator = (componentBackingInstance) => {
        // check if backing instance not null
        if (componentBackingInstance) {
            let options = {
                animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
                draggable: ".tasks__item", // Specifies which items inside the element should be sortable
                group: "shared",
                // onUpdate: function (evt/**Event*/){
                //     var item = evt.item; // the current dragged HTMLElement
                // }
            };
            Sortable.create(componentBackingInstance, options);
        }
    };

    render() {
        console.log(this.props)

        const groupElement = this.state.data.map(group =>
            <Group 
                {...this.props}
                sortableGroupDecorator={this.sortableGroupDecorator}
                onClickGroup={this.handleClickGroup}
                onClickTask={this.handleClickTask}

                key={group.id} 
                groupID={group.id} 
                groupTitle={group.title} 
                groupTasks={group.tasks}
                
                currentTitleGroup={this.state.currentTitleGroup}
                updateGroup={this.updateGroup}
                deleteGroup={this.deleteGroup}
                onChangeGroup={ ({ target }) => this.setState({currentTitleGroup: target.value}) }

                currentTitleTask={this.state.currentTitleTask}
                currentDescriptionTask={this.state.currentDescriptionTask}
                createTask={this.createTask}
                updateTask={this.updateTask}
                deleteTask={this.deleteTask}
                onChangeTask={ ({ target }) => this.setState({currentTitleTask: target.value}) }
                onChangeTaskDescription={ ({ target }) => this.setState({currentDescriptionTask: target.value}) }
            />
        )

        return (
            <div className="dashboard container-fluid">
                <div className="groups" ref={this.sortableContainersDecorator}>

                    {groupElement}

                    <div className="groups__item">
                        <div className="inner">
                        
                            {this.state.isAddGroup
                                ? <AddGroup
                                    cancelAddGroup={ () => this.setState({ isAddGroup: false }) }
                                    createGroup={this.createGroup}
                                />
                                : <div onClick={this.handleClickAddGroup}>Add a new group...</div>
                            }

                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}