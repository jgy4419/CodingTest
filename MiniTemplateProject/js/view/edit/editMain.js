// EditorDraw.ts
/**********************************************************************************
 *
 *	EditorDraw
 *
 **********************************************************************************/

 /**
 * @class
 * 
 * 
 * 
 * @extends Content
 */
// extends Icon 으로 변경되도록
class EditorDraw extends ViewContainer{
	
	//-----------------------------------------------------------------------------
	//
	//	private letiables
	//
	//-----------------------------------------------------------------------------
	 
	/**
	 * @private
	 * @type {string}
	 * @default null
	 * 
	
	/**
	 * @constructor
	 */
	constructor(){
		super();
		let t = this;

		t.setStyleName("EditorDraw");
		t._useDelayInvalidate = true;
	};


	///////////////////////////////////////////////////////////////////////////////
	//
	//	properties
	//
	///////////////////////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////////////////////////
	//
	//	override methods
	//
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * @override
	 */
	protected createChildren():void{
		super.createChildren();

		let t = this;
		t._paingint = false;
		t._defaultColor = '#068FFF';


		// editor label 값 변경 감지
		let elementToObserve = document.querySelector('.searcheable.label');

		let observer = new MutationObserver(function() {
			t._drawingPen.strokeStyles['stroke-width'] = t.highlightValue * (InstanceManager.canvasScaleRatio / 100);
		});
		
		observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});

		// 중요 변수
		t._editorSizeChange = InstanceManager.canvasScaleRatio;
		[t._moveWidth, t._moveHeight] = [0, 0];

		// svg 변환
		if(!t._editorDrawContainer) {
			t._editorDrawContainer = new UIElement('div', 'editorDrawContainer');
			t._editorDrawContainer.setStyle('width', '100%');
			t._editorDrawContainer.setStyle('height', '100%');
			t.addChild(t._editorDrawContainer);
			// t.setStyle('display', 'none');
		}
		if(!t._drawingPaper) {
			t._drawingPaper = new UIElement('svg');
			t._drawingPaper.element.id = 'cSvg';
			// 부모태그
			t._parentElement = document.querySelector('.rMateH5__Background');
			t._parentElementWidth = t._parentElement.getBoundingClientRect().width;
			t._parentElementHeight = t._parentElement.getBoundingClientRect().height;
			t._editorScale = 1080 * (InstanceManager.canvasScaleRatio / 100);
			
			t._drawingPaper.element.setAttribute('width', `100%`);
			t._drawingPaper.element.setAttribute('height', `100%`);
			
			t._drawingPaper.setStyle('position', 'absolute');
			t._drawingPaper.setStyle('cursor', 'crosshair');
			t._drawingPaper.setStyle('touch-action', 'none');
			t._drawingPaper.setStyle('z-index', '100');

			t._editorDrawContainer.addChild(t._drawingPaper);
			// global에서 any 타입으로 적용.
			t._drawingPaperSketch = SvgPenSketch.default;
			t._drawingPen = new t._drawingPaperSketch(document.getElementById('cSvg'), {
				"stroke": 'rgb(6, 143, 255)',
				"stroke-width": t.editorDrawMode === '펜모드' ? `${4}px` : `${25}px`
			});
			console.log(t._drawingPen);
		}

		// 바뀐 width, height, x축으로 움직인 값, y축으로 움직인 값.
		[t._change_width, t._chang_height, t._change_move_X, t._change_move_Y] = [0, 0, 0, 0];
		
		// 그리기를 완료했을 때
		t._drawingPen.penUpCallback = (_, e) => {
			let t = this;
			[t._moveWidth, t._moveHeight] = t._drawPathSize();
			let beforeDrawElement = t._drawingPaper.element.firstChild;
			// path 태그 사라지기 전에 변수에 넣어놓기.
			t._drawPathDom = t._drawingPaper.element.innerHTML;
			
			

			if(t._moveWidth === 0 && t._moveHeight === 0) {
				t._drawingPaper.element.removeChild(beforeDrawElement);
				return;
			}

			let SVGElement = t._drawingPaper.element;
			t._pathElement = SVGElement.querySelector('path');
			// 그려졌을 때 비율에 맞게 크기 조절해주기.
			let centerValue = 25 * (InstanceManager.canvasScaleRatio / 100);
			let drawMovement = `-${(t._change_move_X - centerValue) * (InstanceManager.canvasScaleRatio / 100)}px, -${(t._change_move_Y - centerValue) * (InstanceManager.canvasScaleRatio / 100)}px`;

			t._pathElement.id = 'svg0';
			t._pathElement.style.transform = `
				translate(${drawMovement})
			`;

			// SVG 태그 반환된 path 태그의 크기만큼 반환시켜주기.
			SVGElement.style.width = `${t._moveWidth}px`;
			SVGElement.style.height = `${t._moveHeight}px`;

			t._mouseUpX = e.offsetX;
			t._mouseUpY = e.offsetY;

			t._drawEndHandler();
			// 직전에 그려진 요소 제거.
			t._drawingPaper.element.removeChild(beforeDrawElement);
			// 요소 크기를 변경 시켰었으므로 재설정 해주기.
			SVGElement.style.width = `100%`;
			SVGElement.style.height = `100%`;
		};

		t._drawingPen.penDownCallback = (_, e) => {
			// 에디터 사이즈 변경되었을 때 commitProperties() 호출하기.
			if(t._editorSizeChange !== InstanceManager.canvasScaleRatio) {
				t._editorSizeChange = InstanceManager.canvasScaleRatio;
				t._change_move_X = e.offsetX;
				t._change_move_Y = e.offsetY;
				t.invalidateProperties();
			}

			// 띄워질 값
			if(t._change_move_X === 0 || t._change_move_X > e.offsetX) t._change_move_X = e.offsetX;
			if(t._change_move_Y === 0 || t._change_move_Y > e.offsetY) t._change_move_Y = e.offsetY;
		}

		// 띄워지는 부분
		[t._mouseUpX, t._mouseUpY, t._mouseDownX, t._mouseDownY] = [0, 0, 0, 0];

		// 영역지정
		[t._moveMaxX, t._moveMaxY, t._moveMinX, t._moveMinY] = [0, 0, 0, 0];
		[t.r, t.g, t.b] = [0, 0, 0];
		t._editorDrawResImage = '';

		// window로 걸어도 되는지..?
		window.addEventListener('keydown', t._editorDrawKeyDownHandler);
		t._drawingPen.getElement();

		t.addEvent('pointerdown', t._penPressure, t);
	}

	/**
	 * @override
	 */
	protected commitProperties():void{
        let t = this;		
		super.commitProperties();
		console.log('t.color', t.color);
		let settingColor = t.color === undefined ? '#068fff' : t.color
		t._drawingPen.strokeStyles['stroke-width'] = t.highlightValue * (InstanceManager.canvasScaleRatio / 100);
		console.log('commitProperties()', t);
		t.r = parseInt(settingColor.slice(1, 3), 16);
		t.g = parseInt(settingColor.slice(3, 5), 16);
		t.b = parseInt(settingColor.slice(5, 7), 16);
		
		t._drawingPen.strokeStyles.stroke = `rgb(${t.r}, ${t.g}, ${t.b})`;
		
		t._editorScale = 1080 * (InstanceManager.canvasScaleRatio / 100);
		
		t._drawingPaper.element.setAttribute('width', `100%`);
		t._drawingPaper.element.setAttribute('height', `100%`);
		t._drawingPaper.element.setAttribute('viewBox', `0 0 ${t._editorScale} ${t._editorScale}`);

		t._drawingPaper.setStyle('opacity', 0.5);
	}

	protected updateDisplayList(width: number, height: number): void {
		super.updateDisplayList(width, height);
	}

	/**
	 * @override
	 */

	protected alphaControls(alpha: number) {
		let t = this;
		// if(t._editorDrawContainer) {
			t._editorDrawContainer.element.style.opacity = alpha;
		// }
	}

	// 펜압기능
	protected _penPressure(event) {
		console.log('펜 눌리ㅣㅣㅁ', event);
	}

	protected _drawEndHandler() {
		let t = this;
		// t.invalidateProperties();

		let SVGDomElement = document.getElementById('cSvg');
		
		let serializedSVG = new XMLSerializer().serializeToString(SVGDomElement);

		let base64Data = `data:image/svg+xml;base64,${window.btoa(serializedSVG)}`;
		
		t._createDrawPicture(base64Data);
		
		// 위치 초기화
		t._change_move_X = 0;
		t._change_move_Y = 0;	
	}								
	
	private _editorDrawKeyDownHandler(event: KeyboardEvent) {
		let t = this;
		// t.editorDrawView = new EditorDrawView();
		// let t = getMangoInstance("currentCanvas").editorDraw;
		// let drawContainer = getMangoInstance("currentCanvas").editorDraw;
		console.log(t);
		
		if(event.key === 'Escape')
			getMangoInstance("currentCanvas").removeChild( getMangoInstance("currentCanvas").editorDraw );
	}

	protected _createDrawPicture(base64Img) {
		let t = this;

		let drawResObj = new EditorDrawRes();
		t._editorDrawResImage = base64Img;
		drawResObj.id = DataManager.objectId;

		ContentToolBar.getInstance().setChangeElement(false);
		InstanceManager.elementChangeFlag = false;
		
		let drawEndRes = new MangoData();

		let drawColorData = {
			"svg": []
		};

		let settingColor = t.color === undefined ? '#068fff' : t.color;

		// 선 색, 배경 색
		drawColorData.svg.push({id: 'svg0', fill: `${settingColor}`, strokeStyle: `${settingColor}`});

		let addMoveValue = 50 * (InstanceManager.canvasScaleRatio / 100);
		let [moveWidth, moveHeight, moveLeft, moveTop] = [
			(t._moveWidth + addMoveValue) / (InstanceManager.canvasScaleRatio / 100),
			(t._moveHeight + addMoveValue) / (InstanceManager.canvasScaleRatio / 100),
			t._change_move_X - (addMoveValue / 2),
			t._change_move_Y - (addMoveValue / 2)
		]
		// mango 에디터의 object 연결
		DataManager.addObject(getMangoInstance("currentCanvas").element.id, drawEndRes);
		
		// 생성되는 요소 크기 + 위치
		// drawResObj.otype = drawResObj.element.id; // 객체 타입
		
		drawEndRes.id = drawResObj.element.id;
		drawEndRes.width = moveWidth;
		drawEndRes.height = moveHeight;
		drawEndRes.left = moveLeft;
		drawEndRes.top = moveTop;
		drawEndRes.data = drawColorData;
		drawResObj._data = drawColorData;
		drawEndRes.otype = 'editorDrawRes';	
		drawEndRes.gradation = null;
		drawEndRes.gradationDefsDom = null;
		drawResObj.setActualSize(drawEndRes.width, drawEndRes.height);
		drawResObj.move(drawEndRes.left, drawEndRes.top);
		getMangoInstance('currentCanvas').addChild(drawResObj);
		
		// 주석 해제하면 데이터가 2번씩 전송되는 문제.
		// DataManager.addObject( getMangoInstance("currentCanvas").element.id, drawEndRes );
		console.log(drawResObj);
		// path 요소 추가해주기.
		drawResObj.contentData = drawEndRes;
		drawEndRes.alpha = t._alpha;
		t._mangoPushData(drawResObj, drawEndRes);
	}

	private _mangoPushData(drawResObj: EditorDrawRes, drawEndRes: { drawDom: any; id: string | number; }) {
		drawEndRes.drawDom = drawResObj.element.children[0].innerHTML;
		drawResObj.contentData = drawEndRes;

		console.log(getMangoInstance("currentCanvas"));
		CanvasDoStack.pushNewOperate("o_add", getMangoInstance("currentCanvas").element.id, JSON.stringify(drawEndRes), InstanceManager.CanvasController.getCurrentCanvas().getChildIndex(drawResObj));
		CanvasDoStack.clearRedoStack();
        CanvasDoStack.initData[drawEndRes.id] = JSON.stringify({
			object : drawEndRes,
			targetId : drawEndRes.id
		});
		InstanceManager.Targets = [];
		InstanceManager.Targets.push(drawResObj);
		InstanceManager.Editor.adjustObjectData();
		InstanceManager.Editor.adjustObjectHandleVisibility( true );

		getMangoInstance('currentCanvas').addChild(drawResObj);
	}

	// path 크기를 구해주는 함수
	private _drawPathSize() {
		let t = this;
		let drawDom = t._drawingPaper.element;
		let pathElement = drawDom.querySelector('path');
		let pathData = pathElement.getAttribute('d');
		let coordinates = pathData.match(/([MLHVCSQTA])([^MLHVCSQTA]*)/g);

		let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

		try {
			coordinates.forEach(function(coord) {
				let type = coord[0];
				let values = coord.slice(1).trim().split(/\s+/).map(Number);
	
				switch (type) {
					case 'M':
					case 'L':
					let x = values[0];
					let y = values[1];
					minX = Math.min(minX, x);
					maxX = Math.max(maxX, x);
					minY = Math.min(minY, y);
					maxY = Math.max(maxY, y);
					break;
				}
			});
			// path의 너비와 높이 계산
			let width = maxX - minX;
			let height = maxY - minY;

			return [width, height];
		} catch(err) {
			return [0, 0];
		}
	}

	///////////////////////////////////////////////////////////////////////////////
	//
	//	private methods
	//
	///////////////////////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////////////////////////
	//
	//	public methods
	//
	///////////////////////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////////////////////////
	//
	//	event handlers
	//
	///////////////////////////////////////////////////////////////////////////////
	
	
}