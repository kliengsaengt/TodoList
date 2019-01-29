import React, { Component } from 'react'
import { Progress } from 'reactstrap'
import moment from 'moment'
import ListHeader from './ListHeader'
import './index.scss'

class ListTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues2: { text: '', desc: '' },
      tempTitle: '',
      tempDesc: '',
      currentFilter: 'all',
      disableTitle: true,
      disableDesc: true
    }
  }

  updateTitle(e) {
    this.setState({ tempTitle: e.target.value })
  }
  
  updateDesc(event) {
    this.setState({ tempDesc: event.target.value })
  }

  changeTitle(id, text) {
    return () => this.props.actions.changeTitle(id, text)
  }

  changeDesc(id, description) {
    return () => this.props.actions.changeDesc(id, description)
  }

  handleFilter = filter => {
    this.setState({
      currentFilter: filter,
    })
  }

  handleChange(event) {
    let formValues2 = this.state.formValues2
    let name = event.target.name
    let value = event.target.value
    formValues2[name] = value
    this.setState({ formValues2 })
  }

  handleSubmit(event, id) {
    if (this.state.formValues2['text'] == '') {
      alert("You have no change")
    } else {
      alert('here')
      this.setState({ tempTitle: this.state.formValues2['text'] })
      this.setState({ tempDesc: this.state.formValues2['desc'] })
      this.props.actions.changeTitle(id, this.state.tempTitle,
        this.state.tempDesc)
    }
  }

  render() {
    const { todo, actions } = this.props
    const { currentFilter, tempTitle, tempDesc } = this.state
    const filteredTodos = todo.filter(({ completed }) => {
      switch (currentFilter) {
        case 'completed':
          return completed
        case 'active':
          return !completed
        default:
          return true
      }
    })
    const completedLength = todo.filter(item => item.completed === true).length
    const allLength = todo.length
    const percent = completedLength/allLength*100
    return (
      <div className="list-todo-wrapper">
        <div className="filter-todo">
          <button className="btn space btn-style" onClick={(e) => { this.handleFilter('completed') }}>what I have completed</button>
          <button className="btn space btn-style" onClick={(e) => { this.handleFilter('active') }}>What I need to do</button>
          <button className="btn space btn-style" onClick={(e) => { this.handleFilter('all') }}>all of my tasks</button>
          <div className="progress-todo">
            <Progress color="info" value={percent}>{percent.toFixed(2)}%</Progress>
          </div>
        </div>
        {filteredTodos.map((item, index) =>
          <div key={index}>
            <ListHeader
              item={item}
              actions={actions}
            />
            {item.show &&
              <div className="list-content-edit row2">
                <form>
                  <div className="form-group">
                    <div className="edit-info">
                      <label>Title:</label>
                      <input type="text" defaultValue={item.text} onChange={this.updateTitle.bind(this)} />
                      <button type="submit"
                        disabled={!tempTitle}
                        onClick={this.changeTitle(item.id, tempTitle)}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="edit-info">
                      <label>Description:</label>
                      <input type="text"
                        defaultValue={item.description}
                        onChange={this.updateDesc.bind(this)}
                      />
                      <button type="submit" className=""
                        disabled={!tempDesc}
                        onClick={this.changeDesc(item.id, tempDesc)}
                      >
                        Submit
                      </button>
                    </div>
                    <label>Date Added : {moment(item.date).format("MMM Do YY")}</label>
                  </div>
                </form>
              </div>
            }
          </div>
        )}
      </div>
    )
  }
}

export default ListTodo
