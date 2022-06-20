$(document).ready(function() {
  let hoverElement;
  let floorPlan = {
    couches: ['#Couch_1', '#Couch_2'],
    table: ['#Table'],
    fridge: ['#Fridge'],
    stove: ['#Gas_stove'],
    upstairs: ['#Bed1, #Bed2'],
  };

  $('.floor-plan-hover').on('mouseenter', function() {
    hoverElement = $(this).data('hover');
    var isFloorUpstairs = (hoverElement == 'upstairs');
    switchFloor(isFloorUpstairs);
    highlightElements(floorPlan[hoverElement], true);
  });

  $('.floor-plan-hover').on('mouseleave', function() {
    switchFloor(false);
    highlightElements(floorPlan[hoverElement], false);
  });

});

function switchFloor(isFloorUpstairs) {
    if (isFloorUpstairs) {
      $('#floor-1').addClass('hide-svg');
      $('#floor-2').removeClass('hide-svg');
    } else {
      $('#floor-2').addClass('hide-svg');
      $('#floor-1').removeClass('hide-svg');
    }
}

function highlightElements(elements, isHovering, switchFloor) {
    let highlightColor = (isHovering ? '#389844' : 'none');

    elements.forEach(element => {
      let svgElement = $(element);

      if (svgElement.children().length) {
        $.each(svgElement.children(), function(k, child) {
          child.setAttribute('fill', highlightColor);
        });
      } else {
        svgElement[0].setAttribute('fill', highlightColor);
      }

    });
}
