import * as React from 'react';
import { IKanbanBoardProps, IKanbanLaneProps, ILaneColumn, IKanbanLaneState, IKanbanLaneItemProps } from './KanbanBoard.types';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { List } from 'office-ui-fabric-react/lib/List';
import { DefaultButton } from '../Button';
import {
  DragDropContextProvider,
  DragSourceSpec,
  DragSourceMonitor,
  DropTargetSpec,
  DropTargetMonitor,
  DropTargetConnector,
  DragSourceConnector,
  DragSource,
  DropTarget
} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
const classNames = mergeStyleSets({
  kanbanContainer: {
    display: 'flex',
    direction: 'column',
    overflowY: 'hidden',
    overflowX: 'auto',
    height: 'inherit'
  },
  kanbanLaneColumn: {
    position: 'relative',
    top: 0,
    margin: '5px',
    textAlign: 'center',
    overflow: 'hidden'
  },
  laneListWrapper: {
    overflowY: 'auto',
    maxHeight: '80%',
    overflowX: 'hidden'
  },
  fetchItemsButton: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  laneItem: {
    overflow: 'hidden'
  },
  laneWrapper: {
    border: '1px dashed'
  }
});

const DRAG_TYPE = {
  CARD: 'card'
};

export class KanbanBoard extends React.PureComponent<IKanbanBoardProps> {
  constructor(props: IKanbanBoardProps) {
    super(props);
  }
  public render(): JSX.Element {
    const columns = this.props.laneColumns;
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className={classNames.kanbanContainer}>
          {columns.map(element => {
            const key = KanbanLane.name + element.key;
            return <KanbanLane {...this.props} laneColumn={element} key={key} />;
          })}
        </div>
      </DragDropContextProvider>
    );
  }
}
class KanbanLane extends React.PureComponent<IKanbanLaneProps, IKanbanLaneState> {
  private _laneColumnWidth: string = '200px';
  constructor(props: IKanbanLaneProps) {
    super(props);
    this._laneColumnWidth = (this.props.laneColumn.width && this.props.laneColumn.width.toString() + 'px') || this._laneColumnWidth;
    this._deleteItem = this._deleteItem.bind(this);
    this._addItem = this._addItem.bind(this);
    this.state = {
      items: (this.props.getItems && this.props.getItems(this.props.laneColumn)) || []
    };
  }
  public render(): JSX.Element {
    const laneWrapperStyle = { width: this._laneColumnWidth };
    return (
      <div style={laneWrapperStyle} className={classNames.laneWrapper}>
        {this._onRenderLaneColumn(this.props.laneColumn)}
        <div className={classNames.laneListWrapper}>
          <List items={this.state.items} onRenderCell={this._onRenderLaneItem} />
          <DefaultButton primary text={`Fetch more items (${this.props.laneColumn.name})`} onClick={this._fetchItems} />
        </div>
      </div>
    );
  }

  private _deleteItem(index: any) {
    const items = this.state.items.slice();
    items.splice(index, 1);
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      return { items: items };
    });
  }

  private _addItem(index: any, item: any) {
    const items = this.state.items.slice();
    items.splice(index, 0, item);
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      return { items: items };
    });
  }

  private _fetchItems = () => {
    // improve this logic
    const newItems = (this.props.getItems && this.props.getItems(this.props.laneColumn)) || [];
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      return { items: [...state.items, ...newItems] };
    });
  };

  private _onRenderLaneItem = (item?: any, index?: number): JSX.Element => {
    const { onRenderLaneItem } = this.props;
    return (
      <DragDroppableListItem
        item={item}
        index={index}
        onRenderLaneItem={onRenderLaneItem}
        addItem={this._addItem}
        deleteItem={this._deleteItem}
        parentLaneKey={this.props.laneColumn.key}
      />
    );
  };

  private _onRenderLaneColumn(laneColumn: ILaneColumn) {
    return (
      <div className={classNames.kanbanLaneColumn}>
        {this.props.onRenderLaneColumn ? (
          this.props.onRenderLaneColumn
        ) : (
          <div className={classNames.kanbanLaneColumn}>{this.props.laneColumn.name}</div>
        )}
      </div>
    );
  }
}

class KanbanLaneItem extends React.PureComponent<IKanbanLaneItemProps> {
  constructor(props: IKanbanLaneItemProps) {
    super(props);
  }
  public render(): JSX.Element {
    const { onRenderLaneItem, item, index, connectDragSource, connectDragPreview, connectDropTarget } = this.props;
    return connectDropTarget(
      connectDragPreview(connectDragSource(<div className={classNames.laneItem}>{onRenderLaneItem && onRenderLaneItem(item, index)}</div>))
    );
  }
}

const dragSourceSpec: DragSourceSpec<any, any> = {
  beginDrag(props: IKanbanLaneItemProps, monitor: DragSourceMonitor, component: React.Component): any {
    console.log('Drag started');
    return { index: props.index, dragItem: props.item, dragItemParentLaneKey: props.parentLaneKey };
  },

  endDrag(props: IKanbanLaneItemProps, monitor: DragSourceMonitor, component: React.Component): void {
    if (monitor.didDrop()) {
      console.log('Drag end delete item');
      props.deleteItem(monitor.getItem().index);
    }
    console.log('Drag end');
  }
};

const dropTargetSpec: DropTargetSpec<any> = {
  drop(props: IKanbanLaneItemProps, monitor: DropTargetMonitor, component: React.Component): any {
    const draggedItem = monitor.getItem();
    console.log('Drop event add item');
    props.addItem(props.index, draggedItem.dragItem);
    console.log('Drop event');
  },

  hover(props: IKanbanLaneItemProps, monitor: DropTargetMonitor, component: React.Component): void {
    //console.log("onHover");
  }
};

function collect(connect: DragSourceConnector, monitor: DragSourceMonitor, props: any): any {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

const DraggableListItem = DragSource(DRAG_TYPE.CARD, dragSourceSpec, collect)(KanbanLaneItem);

function collectDropTargetProps(connect: DropTargetConnector, monitor: DropTargetMonitor, props: any): any {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

const DragDroppableListItem = DropTarget(DRAG_TYPE.CARD, dropTargetSpec, collectDropTargetProps)(DraggableListItem);
