
var assert = require('component-assert');
var toBlob = require('data-uri-to-blob');

var canvas = document.createElement('canvas');
canvas.width = 5;
canvas.height = 5;
var ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, 5, 5);

describe('blob(uri)', function(){
  it('should return a Blob', function(){
    var uri = canvas.toDataURL();
    var blob = toBlob(uri);
    var type = {}.toString.call(blob);
    assert('[object Blob]' == type);
    assert('image/png' == blob.type, 'invalid .type');
    assert(blob.size == blob.slice().size);
    assert(blob.size > 50);
  })
})
