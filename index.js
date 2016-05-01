

/**
 * Return formatted style attribute
 * from JSON object.
 *
 * @param {Object} json
 * @return {String}
 * @api public
 */

module.exports = function(json) {
  var str = '';
  for(var key in json) {
    str+= key + ':' + json[key] + ';';
  }
  return str;
};
