import React from 'react'

class ListHeader extends React.Component {
  handleCompleteTodo = id => {
    return () => this.props.actions.completeTodo(id);
  }

  handleRemoveTodo = id => {
    return () => this.props.actions.removeTodo(id);
  }

  toggleDiv = (id) => {
    return () => this.props.actions.toggleTodo(id);
  }

  render() {
    const { item } = this.props
    return (
      <div className="list-todo-header">
        <button className={item.completed ? 'btn-styles done' : 'btn btn-normal done'} onClick={this.handleCompleteTodo(item.id)}>done</button>
        <div className="detail">
          <div>
            Title : {item.text}
          </div>
          <div className="description-text">
            Description : {item.description}
          </div>
        </div>
        <div className="button-right">
          <button className="remove btn-styles" onClick={this.handleRemoveTodo(item.id)}>remove</button>
          <button className="edit btn-styles" onClick={this.toggleDiv(item.id)}>edit</button>
        </div>
      </div>
    )
  }
}

export default ListHeader
