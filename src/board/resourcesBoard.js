import React from 'react';
import './resourcesBoard.css';

export class ResourcesBoard extends React.Component {
  render() {
    const pub = this.props.player.public;
    const farm = pub.farm;
    const res = pub.resources;

    return (
      <div>
        <table id="resourcesBoard" className={'res'}>
          <thead>
            <tr>
              <th>fence</th>
              <th>stable</th>
              <th>wood</th>
              <th>clay</th>
              <th>stone</th>
              <th>reed</th>
              <th>grain</th>
              <th>vegetable</th>
              <th>sheep</th>
              <th>boar</th>
              <th>cattle</th>
              <th>food</th>
              <th>people</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{farm.totalFences - farm.fences.length + '/' + farm.totalFences}</td>
              <td>{farm.totalStables - farm.stables.length + '/' + farm.totalStables}</td>
              <td>{res.wood}</td>
              <td>{res.clay}</td>
              <td>{res.stone}</td>
              <td>{res.reed}</td>
              <td>{res.grain}</td>
              <td>{res.vegetable}</td>
              <td>{res.sheep}</td>
              <td>{res.boar}</td>
              <td>{res.cattle}</td>
              <td>{res.food}</td>
              <td>{`${farm.members + farm.guests - farm.workingMembers.length}/${farm.members + farm.guests}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
