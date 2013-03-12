
var assert = require('component-assert');
var toBlob = require('data-uri-to-blob');

var canvas = document.createElement('canvas');
canvas.width = 5;
canvas.height = 5;

describe('blob(uri)', function(){
  it('should return a Blob', function(){
    var uri = canvas.toDataURL();
    var blob = toBlob(uri);
    assert('image/png' == blob.type, 'invalid .type');
    assert(72 == blob.size, 'invalid .size');
  })
})
