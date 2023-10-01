const svg = document.getElementById("svg");
const svgns = "http://www.w3.org/2000/svg";
let strokeWidth = 0.25;
// rounding and smoothing
let decimals = 2;

let getNthMouseCoord = 1;
let smooth = 2;

// init
let isDrawing = false;
var points = [];
let path = "";
let pointCount = 0;

const drawStart = (e) => {
  pointCount = 0;
  isDrawing = true;
  // create new path
  path = document.createElementNS(svgns, "path");
  svg.appendChild(path);
};

const draw = (e) => {
  if (isDrawing) {
    pointCount++;
    if (getNthMouseCoord && pointCount % getNthMouseCoord === 0) {
      let point = getMouseOrTouchPos(e);
      // save to point array
      points.push(point);
    }
    if (points.length > 1) {
      let d = smoothQuadratic(points, smooth, decimals);
      path.setAttribute("d", d);
    }
  }
};

const drawEnd = (e) => {
  isDrawing = false;
  points = [];
  // just illustrating the ouput
  svgMarkup.value = svg.outerHTML;
};

// start drawing: create new path;
svg.addEventListener("mousedown", drawStart);
svg.addEventListener("touchstart", drawStart);
svg.addEventListener("mousemove", draw);
svg.addEventListener("touchmove", draw);

// stop drawing, reset point array for next line
svg.addEventListener("mouseup", drawEnd);
svg.addEventListener("touchend", drawEnd);
svg.addEventListener("touchcancel", drawEnd);

function smoothQuadratic(points, skip = 0, decimals = 3) {
  let pointsL = points.length;
  let even = pointsL - skip - (1 % 2) === 0;

  // set M/starting point
  let type = "M";
  let values = [points[0].x, points[0].y];
  let [Mx, My] = values.map((val) => {
    return +val.toFixed(decimals);
  });
  let dRel = `${type}${Mx} ${My}`;
  // offsets for relative commands
  let xO = Mx;
  let yO = My;

  // split 1st line segment
  let [x1, y1] = [points[1].x, points[1].y];
  let [xM, yM] = [(Mx + x1) / 2, (My + y1) / 2];
  let [xMR, yMR] = [xM - xO, yM - yO].map((val) => {
    return +val.toFixed(decimals);
  });
  dRel += `l${xMR} ${yMR}`;
  xO += xMR;
  yO += yMR;

  for (let i = 1; i < points.length; i += 1 + skip) {
    // control point
    let [x, y] = [points[i].x, points[i].y];
    let [xR, yR] = [x - xO, y - yO];

    // next point
    let [xN, yN] = points[i + 1 + skip] ?
      [points[i + 1 + skip].x, points[i + 1 + skip].y] :
      [points[pointsL - 1].x, points[pointsL - 1].y];
    let [xNR, yNR] = [xN - xO, yN - yO];

    // mid point
    let [xM, yM] = [(x + xN) / 2, (y + yN) / 2];
    let [xMR, yMR] = [(xR + xNR) / 2, (yR + yNR) / 2];

    type = "q";
    values = [xR, yR, xMR, yMR];
    // switch to t command
    if (i > 1) {
      type = "t";
      values = [xMR, yMR];
    }
    dRel += `${type}${values
      .map((val) => {
        return +val.toFixed(decimals);
      })
      .join(" ")} `;
    xO += xMR;
    yO += yMR;
  }

  // add last line if odd number of segments
  if (!even) {
    values = [points[pointsL - 1].x - xO, points[pointsL - 1].y - yO];
    dRel += `l${values
      .map((val) => {
        return +val.toFixed(decimals);
      })
      .join(" ")}`;
  }
  return dRel;
}

/**
 * based on:
 * @Daniel Lavedonio de Lima
 * https://stackoverflow.com/a/61732450/3355076
 */
function getMouseOrTouchPos(e) {
  let x, y;
  // touch cooordinates
  if (
    e.type == "touchstart" ||
    e.type == "touchmove" ||
    e.type == "touchend" ||
    e.type == "touchcancel"
  ) {
    let evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
    let touch = evt.touches[0] || evt.changedTouches[0];
    x = touch.pageX;
    y = touch.pageY;
  } else if (
    e.type == "mousedown" ||
    e.type == "mouseup" ||
    e.type == "mousemove" ||
    e.type == "mouseover" ||
    e.type == "mouseout" ||
    e.type == "mouseenter" ||
    e.type == "mouseleave"
  ) {
    x = e.clientX;
    y = e.clientY;
  }

  // get svg user space coordinates
  let point = svg.createSVGPoint();
  point.x = x;
  point.y = y;
  let ctm = svg.getScreenCTM().inverse();
  point = point.matrixTransform(ctm);
  return point;
}

