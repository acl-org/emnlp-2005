function M_preload() {
  var d = document;
  if (d.images) {
    if (!d.M_keys) {
      d.M_keys = new Array();
      d.M_images = new Array();
    }
    var args = M_preload.arguments;
    var i;
    for (i = 0; i < args.length; ++i) {
      d.M_keys[2*i] = args[i];
      d.M_images[2*i] = new Image;
      d.M_images[2*i].src = "img/menu-"+args[i]+".gif";
      d.M_keys[2*i+1] = args[i]+"-on";
      d.M_images[2*i+1] = new Image;
      d.M_images[2*i+1].src = "img/menu-"+args[i]+"-on.gif";
    }
  }
}

function M_getImage(key) {
  var d = document;
  if (d.images) {
    var i;
    for (i = 0; i < d.M_keys.length; ++i) {
      if (d.M_keys[i] == key)
        return d.M_images[i].src;
    }
  }
  return null;
}

function M_setImage(id, key) {
  var d = document;
  if (d.images) {
    var obj = d.getElementById(id);
    obj.src = M_getImage(key);
  }
}

