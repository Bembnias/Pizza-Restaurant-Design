// fade in down animate for promo-boxes
var numbers = ["one","two"]
numbers.forEach(function(no){
  jQuery(document).ready(function() {
    jQuery('.'+no).addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
       });
  });
})
