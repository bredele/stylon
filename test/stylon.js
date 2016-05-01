/**
 * Test dependencies.
 */

var test = require('tape');
var styles = require('..');


test('simple object to styles', function (t) {
  t.plan(1);
  t.equal(styles({
    top: 100 + 'px',
    left: 0 + 'px'
  }), 'top:100px;left:0px;');
});
