# DragAndDropWidget
An extension implementing a general purpose "drag and drop" framework.

**This Extension is provided as-is and without warranty or support. It is not part of the PTC product suite and there is no PTC support.**

## Description
This extension provides a widget implementing a general purpose "drag and drop" framework. This widget can be configured to behave in two different ways:
- as a drag&drop source: it will manage the drag phase
- as a drag&drop destination: it will manage the drop phase

Both sources and destinations have to define:
- one or more unique dragAndDropKey used to "connect" them
- a CSS class used to identify the parent HTML component used to perfom the drag & drop operations

By using the dragAndDropKey keys the widget can evaluate if source and destination are compatible.

## Properties
- debugMode - BOOLEAN (default = false): if set to true it sends to the browser's JS console a set of information useful for debugging the widget
- dragParentCustomClass - STRING (no default value): the CSS class to search the drag and drop source parent, empty if this widget is not a drag and drop source
- dropParentCustomClass - STRING (no default value): the CSS class to search the drag and drop destination parent, empty if this widget is not a drag and drop destination
- dragUniqueDragAndDropKey - STRING (no default value): one or more unique keys (for the entire application) separated by space to indicate the compatibility between source and destination (the keys the source will indicate to the destination)
- dropUniqueDragAndDropKey - STRING (no default value): one or more unique keys (for the entire application) separated by space to indicate compatibility between source and destination (the keys the destination will use to check compatibility with the source)
- dragValue - STRING (no default value): the value transmitted from the source
- dropValue - STRING (no default value): the value received by the destination

## Events
- OnDragStart: event thrown when a drag starts
- OnDragEnd: event thrown when a drag ends
- OnDragEnter: event thrown when entering in a drop zone
- OnDragLeave: event thrown when leaving a drop zone
- OnDrop: event thrown when a drop is executed

## Donate
If you would like to support the development of this and/or other extensions, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).
