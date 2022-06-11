$(document).ready(function() {
  let hoverElement;
  let floorPlan = {
    couches: ['#Couch_1', '#Couch_2'],
    table: ['#Table'],
    fridge: ['#Fridge'],
    stove: ['#Gas_stove'],
  };

  $('.floor-plan-hover').on('mouseenter', function() {
    hoverElement = $(this).data('hover');
    highlightElements(floorPlan[hoverElement], true);
  });

  $('.floor-plan-hover').on('mouseleave', function() {
    highlightElements(floorPlan[hoverElement], false);
  });

});

function highlightElements(elements, isHovering) {
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
