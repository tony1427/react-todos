import React, { Component } from 'react'


const completeStyle = {
    color: "#ff0000",
    textDecoration: "line-through"
}

const normalStyle = {
    color: "#000000",
}

export default class Todo extends Component {
    render() {
        return (
            <div className="todo" onClick={this.props.onToggleTodo}>
                <input type="checkbox" checked={this.props.isComplete}/>
                <span style={this.props.isComplete ? completeStyle : normalStyle}> {this.props.text}</span>
            </div>
        )
    }
}
