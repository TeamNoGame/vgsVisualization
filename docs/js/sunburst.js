function newSunBurst(objectName) {
  var showGraphs = document.getElementById('gameDashboard');
  var graphDiv = document.createElement('div');
  var titleDiv = document.createElement('div');
  var sunBurstTitle = document.createElement('h1');
  var content = document.createTextNode('Sunburst Graph');
  var root = objectName;

  titleDiv.style.paddingBottom = "7px";
  titleDiv.style.textAlign = "center";
  titleDiv.style.fontFamily = "Open Sans, verdana, arial, sans-serif";
  titleDiv.style.fontSize = "30%";
  titleDiv.style.fill = "rgb(68, 68, 68)";
  titleDiv.style.opacity = "1";
  titleDiv.style.fontWeight = "normal";
  titleDiv.style.whiteSpace = "pre";

  titleDiv.append(content);
  graphDiv.appendChild(titleDiv);

  const width = window.innerWidth + 5000,
      height = window.innerHeight + 5000,
      maxRadius = (Math.min(width, height) / 2) - 5;

  // const formatNumber = d3.format(',d');
  const formatNumber = d3.format('.2f');
  const x = d3.scaleLinear()
      .range([0, 2 * Math.PI])
      .clamp(true);

  const y = d3.scaleSqrt()
      .range([maxRadius*.2, maxRadius]);

  const color = d3.scaleOrdinal(d3.schemeCategory20);

  const partition = d3.partition();

  const arc = d3.arc()
      .startAngle(d => x(d.x0))
      .endAngle(d => x(d.x1))
      .innerRadius(d => Math.max(0, y(d.y0)))
      .outerRadius(d => Math.max(0, y(d.y1)));

  const arcOver = d3.arc()
      .startAngle(d => x(d.x0))
      .endAngle(d => x(d.x1))
      .innerRadius(d => Math.max(0, y(d.y0)))
      .outerRadius(d => Math.max(0, y(d.y1)) + 10);

  const middleArcLine = d => {
    const halfPi = Math.PI/2;
    const angles = [x(d.x0) - halfPi, x(d.x1) - halfPi];
    const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);

    const middleAngle = (angles[1] + angles[0]) / 2;
    const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
    if (invertDirection) { angles.reverse(); }

    const path = d3.path();
    path.arc(0, 0, r, angles[0], angles[1], invertDirection);
    return path.toString();
  };

  const textFits = d => {
    const CHAR_SPACE = 6;
    const deltaAngle = x(d.x1) - x(d.x0);
    const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
    const perimeter = r * deltaAngle;
    return d.data.name.length * CHAR_SPACE < perimeter;
  };

  const svg = d3.select(graphDiv).append('svg')
      .style('width', '100%')
      .style('height', '100%')
      .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`)
      .on('click', () => focusOn()); // Reset zoom on canvas click

  root = d3.hierarchy(root);
  root.sum(d => d.size);

  const slice = svg.selectAll('g.slice')
      .data(partition(root).descendants());

  slice.exit().remove();

  const newSlice = slice.enter()
      .append('g').attr('class', 'slice')
      .on('mouseover', zoomIn)
      .on('mouseout', zoomOut)
      .on('click', d => {
        d3.event.stopPropagation();
        focusOn(d);
      });

  newSlice.append('title')
      .text(d => d.data.name + '\n' + formatNumber(d.value));

  newSlice.append('path')
      .attr('class', 'main-arc')
      .style('fill', d => color((d.children ? d : d.parent).data.name))
      .attr('d', arc);

  newSlice.append('path')
      .attr('class', 'hidden-arc')
      .attr('id', (_, i) => `hiddenArc${i}`)
      .attr('d', middleArcLine);

  const text = newSlice.append('text')
      .attr('display', d => textFits(d) ? null : 'none');

  // Add white contour
  text.append('textPath')
      .attr('startOffset','50%')
      .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
      .text(d => d.data.name + ':' + formatNumber(d.value))
      .style('fill', 'none')
      .style('stroke', '#fff')
      .style('stroke-width', 30)
      .style('stroke-linejoin', 'round');

  text.append('textPath')
      .attr('startOffset','50%')
      .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
      .text(d => d.data.name + ':' + formatNumber(d.value));

  // d3.json('../docs/data/' + jsonFileName, (error, root) => {
  //   // ../../../data/test.json
  //   //https://gist.githubusercontent.com/mbostock/4348373/raw/85f18ac90409caa5529b32156aa6e71cf985263f/flare.json
  //   if (error) throw error;
  //
  // });

  function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
    // Reset to top-level if no data point specified

    const transition = svg.transition()
        .duration(300)
        .tween('scale', () => {
          const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
              yd = d3.interpolate(y.domain(), [d.y0, 1]);
          return t => { x.domain(xd(t)); y.domain(yd(t)); };
        });

    transition.selectAll('path.main-arc')
        .attrTween('d', d => () => arc(d));

    transition.selectAll('path.hidden-arc')
        .attrTween('d', d => () => middleArcLine(d));

    transition.selectAll('text')
        .attrTween('display', d => () => textFits(d) ? null : 'none');

    moveStackToFront(d);

    function moveStackToFront(elD) {
      svg.selectAll('.slice').filter(d => d === elD)
          .each(function(d) {
            this.parentNode.appendChild(this);
            if (d.parent) { moveStackToFront(d.parent); }
          })
    }
  }
  function zoomIn(d, i) {
    // d3.event.stopPropagation();
    // d3.select(this).style('fill', 'blue').style('font-size', '200%');
  }
  function zoomOut(d, i) {
    // d3.event.stopPropagation();
    // d3.select(this).style('fill', 'black').style('font-size', '100%');
  }
  graphDiv.style.fontSize = '15vw';
  showGraphs.appendChild(graphDiv);
}