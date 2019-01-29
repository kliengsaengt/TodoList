import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActions from './action/todoAction'
import { AddTodoPanel, ListTodo } from './component'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

class App extends React.Component {
  render() {
    const { todoReducer, actions } = this.props
    return (
      <div className="content">
        <AddTodoPanel
          todo={todoReducer}
          actions={actions}
        />
        <ListTodo actions={actions} todo={todoReducer} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todoReducer: state.reducer,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
