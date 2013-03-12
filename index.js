
/**
 * Blob constructor.
 */

var Blob = window.Blob;

/**
 * Blob builder.
 */

var BlobBuilder = window.BlobBuilder
   || window.WebKitBlobBuilder
   || window.MozBlobBuilder
   || window.MSBlobBuilder;

/**
 * Return a `Blob` for the given data `uri`.
 *
 * @param {String} uri
 * @return {Blob}
 * @api public
 */

module.exports = function(uri){
  var data = uri.split(',')[1];
  var bytes = atob(data);
  var buf = new ArrayBuffer(bytes.length);
  var arr = new Uint8Array(buf);
  for (var i = 0; i < bytes.length; i++) {
    arr[i] = bytes.charCodeAt(i);
  }

  if (Blob) return new Blob([arr], { type: mime(uri) });

  var bb = new BlobBuilder;
  bb.append(buf);
  return bb.getBlob(mime(uri));
};

/**
 * Return data uri mime type.
 */

function mime(uri) {
  return uri.split(';')[0].slice(5);
}
