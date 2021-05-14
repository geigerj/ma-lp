function imageCounter() {
    var slideAlt = document.querySelector('.slide[style*="display: block"]').alt;
    var slideTotal = document.querySelector("#image-total").innerHTML
    if (typeof slideAlt === 'undefined') {
      document.querySelector("#image-count").innerHTML = slideTotal;
    }
    else {
      var slideName = slideAlt.replace(/^.*[\\\/]/, '');
      var slideCount = slideName.replace(/[^0-9]/g, '');
      document.querySelector("#image-count").innerHTML = slideCount;
    };
};
