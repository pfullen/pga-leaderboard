import React, { Component } from "react";
// import API from "../../utils/API";
//import MUIDataTable from "mui-datatables";
import { Container, Table, Item } from "semantic-ui-react";
import Style from "./LeaderBoard.css";

class LeaderBoard extends Component {
  state = {
    playerData: [
        {id: '1',pos: 1,  name: "Bobby Jones"}
    ],
    isDisabled: true,
    column: null,
    columns: [
      "Pos",
      "Player Name",
      "Total",
      "Thru",
      "Today",
      "1",
      "2",
      "3",
      "4",
      "Total",
      ""
    ],
    direction: "ascending"
  };

  componentDidMount() {}

  getTableColumns() {
    const columns = this.state.columns;
    const columnData = columns.map((column, index) => (
      <Table.HeaderCell> {column} </Table.HeaderCell>
    ));
    return columnData;
  }

  getPlayerData() {
    const playerData = this.state.playerData;  
    const dataRows = playerData.map((item, key) => 
    <Table.Row>
                <Table.Cell key={item.id}> {item.pos} </Table.Cell>
                <Table.Cell key={item.id}> {item.name} </Table.Cell>
                </Table.Row>
    );
    return dataRows;
}

  render() {
    return (
      <div>
        <Container className="table">
          <Table celled>
            <Table.Header>
              <Table.Row>{this.getTableColumns()}</Table.Row>
            </Table.Header>

            <Table.Body>
                {this.getPlayerData()}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

export default LeaderBoard;
