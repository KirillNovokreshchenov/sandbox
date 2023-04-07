function htmlspecialchars(formData) {
    return formData. replace(/&/ig, '&amp;').replace(/</ig, '&lt;').replace(/>/ig, '&gt;').replace(/"/ig, '&quot;')
    }
  