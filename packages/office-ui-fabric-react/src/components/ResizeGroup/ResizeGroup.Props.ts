import * as React from 'react';
import { ResizeGroup } from './ResizeGroup';
import { IComponentAs } from '../../Utilities';

export interface IResizeGroup {

}

export interface IResizeGroupProps extends React.HTMLAttributes<ResizeGroup | HTMLElement> {
  as?: IComponentAs<React.HTMLAttributes<ResizeGroup | HTMLElement>>;

  /**
   * Optional callback to access the IResizeGroup interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: IResizeGroup) => void;

  /**
   * Initial data to be passed to the onRenderData function. When there is no onGrowData provided, this data should represent what should
   * be passed to the render function when the parent container of the ResizeGroup is at it's maximum supported width. A cacheKey property
   * may optionally be included as part of the data. Two data objects with the same cacheKey will be assumed to take up the
   * same width and will prevent measurements. The type of cacheKey is a string.
  */
  data: any;

  /**
   * Function to render the data. Called when rendering the contents to the screen and when
   * rendering in a hidden div to measure the size of the contents.
  */
  onRenderData: (data: any) => JSX.Element;

  /**
   * Function to be performed on the data in order to reduce its width and make it fit into the given space.
   * If there are no more scaling steps to apply, it should return undefined to prevent
   * an infinite render loop.
  */
  onReduceData: (prevData: any) => any;

  /**
   * Function to be performed on the data in order to increase its width. It is called in scenarios where the
   * container has more room than the previous render and we may be able to fit more content. If there are no more
   * scaling operations to perform on teh data, it should return undefined to prevent an infinite render loop.
  */
  onGrowData?: (prevData: any) => any;

  /**
   * Function to be called every time data is rendered. It provides the data that was actually rendered.
   * A use case would be adding telemetry when a particular control is shown in an overflow well or
   * dropped as a result of onReduceData or to count the number of renders that an implementation of
   * onReduceData triggers.
   */
  dataDidRender?: (renderedData: any) => void;
}
