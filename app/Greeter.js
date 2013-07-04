/*
 * A very simple AMD module with no dependencies
 */

define([
  "dojo/_base/declare"
], function (declare) {
	return declare([], {
    greet: function (name) {
      name = name || 'world';

      return 'Hello, ' + name + '!';
    }
  });
});