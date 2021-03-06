import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Board.scss";

class Board extends Component {
  goToDetail = () => {
    this.props.history.push(`/Community/boards/${this.props.id}`);
  };

  render() {
    const { id, title, author, created_at, view, category } = this.props;

    return (
      <tr className="Board">
        <td className="table-number">{id}</td>
        <td className="table-title" onClick={this.goToDetail}>
          <span>{category}</span>
          {title}
        </td>
        <td className="table-writer">{author}</td>
        <td className="table-when">{created_at}</td>
        <td className="table-howmany">{view}</td>
      </tr>
    );
  }
}

export default withRouter(Board);
