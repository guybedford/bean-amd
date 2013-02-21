Bean AMD
==

Bridge module for the [Bean](https://github.com/fat/bean) library for use in [amdquery](https://github.com/guybedford/amdquery).

### Install

With [Volo](http://volojs.org):

```
  volo add guybedford/bean-amd
```

### Usage

```javascript
  require(['amdquery!bean'], function($) {
    $('#myelement').click(function() { /* etc */ })
  });
```

