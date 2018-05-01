import GridList from 'material-ui/GridList';
import React, { Component } from 'react';

import GridItemComponent from './GridItemComponent';

export default class GridComponent extends Component {
  render() {
    const {
      handleAttendanceToggle,
      handleRsvpClick,
      handleMessage,
      onEditChange,
      onEditSubmit,
      onRsvpRequest,
      onDeleteSubmit,
      onRsvpDelete,
      view,
      itemList
    } = this.props;
    return (
      <GridList
        style={{
        marginTop: 12
      }}
        cols={this.props.col}
        padding={2}
        cellHeight={'auto'}>
        {itemList.map((item, i) => (<GridItemComponent
          key={i}
          event={item}
          view={view}
          handleAttendanceToggle={handleAttendanceToggle}
          handleRsvpClick={handleRsvpClick}
          onEditChange={onEditChange}
          onEditSubmit={onEditSubmit}
          onDeleteSubmit={onDeleteSubmit}
          onRsvpRequest={onRsvpRequest}
          onRsvpDelete={onRsvpDelete}
          handleMessage={handleMessage}/>))}
      </GridList>
    );
  }
}
