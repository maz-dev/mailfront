import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditorBox from '../../components/EditorBox';
import * as TodoActions from '../../actions/todos';
import style from './style.css';

// Content we want to pass as props to the text editor, it could be refactored as a service.
const rawContent = {
        blocks: [
          {
            text: (
              'This is the content '

            ),
            type: 'unstyled',
            entityRanges: [{offset: 31, length: 8, key: 'first'}],
          }
        ],
        entityMap: {
          first: {
            type: 'TOKEN',
            mutability: 'IMMUTABLE',
          }
        },
      };


class App extends Component {
  render() {
    const { todos, actions, children } = this.props;
    var content = "<h1>ProtonMail</h1>";
    return (
      <div className="main">
        <EditorBox content={rawContent}/>
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
