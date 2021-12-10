/* global TW */
var uniqueDragAndDropKey;
TW.Runtime.Widgets.draganddrop = function () {
  var thisWidget = this;

  this.runtimeProperties = function () {
    return {
      'needsDataLoadingAndError': false
    };
  };

  this.renderHtml = function () {
    var html = '';
    html = '<div class="widget-content widget-draganddrop" style="display:none;"></div>';
    return html;
  };

  this.afterRender = function () {
    var debugMode = thisWidget.getProperty('debugMode');
    var dragParentCustomClass = thisWidget.getProperty('dragParentCustomClass');
    var dropParentCustomClass = thisWidget.getProperty('dropParentCustomClass');
    var dragUniqueDragAndDropKey = thisWidget.getProperty('dragUniqueDragAndDropKey');
    var dropUniqueDragAndDropKey = thisWidget.getProperty('dropUniqueDragAndDropKey');

    function intersects(str1, str2) {
      if (str1 && str2) {
        var array1 = str1.split(" ");
        var array2 = str2.split(" ");

        var intersection = array1.filter(function (value) {
          return array2.indexOf(value) !== -1;
        });

        return intersection.length > 0;
      } else {
        return false;
      }
    }

    function manageDrop(ev, log, handler, preventDefault, fromDragToDropValue, clear) {
      var dropAllowed = intersects(uniqueDragAndDropKey, dropUniqueDragAndDropKey);

      if (debugMode) {
        console.log("DragAndDrop - " + log + " - uniqueDragAndDropKey = " + uniqueDragAndDropKey + ", dropUniqueDragAndDropKey = " + dropUniqueDragAndDropKey + ", dropAllowed = " + dropAllowed);
      }

      if (dropAllowed) {
        if (preventDefault) {
          ev.preventDefault();
        }

        if (fromDragToDropValue) {
          var dropValue = ev.dataTransfer.getData("text/plain");
          if (debugMode) {
            console.log("DragAndDrop - " + log + " - dropValue = " + dropValue);
          }
          thisWidget.setProperty('dropValue', dropValue);
        }

        if (handler) {
          thisWidget.jqElement.triggerHandler(handler);
        }

        if (clear) {
          uniqueDragAndDropKey = null;
          ev.dataTransfer.clearData();
        }
      }
    }

    if (dragParentCustomClass) {
      var dragParent = this.jqElement.closest('.' + dragParentCustomClass).get(0);
      dragParent.setAttribute("draggable", "true");
      dragParent.ondragstart = function (ev) {
        var dragValue = thisWidget.getProperty('dragValue');

        if (debugMode) {
          console.log("DragAndDrop - ondragstart - dragUniqueDragAndDropKey = " + dragUniqueDragAndDropKey);
          console.log("DragAndDrop - ondragstart - dragValue = " + dragValue);
        }

        uniqueDragAndDropKey = dragUniqueDragAndDropKey;
        ev.dataTransfer.setData("text/plain", dragValue);

        thisWidget.jqElement.triggerHandler("OnDragStart");
      };
      dragParent.ondrag = function (ev) {
      };
      dragParent.ondragend = function (ev) {
        if (debugMode) {
          console.log("DragAndDrop - ondragend");
        }

        thisWidget.jqElement.triggerHandler("OnDragEnd");

        uniqueDragAndDropKey = null;
        ev.dataTransfer.clearData();
      };
    }

    if (dropParentCustomClass) {
      var dragCounter = 0;

      var dropParent = this.jqElement.closest('.' + dropParentCustomClass).get(0);
      dropParent.ondragenter = function (ev) {
        dragCounter++;
        manageDrop(ev, "ondragenter", "OnDragEnter", false, false, false);
      };
      dropParent.ondragover = function (ev) {
        manageDrop(ev, "ondragover", "", true, false, false);
      };
      dropParent.ondragleave = function (ev) {
        dragCounter--;

        if (dragCounter === 0) {
          manageDrop(ev, "ondragleave", "OnDragLeave", false, false, false);
        }
      };
      dropParent.ondrop = function (ev) {
        dragCounter = 0;
        manageDrop(ev, "ondrop", "OnDrop", true, true, true);
      };
    }
  };

  this.serviceInvoked = function (serviceName) {
  };

  this.updateProperty = function (updatePropertyInfo) {
    var properties = [
      "debugMode",
      "dragParentCustomClass", "dropParentCustomClass",
      "dragUniqueDragAndDropKey", "dropUniqueDragAndDropKey",
      "dragValue", "dropValue"
    ];

    if (properties.indexOf(updatePropertyInfo.TargetProperty) !== -1) {
      this.setProperty(updatePropertyInfo.TargetProperty, updatePropertyInfo.RawSinglePropertyValue);
    }
  };

  this.beforeDestroy = function () {
  };
};