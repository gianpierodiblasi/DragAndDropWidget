/* global TW */
TW.IDE.Widgets.draganddrop = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/DragAndDropWidget/ui/draganddrop/drag.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'DragAndDrop',
      'description': 'Widget implementing a general purpose "drag and drop" framework',
      'category': ['Common'],
      'iconImage': 'drag.png',
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 200
        },
        'Height': {
          'description': 'height',
          'defaultValue': 28
        },
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        },
        'dragParentCustomClass': {
          'isVisible': true,
          'baseType': 'STRING',
          'isEditable': true,
          'description': 'The CSS class to search the drag and drop source parent, empty if this widget is not a drag and drop source'
        },
        'dropParentCustomClass': {
          'isVisible': true,
          'baseType': 'STRING',
          'isEditable': true,
          'description': 'The CSS class to search the drag and drop destination parent, empty if this widget is not a drag and drop destination'
        },
        'dragUniqueDragAndDropKey': {
          'isVisible': true,
          'baseType': 'STRING',
          'isEditable': true,
          'description': 'One or more unique keys (for the entire application) separated by space to indicate the compatibility between source and destination (the keys the source will indicate to the destination)'
        },
        'dropUniqueDragAndDropKey': {
          'isVisible': true,
          'baseType': 'STRING',
          'isEditable': true,
          'description': 'One or more unique keys (for the entire application) separated by space to indicate compatibility between source and destination (the keys the destination will use to check compatibility with the source)'
        },
        'dragValue': {
          'isVisible': true,
          'baseType': 'STRING',
          'isBindingTarget': true,
          'isEditable': true,
          'description': 'The value transmitted from the source'
        },
        'dropValue': {
          'isVisible': true,
          'baseType': 'STRING',
          'isBindingSource': true,
          'isEditable': false,
          'description': 'The value received by the destination'
        }
      }
    };
  };

  this.widgetServices = function () {
    return {
    };
  };

  this.widgetEvents = function () {
    return {
      'OnDragStart': {},
      'OnDragEnd': {},
      'OnDragEnter': {},
      'OnDragLeave': {},
      'OnDrop': {}      
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-draganddrop">' + '<span class="draganddrop-property">Drag And Drop</span>' + '</div>';
  };
};