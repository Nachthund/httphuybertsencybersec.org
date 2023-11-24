$(document).ready(function() {
    // Define SVG for lightning bolt
    var lightningBoltSVG = '<svg class="lightning" viewBox="0 0 100 100">' +
                             '<polygon points="50,15 60,15 67,40 85,70 68,70 58,55 40,70 32,70 20,55 12,70 2,70 15,40 15,15"/>' +
                             '</svg>';
   
    // Add lightning bolt to background area
    var lightning = $(lightningBoltSVG).appendTo('#background');
   
    // Position lightning bolt randomly within background area
    lightning.css({
       left: Math.random() * ($('#background').width() - lightning.width()),
       top: Math.random() * ($('#background').height() - lightning.height())
    });
   
    // Animate lightning bolt appearance using jQueryUI's "bounce" effect
    lightning.effect("bounce", { times:3, distance: 50 }, 2000);
   });