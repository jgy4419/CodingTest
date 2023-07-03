// //PropertyView.ts
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// //  Copyright 2008-2016 RiaMore Soft Co., Ltd. All Rights Reserved.
// //  http://www.riamore.net
// //
// //  This source code is digitised property of RiaMore Soft Limited ("RiaMore Soft") and
// //  protected by copyright under the law of Republic of Korea and other foreign laws.
// //  Reproduction and/or redistribution of the source code without written permission of
// //  RiaMore Soft is not allowed. Also, it is severely prohibited to register whole or specific
// //  part of the source code to any sort of information retrieval system.
// //
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
// /**********************************************************************************
//  *
//  *	PropertyView
//  *
//  **********************************************************************************/
	
// /**
//  * @class PropertyView
//  * 
//  * 
//  * 
//  * @extends MangoContainer
//  */
// class PropertyView extends MangoContainer{
	
// 	//-----------------------------------------------------------------------------
// 	//
// 	//	private variables
// 	//
// 	//-----------------------------------------------------------------------------
	
// 	/**
// 	 * @private
// 	 * 해당 아이콘의 명과 그룹, 잠금, 즐겨찾기에 대한 창
// 	 */
// 	private _contentTitle:any = null;

// 	/**
// 	 * @private
// 	 * 공통 속성 창
// 	 */
// 	private _common:any = null;
	
// 	/**
// 	 * @private
// 	 * 배경 설정 버튼
// 	 */
// 	private _insertBackground:any = null;
	
// 	/// 2022.02.10 표 셀모드 변경 버튼 추가
// 	/**
// 	 * @private
// 	 * 표 셀모드 설정 버튼
// 	 */
// 	private _tableEditorControlCellMode:any = null;

// 	/**
// 	 * @private
// 	 * 그룹 설정 버튼
// 	 */
// 	private _groupMenu:any = null;
	
// 	/**
// 	 * @private
// 	 * 선택한 요소가 잠금일 경우 출력되는 창
// 	 */
// 	private _lockElement:any = null;

// 	/**
// 	 * @private
// 	 */
// 	private _selectedBg:any = null;
	
// 	/**
// 	 * @private
// 	 * 메뉴 이름으로 해당 property 객체를 저장하는 변수
// 	 */
// 	private _menuForName:object = {};
	
// 	/**
// 	 * @private
// 	 * ContentTitle 에 출력되어질 사용자 요소일 경우의 prefix 문구
// 	 */
// 	private _userTitlePrefix:string = "내 ";

// 	/**
// 	 * @private
// 	 * 이 객체에 붙여지는 속성 메뉴 자식들의 순서
// 	 * 
// 	 * propertyViewClasses안의 js파일 이름에서 Property를 빼고 CamelCase형태로 바꾼 명이 아래에 설정되어야 함.
// 	 * ex / CommonProperty -> common, ChartFontProperty -> chartFont 
// 	 */
// 	private _childOrders:string[] = [
// 		"common", "sizeRotation", "qrCodeUrl", "editorDraw", "animation", "imageEditor", "textPath", "transform",
// 		"font", "color", "fontColor", 
// 		"videoPlayTime", "videoVolume", "delayTime", // video
// 		"lineStrokeColor", "backPanelColor", "stroke", "shadow", "colorFilter", "lineStroke", 
// 		"imageGradation", "contrast", "imageFilter", 
// 		"tableEditorColor", "tableEditor", "tableEditorCell", "tableEditorFont", "tableEditorTextPosition", // table editor
// 		"chartColor", "chartFont", "chartGauge", "chartWordCloud", "chartCommon", "chartPolar", // chart
// 		"mapColor", "mapCommon", "mapFont", "mapToolTip", // map
// 		"youTube", "kakaoMap", "frameInner", "textForm", "frameInnerStroke", 
// 		"radius", "innerAlpha" , "alpha", "link", "foreground", "background"
// 	];

// 	//-----------------------------------------------------------------------------
// 	//
// 	//	public variables
// 	//
// 	//-----------------------------------------------------------------------------
	
// 	/**
// 	 * @constructor
// 	 */
// 	constructor(){
// 		super();
// 		let t = this;
		
// 		t.isScroll = true;
		
// 		t.horizontalScrollPolicy = "off";
		
// 		t.setStyleName("PropertyView");
		
// 		t.addEventListener("editorPropertyChange", t._editorPropertyChangeHandler, t);
// 		t.addEvent("propertyChange", t._saveUndoDataHandler, t, true);
// 		t.addEvent("propertyChange", t._propertyChangeHandler, t);
// 		t.addEvent("functionExecution", t._functionExecutionHandler, t);
		
// 		/**
// 		 * 동일 색상(SameColor) 변경의 경우 기존의 property와 다른 함수에서 처리합니다. 
// 		 * 동일 폰트(SameFont) 변경의 경우 기존의 property와 다른 함수에서 처리합니다.
// 		 */
// 		t.addEvent("samePropertyChange", t._samePropertyChangeHandler, t);
		
// 		t.addEvent("scroll", t._scrollHandler, t);
	
// 		t._useDelayInvalidate = true;
// 	}
	
// 	static PROPERTY_MENU_INVISIBLE = "propertyMenuInvisible"; // 왼쪽 메뉴 CommonProperty 객체 자체를 출력하지 않으려고 할 때
// 	static PROPERTY_INVISIBLE = "propertyInvisible"; // 왼쪽 메뉴 CommonProperty 안의 특정 속성을 출력하지 않으려고 할 때
// 	static PROPERTY_DISABLED = "propertyDisabled"; // 왼쪽 메뉴안의 특정 속성을 disabled 처리하려 할 때

// 	///////////////////////////////////////////////////////////////////////////////
// 	//
// 	//	properties
// 	//
// 	///////////////////////////////////////////////////////////////////////////////
	
// 	//-------------------------------------------------------
// 	//
// 	//		selectedItems
// 	//
// 	//-------------------------------------------------------
	
// 	/**
// 	 * @private
// 	 * @type {any[]}
// 	 * @default null
// 	 * 
// 	 * 현재 선택된 아이템들
// 	 */
// 	private _selectedItems:any[] = [];
	
// 	/**
// 	 * @public
// 	 */
// 	public get selectedItems():any[]{
// 		return this._selectedItems;
// 	}
	
// 	/**
// 	 * @public
// 	 */
// 	public set selectedItems(val:any[]){
// 		this._selectedItems = val;
// 	}
	
// 	//-------------------------------------------------------
// 	//
// 	//		clickedGroup
// 	//
// 	//-------------------------------------------------------
	
// 	/**
// 	 * @private
// 	 * @type {any}
// 	 * @default null
// 	 * 
// 	 * selectChange가 발생하고 item이 그룹이었을 경우
// 	 * 이후 그룹 안에 요소를 클릭 하였을 때 해당 flag를 보고 요소에 대한 속성창을 열어주도록 하기 위함
// 	 */
// 	private _clickedGroup:any = null;
	
// 	/**
// 	 * @public
// 	 */
// 	public get clickedGroup():any{
// 		return this._clickedGroup;
// 	}
	
// 	///////////////////////////////////////////////////////////////////////////////
// 	//
// 	//	override methods
// 	//
// 	///////////////////////////////////////////////////////////////////////////////
	
// 	/**
// 	 * @override
// 	 */
// 	protected createChildren():void{
// 		let t = this;
// 		super.createChildren();
		
// 		if(!t._contentTitle){
// 			t._contentTitle = new ContentTitle();
// 			t._contentTitle.addEventListener("lockChange", t._lockChangeHandler, t);
// 			t._contentTitle.addEventListener("vLockChange", t._vlockChangeHandler, t);
// 			t._contentTitle.addEventListener("imgLockChange", t._imgLockChangeHandler, t);
// 			t.addChild(t._contentTitle);
// 		}
	
// 		if(!t._common){
// 			t._common = new CommonProperty();
// 			t.addChild(t._common);
// 		}
		
// 		if(!t._insertBackground){
// 			t._insertBackground = new InsertBackgroundProperty();
// 			t.addChild(t._insertBackground);
// 		}

// 		/// 2022.02.10 표 셀모드 변경 버튼 추가
// 		if (!t._tableEditorControlCellMode) {
// 			t._tableEditorControlCellMode = new TableEditorControlCellModeProperty();
// 			t.addChild(t._tableEditorControlCellMode);
// 		}
		
// 		if(!t._groupMenu){
// 			t._groupMenu = new GroupButtonMenu();
// 			t.addChild(t._groupMenu);
// 		}
		
// 		// 잠금 요소 선택시 속성창 가리는 div
// 		if(!t._lockElement){
// 			t._lockElement = new HTMLObject("div", "PropertyLock");
			
// 			// 휠 이벤트 막기
// 			t._lockElement.addEvent(MOUSE_WHEEL, function(event){
// 				event.stopPropagation();
// 				event.preventDefault();
// 				return false;
// 			}, true);
// 			t.addChild(t._lockElement);
// 		}
// 	}
	
// 	/**
// 	 * @override
// 	 */
// 	protected commitProperties():void{
// 		let t = this;
// 		super.commitProperties();
// 	}
	
// 	/**
// 	 * @override
	
// 	protected updateDisplayList(unscaledWidth:number, unscaledHeight:number):void{
// 		let t = this;
// 		super.updateDisplayList(unscaledWidth, unscaledHeight);
// 	} */
	
// 	///////////////////////////////////////////////////////////////////////////////
// 	//
// 	//	protected methods
// 	//
// 	///////////////////////////////////////////////////////////////////////////////
	
// 	///////////////////////////////////////////////////////////////////////////////
// 	//
// 	//	private methods
// 	//
// 	///////////////////////////////////////////////////////////////////////////////
	
// 	private _initTextStyle(items){
// 		let i, t = this;
		
// 		if(!items || !items.length)
// 			return;
		
// 		for(i=0; i<items.length; i++){
// 			if(items[i] instanceof MangoText)
// 				items[i]._textField.selectAllRange();
// 			else if(items[i] instanceof SVGText)
// 				items[i]._svgField.selectAllRange();
// 		}
// 	}
	
// 	private _clearBgSelection(){
// 		let t = this;
		
// 		t._selectedBg.displaySelectMark(false);
// 		t._selectedBg = null;
		
// 		t._common.setVisible(true);
// 	};
	
	
	
// 	private _clearFgSelection(){
// 		let t = this;
		
// 		t._selectedFg = null;
		
// 		t._common.setVisible(true);
// 	};
	
// 	private _clearAniSelection(){
// 		let t = this;
		
// 		t._selectedAni = null;
		
// 		t._common.setVisible(true);
// 	};
	
// 	/**
// 	 * @private
// 	 * 다중 선택 시 여러 아이템들 중 하나의 객체를 가지고 속성창을 만들게 되는데 선택된 아이템들에 따라
// 	 * 속성창이 달라져야 하기 때문에 적절한 아이템을 하나를 골라 반환하도록 합니다.
// 	 * 
// 	 * @returns {object}
// 	 */
// 	private _getItemForCreateProperty(items:any[], availProps:string[]):{item:any, itemColors:{}}{
// 		let t = this,
// 			item:any,
// 			prop:string,
// 			colors:string[],
// 			shadowColor:string[],
// 			strokeColor:string[],
// 			innerStrokeColor:string[],
// 			backPanelColor:string[],
// 			innerColors:string[],
// 			newProps:string[] = [];
		
// 		item = items[0];
		
// 		// 색상 속성 관련하여 체크 후 추가
// 		colors = t._checkColors(items, newProps);
		
// 		// 링크 속성 체크 후 추가
// 		t._checkLink(items, newProps);
		
// 		// 선택 요소가 모두 텍스트일 경우 ( MangoText, SVGTetxt, ClipText )
// 		if(items.every(item => !isUndefined(item.fontFamily))){
// 			t._checkTextAndProps(items, newProps);
			
// 			// 선택 요소들이 텍스트일 경우 MangoText 를 추려내어 item 으로 설정
// 			items.some(c => {
// 				if(c instanceof MangoText){
// 					item = c;
// 					return true;
// 				}
// 			});
// 		// 선택 요소가 모두 기본선일 경우 모든 속성 나오게 하기
// 		}else if(items.every(item => (item instanceof BasicLine))){
// 			var props = Object.keys(items[0].constructor._props);
// 			props.forEach(function (prop) { return newProps.push(prop); });
			
// 			let i:number;
// 			for(i=0; i<newProps.length; i++){
// 				//Colors 제거
// 				if(newProps[i] == "colors"){
// 					newProps.splice(i, 1);
// 					i--;
// 				}
// 			}
// 		}else{
			
// 			// 색상 값이 존재할 경우, 선택 요소들 중 아이콘 -> 도형 -> 프레임 -> 그룹 -> 선 순서로 선택하도록 한다.
// 			if(colors && colors.length){
// 				items.some(c => {
// 					if(c instanceof Icon || c instanceof Figure || c instanceof ImageFrame || c instanceof Group || c instanceof Line){
// 						item = c;
// 						return true;
// 					}
// 				});
// 			}
			
// 			// 그림자 속성 체크 후 추가
// 			shadowColor = t._checkShadow(items, newProps);
		
// 			// 윤곽선 속성 체크 후 추가 ( 도형, 프레임 )
// 			strokeColor = t._checkStroke(items, newProps);
			
// 			// 모서리 속성 체크 후 추가 ( 도형, 프레임 )
// 			t._checkRounded(items, newProps);
			
// 			// 보정 속성 체크 후 추가 ( 이미지, 프레임 )
// 			t._checkAvailableFilter(items, newProps);
			
// 			// 이미지 프레임일 경우
// 			if(t._isImageFrame(items)){
				
// 				// 프레임 배경색상 속성 체크 후 추가
// 				backPanelColor = t._checkBackPanelColor(items, newProps);
				
// 				// 내부 불투명도 속성 체크 후 추가
// 				t._checkInnerAlpha(items, newProps);
				
// 				// 내부 요소 색상 속성 체크 후 추가
// 				innerColors = t._checkInnerIconColor(items, newProps);
				
// 				// 내부 윤곽선 속성 체크 후 추가
// 				innerStrokeColor = t._checkInnerStroke(items, newProps);
				
// 			}else if(t._isPicture(items)){ // 이미지일 경우 가장자리 흐리게 속성 추가
// 				newProps = newProps.concat([
// 					"range", "activeGradation", "directionRound", 
// 					"directionLeft", "directionRight", "directionTop", "directionBottom", 
// 					"directionBottomLeft", "directionBottomRight", "directionTopLeft", "directionTopRight"
// 				]);
// 			}
// 		}
		
// 		// 크기 고정이 아닌 요소들은 속성창에서 크기 설정창이 나오도록 합니다.
// 		if(items.every(item => item.maintainAspectRatioEnable))
// 			newProps = newProps.concat(["width", "height", "rotation", "maintainAspectRatio", "maintainAspectRatioEnable"]);
		
// 		if(items.every(function(item){
// 			return item instanceof Video || (item instanceof ImageFrame && item.frameMode == ImageFrame.VIDEO);
// 		})){
// 			newProps = newProps.concat([
// 				"autoPlay", "loopPlay", "duration", "currentTime", "videoData",
// 				"mute", "endTime", "playbackRate", "liveCurrentTime"
// 			]);
			
// 			newProps.push("videoPlayTime");
// 			newProps.push("videoVolume");
// 			newProps.push("isPlaying");
// 		}
		
// 		while(prop = newProps[0]){
// 			// 그룹일 경우 포토에디터는 넣지 않음
// 			if(!/imageEditor|selectedItem/.test(prop))
// 				availProps.push(prop);
			
// 			newProps.shift();
// 		}
		
// 		newProps = null;
		
// 		return {
// 			item, 
// 			itemColors : {
// 				colors,
// 				shadowColor,
// 				strokeColor,
// 				innerColors,
// 				innerStrokeColor,
// 				backPanelColor
// 			}
// 		};
// 	}
	
// 	/**
// 	 * @private
// 	 * CommonProperty부터 모든 자식들의 visible을 보이지 않게 설정합니다.
// 	 */
// 	private _allChildsInvisible(startIdx?:number){
// 		let i = 2
		
// 		if(!isNull(startIdx))
// 			i = startIdx;

// 		while(this.getChildAt(i)){
// 			this.getChildAt(i).setVisible(false);
// 			i++;
// 		}
// 	}

// 	/**
// 	 * @private
// 	 * 선택된 요소들을 판별하여 ContentTitle의 즐겨찾기, 잠금, 그룹에 대한 설정값을 반환합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택된 아이템들
// 	 */
// 	private _checkBtnStatus(items){
// 		let i, b,
// 			item, t = this,
// 			buttonStatus = [],
// 			data, contentData,
// 			useEffect, frameData,
// 			group = "group",
// 			imgLock = "imgLock" ,
// 			lock = "lock", un = "un",
// 			bookmark = "bookmark",
// 			videoEffect = "videoEffect",
// 			ed = InstanceManager.Editor,
// 			isLock = ed.isLock(), // 현재 선택된 아이템들 중 잠금이 있는지
// 			isVLock = ed.isvLock(); // 현재 선택된 아이템들 중 동영상 효과 없음이 있는지
			
// 		// 2021.07.07 개별요소 효과가 있을경우 보여주지 않음.
// 		useEffect = items.some(function(item){
// 			if(item.contentData.effect && item.contentData.effect.use)
// 				return true;
// 			else
// 				return false;
// 		});

// 		if(items.length > 1){
// 			if(!isLock) // 현재 선택된 애들 중 잠금이 있을 경우 그룹버튼은 출력하지 않도록 한다.
// 				buttonStatus.push(ed.isInvolvedGroup() ? un + group : group);

// 			if(!useEffect)
// 				buttonStatus.push(isVLock ? un + videoEffect : videoEffect);
			
// 			//현재 선택된 애들이 전부 ImgLock(Picture || Video)이 가능한 오브젝트일 경우
// 			if(t._checkImgLockObject(items))
// 				buttonStatus.push(t._checkImgLockItem(items) ? un + imgLock : imgLock);
// 		}else{
			
// 			item = items[0];

// 			if(MangoUtil.checkPossibleBookmark(item) && (data = MangoUtil.getItemInfo(item))){
// 				if(!/BFI|BLI|BIF/.test(data.objGroup)) // 기본 요소들이 아닐 경우 즐잧 버튼 추가
// 					buttonStatus.push(t.getParent().getView(bookmark).isBookmarked(data.idx || data.id || data.objId) ? un + bookmark : bookmark);
// 			}
		
// 			if(!isLock){ // 잠금된 아이템일 경우 잠금 버튼 나오게 함
// 				// 선택된 아이템의 부모가 MangoCanvas가 아닐 경우만
// 				if(!(item.getParent() instanceof MangoCanvas))
// 					buttonStatus.push(ed.isInvolvedGroup() ? un + group : group);
// 				else if(item instanceof Group)
// 					buttonStatus.push(un + group);
// 			}
			
// 			if( (item instanceof Picture || item instanceof Video ||
// 					item instanceof Icon || item instanceof Figure) && !(item instanceof QrCode)){
// 				buttonStatus.push(t._checkImgLockItem(items) ? un + imgLock : imgLock);
// 			}
			
// 			data = contentData = item.contentData;
			
// 			if(data.data)
// 				data = data.data;
			
// 			data = data.itemInfo;
			
// 			if(item instanceof ImageFrame)
// 				frameData = contentData.imgData || (contentData.iconData && contentData.iconData.data) || contentData.movData;
			
// 			// 기본 이미지 프레임에 사진이 넣었을 경우 추천 태그 버튼이 나와야 하기에 contentData에 imgData가 있을 경우도 조사 
// 			if(data || frameData){
// 				if(item instanceof ImageFrame && frameData)
// 					data = frameData.itemInfo;

// 				if(MangoUtil.isSimilar(data)){
// 					buttonStatus.push("searchSimilar");
// 					//buttonStatus.push("tag");
// 				}else{
// 					if(data && data.imgId)
// 						buttonStatus.push("searchAISimilar");
// 				}
// 			}
			
// 			if(!t._clickedGroup && item instanceof Chart)
// 				buttonStatus.push("changeChartLayout");
// 			/// 2022.02.15 표 레이아웃 변경 기능 추가
// 			if(!t._clickedGroup && item instanceof TableEditor && !item.cellMode)
// 				buttonStatus.push("changeTableEditorLayout");

// 			// 2020.10.12 jk-- 각 요소에 비디오 효과 버튼이 추가됨
// 			// 2021.07.07 개별요소 효과가 있을경우 보여주지 않음.
// 			if((!t._clickedGroup || (t._clickedGroup === item)) && !isUndefined(contentData.disableVideoEffect) && !useEffect)
// 				buttonStatus.push(contentData.disableVideoEffect ? un + videoEffect : videoEffect);
// 		}
// 		buttonStatus.push(t._checkLockItem(items) ? un + lock : lock);
		
// 		if(!isLock)
// 			t._changeLock(ed.cantBeUsed());

// 		return buttonStatus;
// 	}

// 	/**
// 	 * @private
// 	 * 선택된 아이템이 중에 "이미지잠금"처리가 가능한 오브젝트인지 검사하기
// 	 * 
// 	 * @return {boolean}
// 	 */
// 	private _checkImgLockObject(items){
// 		let i;
// 		for(i=0; i<items.length; i++){
// 			if(!(items[i] instanceof Picture) && !(items[i] instanceof Video)
// 					&& !(items[i] instanceof Figure) && !(items[i] instanceof Icon) && items[i] instanceof QrCode )
// 				return false;
// 		}
		
// 		return true;
// 	}

// 	/**
// 	 * @private
// 	 * 선택된 아이템들 중에 "이미지잠금"처리가 되어있는 아이템이 있는지 검사합니다.
// 	 * 
// 	 * @return {boolean}
// 	 */
// 	private _checkImgLockItem(items){
// 		let item,
// 			index = 0,
// 			lock = false;

// 		while(item = items[index]){
// 			if(item.contentData){
// 				if(item.contentData.imgLock)
// 					lock = true;
// 			}

// 			if(lock)
// 				break;

// 			index++;
// 		}
		
// 	//	this._changeLock(lock);
// 		return lock;
// 	}

// 	/**
// 	 * @private
// 	 * 선택된 아이템들 중에 "잠금"처리가 되어있는 아이템이 있는지 검사합니다.
// 	 * 
// 	 * @return {boolean}
// 	 */
// 	private _checkLockItem(items){
// 		let item,
// 			index = 0,
// 			lock = false;

// 		while(item = items[index]){
// 			if(item instanceof Group)
// 				lock = item.contentData.lock; //this._checkLockItem(item);
// 			if(item instanceof MGMap) {
// 				if (item.contentData.mapObjData && item.contentData.mapObjData.lock)
// 					lock = true;
// 				else if(item.contentData.lock)
// 					lock = true;
// 			} else if(item.contentData){
// 				if(item.contentData.lock)
// 					lock = true;
// 			}

// 			if(lock)
// 				break;

// 			index++;
// 		}
		
// 		this._changeLock(lock);
// 		return lock;
// 	}

// 	/**
// 	 * @private
// 	 * 선택된 요소가 잠금 상태가 변경될 때 lockElement 의 visible 값을 변경해줍니다.
// 	 * 
// 	 * @param {boolean} lock - 현재 요소의 lock 상태
// 	 */
// 	private _changeLock(lock){
// 		this._lockElement[(lock ? "clear" : "set") + "Style"](DISPLAY, DISPLAY_NONE);
// 		this.setEnabled(!lock);
// 	}

// 	/**
// 	 * 현재 선택되어있는 아이템들을 반환합니다.
// 	 * Group은 자식들을 조사하여 content 별로 분해합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택되어진 아이템들
// 	 */
// 	private _getContents(items){
// 		let i, n,
// 			item,
// 			t = this,
// 			contents = [];

// 		for (i = 0; i < items.length; i += 1){
// 			item = items[i];

// 			if(item instanceof Group){
// 				t._clickedGroup = item;
// 				contents = contents.concat(item.getObjectsInGroup()); //t._getContents(item.contentData.objects));
// 			}else
// 				contents.push(item);
// 		}

// 		return contents;
// 	}

// 	/**
// 	 * @private
// 	 * 현재 선택되어져있는 객체가 extendProps 로 가지고 있는 속성들을 조사합니다.
// 	 * 해당 속성들을 조사하며 extendProps 실행시 type으로 가지고 있던 함수를 토대로 PropertyView의 자식 인스턴스를 생성하고
// 	 * 생성된 인스턴스에 prop 값을 설정합니다.
// 	 * 
// 	 * @param {object} c - 에디터에서 선택된 객체
// 	 * @param {array} availableChildsName - 여러 PropertyMenu들 중 해당 파라메터와 동일한 PropertyMenu 자식들만 화면에 출력하는 값
// 	 * @param {array} checkProps - 해당 파라메터와 동일한 속성 명에 대한 값만 비교하도록 합니다.
// 	 * 		ex / width, height, rotation 값 같은 경우 동일한 아이템의 크기를 늘이거나 줄일 때 변경이 필요하나 그 외의 속성들은 변경이 필요 없음
// 	 * @param {string} mixColor - 여러 아이템 선택 시 각 색상값들이 다를 경우 
// 	 */
// 	private _createProperties(c:any, availableChildsName?:string[], checkProps?:string[], itemColors?:any){
// 		let o:string, type,
// 			oLower:string,
// 			value, index,
// 			i, n, numIndex,
// 			property, t = this,
// 			cellMode = undefined,
// 			propertyAdded = false,
// 			invisibleProperties = {}, // 특정 PropertyMenu 는 화면에 출력되지 않게 하도록
// 			otype = c.contentData.otype,
// 			menuForName = t._menuForName[otype],
// 			props:any = c.constructor._props;
		
// 		// 해당 요소의 
// 		if(!menuForName)
// 			menuForName = t._menuForName[otype] = {};
		
// 		// tableEditor일 경우만
// 		if(c instanceof TableEditor)
// 			cellMode = c.cellMode;

// 		for (o in props){
			
// 			oLower = o.toLowerCase();
			
// 			// 1. checkProps 값이 존재하며 속성 명 o가 checkProps에 존재하지 않으면 검사하지 않는다.
// 			// 2. 텍스트의 exColors를 가져오지 않도록 설정. 텍스트와 색상을 수정할 수 없는 요소들을 선택하였을 경우에만 exColors를 가져오도록 함
// 			if(checkProps && checkProps.indexOf(o) < 0) // || (!availableChildsName && o == "exColors"))
// 				continue;
			
// 			//UISVGContent 중에 strokeable에 해당하지 않은 Object의 stroke 속성 설정을 제거합니다.
// 			if(c instanceof UISVGContent && !c.isStrokeable() && o.indexOf("stroke") > -1)
// 				continue;
				
// 			//UISVGContent 중에 qrCode에 해당하지 않은 Object의 qrCode 속성 설정을 제거합니다.
// 			if( !(c instanceof QrCode)  && o.indexOf("qrCode") > -1)
// 				continue;
			
// 			// 기본선일 경우 colors 속성은 보이지 않도록
// 			if(c instanceof BasicLine && /colors/.test(o) && !availableChildsName)
// 				continue;

// 			//exColors가 있는데, o가 colors일 경우 검사할 필요 없습니다.(ColorProperty의 경우에만 해당)
// 			if(availableChildsName){
// 				//if(availableChildsName.indexOf("exColors") > -1 && o == "colors")
// 				//	continue;
				
// 				//TODO 여러 Item 선택 시 현재 관련 로직이 준비되어 있지 않으므로, 크기와 관련된 모든 속성 제거
// 				//if(t._isSizeProperty(o) || o == "maintainAspectRatio" || o == "maintainAspectRatioEnable")
// 				//	continue;
// 			}
			
// 			if(!(type = menuForName[o]))
// 				type = t._getFunctionName(c.constructor._props[o]);
			
// 			// 한번 invisibleProperties에 등록된 property는 이후 for문이 종료되기 전 까지 검사하지 않는다.
// 			if(invisibleProperties[type])
// 				continue;

// 			if(!(property = t["_" + type])){
// 				t["_" + type] = property = new c.constructor._props[o]();
// 				t.addChild(property);
// 				propertyAdded = true;
// 			}
			
// 			if(isBoolean(cellMode)){ // cellMode가 boolean일 경우
// 				if(type.indexOf("table") > -1){
					
// 					// 1. cellMode 이면서 type에 Cell이 없을 경우
// 					// 2. cellMode 가 아니면서 type에 Cell이 있을 경우
// 					if(cellMode) {
// 						if (type == "tableEditor"){
// 							invisibleProperties[type] = true;
// 							property.setVisible(false);
// 							continue;
// 						} else if (type == "tableEditorColor"){
// 							property.drawCellMode(cellMode);
// 						}
// 					} else {
// 						/// 2022.01.27 cellMode false 일때 마우스 오버시 안내 메세지 보여주는 기능 추가
// 						if (type == "tableEditorCell" || type == "tableEditorFont" || type == "tableEditorTextPosition") {
// 							invisibleProperties[type] = true;
// 							property.setVisible(false);
// 							continue;
// 						} else if (type == "tableEditorColor"){
// 							property.drawCellMode(cellMode);
// 						}
// 					}
// 				/// 2022.01.27 cellMode false 일때 마우스 오버시 안내 메세지 보여주는 기능 추가
// 				} else {
// 					if (cellMode) {
// 						if (type == "alpha" || type == "sizeRotation" || type == "animation") {
// 							invisibleProperties[type] = true;
// 							property.setVisible(false);
// 							continue;
// 						}
// 					}
// 				}
// 			}

// 			// availableChildsName 이 존재하며 속성 o가 availableChildsName에 존재하지 않으면 넘기도록 한다.
// 			// 이는 여러 디자인 요소를 선택하였을 경우 수정 가능한 속성만 변경하기 위함
// 			//if(availableChildsName && availableChildsName.indexOf(o) < 0){
// 			if(availableChildsName && availableChildsName.every(function(item){
// 				let reg = new RegExp(item);
// 				if(!reg.test(o))
// 					return true;
// 			})){
// 				property.setVisible(false);
// 				continue;
// 			}

// 			// 속성 o에 해당하는 PropertyMenu명을 저장
// 			if(!menuForName[o])
// 				menuForName[o] = type;

// 			if(itemColors?.[o])
// 				value = itemColors[o];//mixColor;
// 			else
// 				value = c[o];
			
// 			// 컬러 속성인데 value 가 빈 값일 경우는 속성창에서 보이지 않도록 함
// 			if (/colors/.test(o) && (!value || !value.length))
// 				value = PropertyView.PROPERTY_MENU_INVISIBLE;
// 			else if(o == "liveCurrentTime" && availableChildsName) // liveCurrentTime 이면서 availableChildsName 은 다중 선택으로 판단하여 보이지 않게 설정함
// 				value = PropertyView.PROPERTY_INVISIBLE;
				
// 			// 1. value가 PROPERTY_MENU_INVISIBLE 일 경우
// 			// 2. 그룹을 한번 선택 후 내부의 요소들을 선택 할 경우 그룹이 아닌이상은 SizeRoatationProperty가 나오지 않기 위함
// 			// 3. o가 colors인데 value.length가 0인 경우
// 			if(value == PropertyView.PROPERTY_MENU_INVISIBLE || (t._clickedGroup && !(c instanceof Group) && (t._isSizeProperty(o) || t._isLineStrokeProperty(o) || t._isAnimationProperty(o)))){
// 				invisibleProperties[type] = true;
// 				property.setVisible(false);

// 				trace(">>>>>>>>> property menu invisible : " + o + " : " + type);

// 				continue;
// 			}

// 			property.setVisible(true);
// 			property[o] = value;
// 		}
		
// 		// 새로온 속성창이 addChild 되었을 경우 속성들의 위치를 수정합니다.
// 		if(propertyAdded){
// 			index = 1;
		
// 			// property 들을 addChild한 이후에 childOrders에 맞게 위치 시키도록 합니다.
// 			for (i = 0; i < t._childOrders.length; i += 1){
// 				if(property = t["_" + t._childOrders[i]])
// 					t.setChildIndex(property, index++);
// 			}
			
// 			t.setChildIndex(t._lockElement, t.getNumChildren());
// 		}
// 	}

// 	private _createBgProperties(c){
// 		let type, item, 
// 			o, t = this,
// 			data = c.getData();
		
// 		/*
// 		for(o in data){
// 			if(o != "color"){
// 				type = o;
// 				break;
// 			}
// 		}
// 		*/
		
// 		//item.contentData.otype = "bg";
		
// 		t._createProperties(c);
// 	}

// 	/**
// 	 * @private
// 	 * 함수를 파라메터로 받아서 해당 함수의 이름만 검색하여 반환합니다.
// 	 * 
// 	 * @return {string}
// 	 */
// 	private _getFunctionName(func){
// 		let str = func.menuName;
// 	//	if(!str)
// 	//		str = func.toString().match(/^function\s*([^\s(]+)/)[1];
		
// 		str = str.replace(/^[a-z|A-Z]/, function(s){
// 			return s.toLowerCase();
// 		});
		
// 		return str.trim();
// 	}

// 	/**
// 	 * @private
// 	 * 어떤 객체가 이벤트를 dispatch 하였는지 살펴보고 각 객체에 맞는 올바른 데이터 값을 찾아 반환합니다.
// 	 * 
// 	 * @param {event} event - CustomEventEx 이벤트 객체
// 	 * 
// 	 * @return {object}
// 	 */
// 	private _getCorrectValue(event){
// 		let t = this,
// 			data = event.detail,
// 			value,
// 			target = event.target.selfElement;

// 		if(!isUndefined(data.value)){
// 			value = data.value;
			
// 			if(event.target.parentNode.className.indexOf("alpha") > -1)
// 				value = Number(value / 100);
			
// 		}else if(target instanceof TextInputEx)
// 			value = Number(target.getText());
// 		else if(target instanceof Input){
// 			switch (target.getType()){
// 				case "checkbox":
// 					value = event.target.checked;
// 					break;
// 			}
// 		}else if(target instanceof PropertyColor){
// 			value = {
// 				index : event.detail.index,
// 				color : event.detail.color,
// 				sameColor : event.detail.sameColor
// 			};
// 		}
// 		/*
// 		else if(target instanceof PropertySlider){
// 			value = target.value;

// 			if(event.target.parentNode.className.indexOf("alpha") > -1)
// 				value = Number(value / 100);
// 		}
// 		*/
		
// 		return value;
// 	}

// 	/**
// 	 * @private
// 	 * 변경되는 속성이 크기 창과 관련된 속성인지 판별 후 리턴
// 	 * 
// 	 * @return {boolean}
// 	 */
// 	private _isSizeProperty(pName){
// 		let compVal = [HTML_WIDTH, HTML_HEIGHT, "rotation"];
		
// 		if(isArray(pName))
// 			return pName.find(function(item){
// 				return compVal.indexOf(item) > -1;
// 			});
// 		else
// 			return compVal.indexOf(pName) > -1;
// 	}

// 	private _isLineStrokeProperty(pName){
// 		let compVal = ["lineStrokeStartPoint", "lineStrokeStartPointSize", "lineStrokeEndPoint", "lineStrokeEndPointSize", "lineStrokeWidth", "lineStrokeDashArray", "lineStrokeLineCap"];
		
// 		if(isArray(pName))
// 			return pName.find(function(item){
// 				return compVal.indexOf(item) > -1;
// 			});
// 		else
// 			return compVal.indexOf(pName) > -1;
// 	}

// 	private _isAnimationProperty(pName){
// 		let compVal = ["useEffect", "effectInfo"];
		
// 		if(isArray(pName))
// 			return pName.find(function(item){
// 				return compVal.indexOf(item) > -1;
// 			});
// 		else
// 			return compVal.indexOf(pName) > -1;
// 	}

// 	/**
// 	 *  @private
// 	 *  undoData의 objects에 데이터를 추가합니다.
// 	 * 
// 	 *  @param {object} item - 현재 선택되어져있는 아이템
// 	 *  @param {object} undoData - undoData
// 	 *  @param {string} pName - 변경된 속성 명
// 	 *  @param {object} value - 변경되려는 새로운 값
// 	 *  @param {object} pastValue - 변경되기 이전의 값
// 	 *  @param {string} oName - undo 시 실행될 명령
// 	 */
// 	private _undoDataAddObject(item, undoData, pName?:string, value?:{index:number}, pastValue?:object, oName?:string){
// 		let t = this,
// 			objects;

// 		if(!undoData)
// 			return;

// 		objects = undoData.objects;

// 		if(item instanceof Chart){
// 			objects.push({
// 				data : item.contentData,
// 				undoValue : pastValue,
// 				redoValue : value,
// 				propertyName : pName,
// 				originIdx : -1
// 			});
// 		}else if(item instanceof MGMap){
// 			item.contentData.changed = pName;
// 			objects.push({
// 				data : item.contentData,
// 				undoValue : pastValue,
// 				redoValue : value,
// 				propertyName : pName,
// 				originIdx : -1
// 			});
// 		}else if(item instanceof Group){
// 			/**
// 			 * Group은 하나의 Object
// 			 * 색상의 경우 개별 지정을 할 수 밖에 없는 구조라서, 개별 지정 하지만,
// 			 * color를 제외한 나머지 undo/redo의 경우 Group에 직접 지정합니다.
// 			 */
// 			if(oName == "o_colors"){
// 				let items = item.getObjectsInGroup();
// 				for(let i=0; i<items.length; i++){
// 					let eachItem = items[i];
// 					objects.push({
// 						data : eachItem.contentData, 
// 						undoValue : pastValue,
// 						redoValue : value,
// 						propertyName : pName,
// 						originIdx : -1
// 					});
// 				}
// 			}else{
// 				item.contentData.changed = pName;
// 				objects.push({
// 					data : item.contentData,                                                             
// 					undoValue : pastValue,
// 					redoValue : value,
// 					propertyName : pName,
// 					originIdx : -1
// 				});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
// 			}
// 		}else if(oName === "c_property"){
// 			item.contentData.changed = pName;
// 			objects.push({
// 				data : item.contentData,
// 				undoValue : pastValue,
// 				redoValue : value,
// 				propertyName : pName,
// 				originIdx : -1
// 			});
// 		}else if(oName === "c_table"){
// 			item.contentData.changed = pName;
// 			objects.push({
// 				data : item.contentData,
// 				undoValue : pastValue,
// 				"value" : value,
// 				propertyName : pName,
// 				originIdx : -1
// 			});
// 		}else{
// 			objects.push({
// 				data : item.contentData,
// 				originIdx : value ? value.index : -1
// 			});
// 		}
// 	}
	
// 	/**
// 	 * @private
// 	 * items 들이 ImageFrame 객체인지 검사합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * 
// 	 * @returns {boolean}
// 	 */
// 	private _isImageFrame(items:any[]):boolean{
// 		return items.every(item => item instanceof ImageFrame);
// 	}
	
// 	/**
// 	 * @private
// 	 * items 들이 Picture 객체인지 검사합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * 
// 	 * @returns {boolean}
// 	 */
// 	private _isPicture(items:any[]):boolean{
// 		return items.every(item => item instanceof Picture);
// 	}
	
// 	/**
// 	 * @private
// 	 * items 들이 3개의 텍스트 인스턴스인지 조사 후 해당 클래스의 속성들을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 */
// 	private _checkTextAndProps(items:any[], newProps:string[]):void{
		
// 		// 텍스트 관련 3개의 인스턴스 중 모두 동일한 class 를 찾은 후 속성을 추가 합니다.
// 		[MangoText, ClipText, SVGText].some(instance => {
// 			if(items.every(item => item instanceof instance)){
// 				let props:string[] = Object.keys(items[0].constructor._props);
// 				props.forEach(prop => newProps.push(prop));
// 				return true;
// 			}
// 		});
// 	}
	
// 	/**
// 	 * @private
// 	 * 색상 속성이 가능한 요소들인지 검사 후 색상 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 */
// 	private _checkColors(items:any[], newProps:string[]):string[]{
		
// 		let colors:string[] = MangoUtil.getMixColor(items, "colors");
		
// 		if(colors && colors.length)
// 			newProps.push("colors");
			
// 		return colors;
// 	}
	
// 	/**
// 	 * @private
// 	 * 그림자 속성이 가능한 요소들인지 검사 후 그림자 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 */
// 	private _checkShadow(items:any[], newProps:string[]):string[]{
// 		let colors:string[] = null;
		
// 		if(items.every(item => {
// 			return item instanceof Picture || item instanceof UISVGContent || item instanceof BasicLine || item instanceof Group;
// 		})){
// 			newProps.push("shadow");
			
// 			colors = MangoUtil.getMixColor(items, "shadowColor");
// 		}
		
// 		return colors;
// 	}
	
// 	/**
// 	 * @private
// 	 * 링크 속성이 가능한 요소들인지 검사 후 링크 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 */
// 	private _checkLink(items:any[], newProps:string[]):void{
// 		if(items.every(item => item.constructor._props.link))
// 			newProps.push("link");
// 	}
	
// 	/**
// 	 * @private
// 	 * isRounded, isFrameRounded 요소들인지 검사 후 모서리 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 */
// 	private _checkRounded(items:any[], newProps:string[]):void{
// 		if(items.every((item:{isRounded?:Function, isFrameRounded?:Function}) => {
// 			if(item.isRounded?.() || item.isFrameRounded?.())
// 				return true;
// 		})){
// 			newProps.push("radius");
// 		}
// 	}
	
// 	/**
// 	 * @private
// 	 * strokeable 요소들인지 검사 후 윤곽선 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 * 
// 	 * @returns {array}
// 	 */
// 	private _checkStroke(items:any[], newProps:string[]):string[]{
// 		let colors:string[];
		
// 		if(items.every((item:{isStrokeable:Function}) => {
// 			if(item.isStrokeable && item.isStrokeable())
// 				return true;
// 		})){
// 			["stroke", "strokeColor", "strokeWidth"].forEach(prop => newProps.push(prop));
			
// 			colors = MangoUtil.getMixColor(items, "strokeColor");
// 		}
		
// 		return colors;
// 	}
	
// 	/**
// 	 * @private
// 	 * 선택한 요소들이 프레임 배경색상을 가지고 있다면 해당 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 * 
// 	 * @returns {array}
// 	 */
// 	private _checkBackPanelColor(items:any, newProps:string[]):string[]{
// 		let colors:string[];
		
// 		if(items.every((item:{backPanelColor}) => {
// 			return item.backPanelColor != PropertyView.PROPERTY_MENU_INVISIBLE;
// 		})){
// 			newProps.push("backPanelColor");
			
// 			colors = MangoUtil.getMixColor(items, "backPanelColor");
// 		}
		
// 		return colors;
// 	}
	
// 	/**
// 	 * @private
// 	 * 선택한 요소들이 필터 속성을 가지고 있다면 보정 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 */
// 	private _checkAvailableFilter(items:any[], newProps:string[]):void{
// 		// 선택된 요소들이 모두 프레임(사진)일 경우 보정 속성 출력하기 위함
// 		if(items.every(item => {
// 			if(item instanceof Picture || (item instanceof ImageFrame && item.contentData.frameMode == "image"))
// 				return true;
// 		})){
// 			[
// 				"basicFilter", "hueFilterRange", "vignetteFilterRange", "blurFilterRange", "saturationFilterRange",
// 				"contrastFilterRange", "brightnessFilterRange", "activeSvgFilter", "oldFilter", "emptyFrame"
// 			].forEach(prop => {
// 				newProps.push(prop);
// 			});
// 		}
// 	}
	
// 	/**
// 	 * @private
// 	 * 선택한 요소들이 모두 프레임일 경우 내부 사진 불투명도 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 */
// 	private _checkInnerAlpha(items:any[], newProps:string[]):void{
// 		newProps.push("innerAlpha");
// 	}
	
// 	/**
// 	 * @private
// 	 * 선택한 요소들이 모두 프레임 + 아이콘일 경우 내부 요소 색상 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 * 
// 	 * @returns {array}
// 	 */
// 	private _checkInnerIconColor(items:any[], newProps:string[]):string[]{
// 		let colors:string[];
		
// 		if(items.every(item => {
// 			return item.contentData.frameMode == "icon";
// 		})){
// 			newProps.push("innerColors");
			
// 			colors = MangoUtil.getMixColor(items, "innerColors");
// 		}
		
// 		return colors;
// 	}
	
// 	/**
// 	 * @private
// 	 * 선택한 요소들이 모두 프레임 + 아이콘 + 윤곽선일 경우 내부 윤곽선 속성을 추가합니다.
// 	 * 
// 	 * @param {array} items - 현재 선택한 요소들
// 	 * @param {array} newProps - 화면에 출력하려는 속성들
// 	 * 
// 	 * @returns {array}
// 	 */
// 	private _checkInnerStroke(items:any[], newProps:string[]):string[]{
// 		let colors:string[];
		
// 		if(items.every(item => {
// 			return item.contentData.frameMode == "icon" && item.isInnerStrokeable?.();
// 		})){
// 			["innerStroke", "innerStrokeColor", "innerStrokeWidth"].forEach(prop => {
// 				newProps.push(prop);
// 			});
			
// 			colors = MangoUtil.getMixColor(items, "innerStrokeColor");
// 		}
		
// 		return colors;
// 	}
	
// 	///////////////////////////////////////////////////////////////////////////////
// 	//
// 	//	public methods
// 	//
// 	///////////////////////////////////////////////////////////////////////////////
	
// 	/**
// 	 * @public
// 	 * 현재 실행되고 있는 비디오 객체의 state 값을 videoPlayTime 에 설정합니다.
// 	 * 
// 	 * @param {object} videoState - 비디오 객체 및 state 값
// 	 */
// 	public updateVideoState(videoState){
// 		let t = this, view,
// 			data = videoState.video;
			
// 		if(!data)
// 			return;
		
// 		data = data.contentData;
		
// 		if(data.id)
// 			view = t.getPropertyForName("videoPlayTime");
// 		else
// 			view = t.getPropertyForName("background");
			
// 		if(view)
// 			view.videoState = videoState;
// 	}
	
// 	/**
// 	 * @public
// 	 * 현재 선택되어져있는 아이템들의 속성 값들을 업데이트 합니다.
// 	 * 
// 	 * @params {array} props - 업데이트 하려는 속성 명 배열
// 	 */
// 	public reSelectChange(props){
// 		let t = this, item,
// 			items = t.selectedItems;
			
// 		if(items.every(function(item){
// 			return item instanceof Background;
// 		})){
// 			item = items[0];
			
// 			//if(t._selectedBg)
// 			//	t._clearBgSelection();
// 			t.selectBgChange(item, true);
			
// 			//if(t._selectedFg)
// 			//	t._clearFgSelection();
// 			t.selectFgChange(item.getParent().foreground, true);
// 		}else
// 			t.selectChange(this.selectedItems, null, props);
// 	}

// 	/**
// 	 * @private
// 	 * 디자인 요소 선택 시 단수, 복수에 따라 속성메뉴를 출력 함수를 실행합니다.
// 	 *
// 	 * @param {array} items - 선택된 아이템 들
// 	 * @param {object} clickedItem - 선택된 아이템이 그룹일 경우 실제로 클릭한 아이템
// 	 * @param {boolean} addCheckProps - 기본 속성 checkProps 외에 검사할 속성명 배열 값
// 	 */
// 	public selectChange(items, clickedItem, addCheckProps){
// 		let o,
// 			i, n,
// 			t = this,
// 			availProps,
// 			checkProps,
// 			mixShadowColor,
// 			mixColor:any, title,
// 			isNewItem = true,
// 			item, extractItems,
// 			isTableCellMode = false,
// 			pastItems = t.selectedItems;
		
// 	/*	if(items.length > 0 && items[0]._chart.getChartState()){
// 			trace(">>>>>>>>>>>>>>>>>>>>>> chart state : " + items[0]._chart.getChartState());
// 			return;
// 		}*/

// 		//선택된 배경이 있으면 clear
// 		if(t._selectedBg)
// 			t._clearBgSelection();
		
// 		if(t._selectedFg)
// 			t._clearFgSelection();

// 		if(t._selectedAni)
// 			t._clearAniSelection();

// 		// pastItems도 없다면 이미 property들을 visible false한 것이므로 바로 반환
// 		if(!items.length && !pastItems.length)
// 			return;

// 		// items가 없다면 디자인 요소를 아무것도 선택하지 않은 것으로 판단
// 		if(!items.length){
// 			t._clickedGroup = null;
// 			t.selectedItems = items;
// 			t._allChildsInvisible();
// 			return;
// 		}
		
// 		// 이전에 클릭되어진 그룹이 있고 현재 선택되어진것과 동일할 경우 ( 같은 그룹내의 그룹 혹은 요소를 클릭 하였을 때 )
// 		if(t._clickedGroup && clickedItem){
// 			if(t._clickedGroup == items[0])
// 				items = [clickedItem];
// 			else
// 				t._clickedGroup = null;
// 		}else
// 			t._clickedGroup = null;
		
// 		// 이전에 선택되어진 아이템들과 새로 들어온 아이템들이 동일한지 판별 후 동일 아이템들이라면 반환합니다.
// 		if(pastItems.length == items.length){
// 			isNewItem = false;
			
// 			for (i = 0, n = pastItems.length; i < n; i += 1){
// 				if(pastItems[i] !== items[i]){
// 					isNewItem = true;
// 					break;
// 				}
// 			}
			
// 			// 테이블일경우 cellMode 검사
// 			if(items.length == 1 && items[0] instanceof TableEditor)
// 				isTableCellMode = items[0].cellMode;
// 			else if(!isNewItem && items.length == 1){
// 				checkProps = [HTML_WIDTH, HTML_HEIGHT, "rotation"];
				
// 				// Text일 경우 fontSize 추가 검사
// 				if(items[0] instanceof MangoText || items[0] instanceof SVGText || items[0] instanceof ClipText)
// 					checkProps.push(FONT_SIZE);
				
// 				if(items[0] instanceof Picture || items[0] instanceof UISVGContent){
// 					checkProps.push("shadowX");
// 					checkProps.push("shadowY");
// 				}
				
// 				// Group일 경우 checkProps를 Null로 초기화하여, Group의 모든 props를 출력합니다.
// 				if(items[0] instanceof Group)
// 					checkProps = null;
				
// 			}
// 		}

// 		if(checkProps && addCheckProps && addCheckProps.length)
// 			checkProps = checkProps.concat(addCheckProps);

// 		t._common.setVisible(true);
			
// 		// [2019.03.13] GK : (Item 1개 선택 && 본인을 선택)의 경우를 제외하고는 거의 모든 경우에서 visible false가 필요함
// 		if(isNewItem || isTableCellMode)
// 			/// 2022.01.28 cellMode 일때 왼쪽 속성에서 필요없는 속성은 안 보이도록 수정
// 			t._allChildsInvisible(isTableCellMode ? 1 : 2);

// 		t.selectedItems = items.concat();
		
// 		//extractItems = t._getContents(items);
// 		t._common.changeButtonStatus(items);
		
// 		//TextStyle초기화
// 		t._initTextStyle(items);

// 		// 디자인 요소 여러개 선택 시
// 		//if(extractItems.length > 1){
// 		if(items.length > 1){

// 			// 전체 아이템 색상 비교
// 			// 1. 한놈에 여러 색상이 있는데 다를경우는 mix
// 			// 2. 여러놈중 한놈이라도 다른 색상이 있으면 mix
// 			// 3. 하나의 텍스트에서 여러색상이면 mix
// 			// 4. 색상이 하나인놈과 이미지 같은놈이 잡히면 색상 하나 출력
// 			// 5. 차트, 맵, 테이블은 비교대상 제외이면서 적용 제외
// 			// svg 색상은 선택된 모든 svg 색상이 같다면 해당 색상이 출력 그렇지 않다면 ? 출력
			
// 			// 투명도와 모션은 기본으로 추가
// 			availProps = ["alpha", "useEffect", "effectInfo"];
			
// 			// 22.02.16 jk 주석 --
// 			// if(mixColor = MangoUtil.getMixColor(items))
// 			//	mixColor = mixColor.indexOf("mix") > -1;
// 			//item = items[0];
			
// 			let resultProps:{item:any, itemColors:any} = t._getItemForCreateProperty(items, availProps);
			
// 			item = resultProps.item ?? items[0];
			
// 			/*if(items.length == 1 && items[0] instanceof Group){
// 				availProps = availProps.concat([HTML_WIDTH, HTML_HEIGHT, "rotation", "maintainAspectRatio", "maintainAspectRatioEnable"]);
// 				item = items[0];
// 			}*/

// 			// if((availProps.indexOf("shadow") > -1 || availProps.indexOf("shadowColor") > -1) && (mixShadowColor = MangoUtil.getMixShadowColor(items)))
// 			// 	mixShadowColor = mixShadowColor == "mix";
			
// 			t._createProperties(item, availProps, undefined, resultProps.itemColors);
// 			title = Manager.getResourceString("multiSelected");
			
// 			// 다중 선택 시 그룹 버튼 보이기
// 			t._groupMenu.setVisible(true);
// 			t._groupMenu.group = true;
			
// 		//}else if(item = extractItems[0]){ // 한개만 선택 시
// 		}else if(item = items[0]){ // 한개만 선택 시
// 			t._createProperties(item, undefined, checkProps);
// 			if(!t._clickedGroup){
// 				(item instanceof Group) && (t._clickedGroup = item);
// 				(item instanceof Video && item.duration != PropertyView.PROPERTY_MENU_INVISIBLE);
// 				//		(item instanceof Picture || item instanceof Video) && (t._insertBackground.setVisible(true));
				
// 				if(item instanceof Picture || (item instanceof Video && item.url != PropertyView.PROPERTY_MENU_INVISIBLE))
// 					t._insertBackground.setVisible(true);
// 				/// 2022.02.10 표 셀모드 변경 버튼 추가
// 				if(item instanceof TableEditor)
// 					t._tableEditorControlCellMode.setVisible(true);
// 			}
			
// 			// 선택 요소가 그룹일 경우 그룹 버튼 안보이기
// 			if(item instanceof Group){
// 				t._groupMenu.setVisible(true);
// 				t._groupMenu.group = false;
// 			}else
// 				t._groupMenu.setVisible(false);
			
// 			title = MangoUtil.getContentTitle(item, true);
// 		}
		
// 		t._contentTitle.title = title;
// 		t._contentTitle.changeButtonVisible(t._checkBtnStatus(items));
// 	}
	
// 	public selectBgChange(bg:any, updateProps:any){
// 		let t = this,
// 			bgChild, bgChildName = "";
		
// 		//그룹 선택 플래그 초기화
// 		if(t._clickedGroup)
// 			t._clickedGroup = null;
		
// 		if(bg && (t._selectedBg != bg || (!isUndefined(updateProps) && updateProps))){
// 			if(t._selectedBg)
// 				t._selectedBg.displaySelectMark(false);
			
// 			//
// 			t._selectedBg = bg;
// 			t._selectedBg.displaySelectMark(true);
			
// 			//
// 			t.selectedItems = [bg];
			
// 			//
// 			t._allChildsInvisible(1);
// 			t._createBgProperties(bg);
			
// 			t._contentTitle.title = MangoUtil.getContentTitle(bg);
// 			t._contentTitle.changeButtonVisible([]);
			
// 			t._changeLock(false);
// 		}
// 	}
	
// 	public selectFgChange(fg:any, updateProps:any){
// 		let t = this;
		
// 		if(t._selectedFg != fg || (!isUndefined(updateProps) && updateProps)){
// 			t._selectedFg = fg;
			
// 			t._createProperties(fg);
// 		}
// 	}
	
// 	/**
// 	 * 파라메터 name에 해당하는 property 인스턴스를 반환합니다.
// 	 * 
// 	 * @param {string} name - 가져올 property 인스턴스 명
// 	 * 
// 	 * ex / ChartCommonProperty - getViewName("chartCommon")
// 	 */
// 	public getPropertyForName(name){
// 		return this["_" + name];
// 	}

// 	/**
// 	 * 파라메터 name에 해당하는 속성명을 기준으로 해당하는 메뉴 인스턴스를 반환합니다
// 	 * 
// 	 * @param {string} name - 가져올 메뉴의 속성 명
// 	 * ex / getViewForMenuName("chartCommon") -> ChartCommonProperty 인스턴스 반환
// 	 * 
// 	 * @returns {object}
// 	 */
// 	public getPropertyForMenuName(name){
// 		return this._menuForName[name];
// 	}

// 	/**
// 	 * @public
// 	 * Properties의 속성을 갱신해주는 함수
// 	 * 
// 	 * @return {string}
// 	 */
// 	public reGetProperties(items){
// 		let o, prop;
			
// 		for(prop in items){
// 			if(this["_" + prop])
// 				this["_" + prop].reGetProperties(items[prop]);
// 		}
// 	}

// 	///////////////////////////////////////////////////////////////////////////////
// 	//
// 	//	event handlers
// 	//
// 	///////////////////////////////////////////////////////////////////////////////
	
// 	/**
// 	 * @private
// 	 * editor 에서 발생하는 editorPropertyChange 를 받아 선택된 디자인 요소들에 대해 변경된 prop을 설정합니다.
// 	 *
// 	 * @param {event} event - 변경되는 속성, 값
// 	 */
// 	private _editorPropertyChangeHandler(event){
// 		let i = 0,
// 			n, t = this,
// 			prop, propName,
// 			otype,
// 			props = event.properties; // 에디터에서 현재 변경된 속성들
		
// 		for (; i < props.length; i += 1){
// 			prop = props[i];
// 			propName = prop.name;
		
// 			otype = prop.item.contentData ? prop.item.contentData.otype : prop.item.otype;
		
// 			// menuForName은 선택한 객체에 대한 속성메뉴 생성 시 해당 객체에 설정된 extendProps의 type 값들에 대한 private 변수 이름
// 			// 해당 자식 객체의 propName setter 에 변경되어진 값을 설정합니다.
			
// 			if(!isUndefined(t._menuForName[otype]) && !isUndefined(t._menuForName[otype][propName]))
// 				t["_" + t._menuForName[otype][propName]][propName] = prop.value;
// 			else
// 				continue;
// 		}
// 	}
	
// 	/**
// 	 * @private
// 	 * propertyChange 이벤트를 capture 형태로 받은 후 undoData 를 생성하도록 하는 핸들러 입니다.
// 	 * 
// 	 * @param {event} event - CustomEventEx 객체
// 	 */
// 	private _saveUndoDataHandler(event){
// 		let t = this, pName,
// 			undoData, value,
// 			detail = event.detail;
	
// 		// undoData 를 만들지 않을 경우나 undoData가 있다면 반환
// 		if((!isNull(detail.saveUndoData) && !detail.saveUndoData) || detail.undoData)
// 			return;
		
// 		trace(">>>>>>>>>> property capture view : " + event.type + "<<<<<<<<<<<<<<");
	
// 		detail.undoData = CanvasDoStack.saveSlideData();
// 	}
	
// 	/**
// 	 * @private
// 	 * 자식 객체들에서 변경되는 속성들에 대해 현재 선택된 selectedItems에 변경된 값을 설정합니다.
// 	 * 
// 	 * @param {event} event - CustomEventEx 속성 변경 이벤트
// 	 */
// 	private _propertyChangeHandler(event){
// 		let t = this,
// 			item, target,
// 			value,
// 			i=0, j=0,
// 			arrValue,
// 			pastValue, undoValue,
// 			detail = event.detail,
// 			dPastValue = detail.pastValue,
// 			pName = detail.propertyName,
// 			oName = detail.operationName,
// 			undoData = detail.undoData,
// 			noSetValue = detail.noSetValue,
// 			items = t.selectedItems; // 현재 에디터에서 선택되어져있는 객체들
	
// 		trace(">>>>>>>>>> property bubbles view : " + event.type + " ");
		
// 		// 2021.07.07
// 		// propertySlider의 경우에 input에서 focusout을 에디터영역을 클릭하였을 경우
// 		// items가 없어서 이 경우에는 applyTargets를 통해서 items를 설정.
// 		if(!items.length && detail.applyTargets)
// 			items = detail.applyTargets;
		
// 		//배경의 Property 동작의 경우 별도의 함수에서 처리합니다.
// 		if(t._selectedBg){
// 			if(oName == "foreground"){
// 				t._fgPropertyChangeHandler(event);
// 				return;
// 			}
			
// 			t._bgPropertyChangeHandler(event);
// 			return;
// 		}
		
// 		// 사용자 업로드 중인 요소가 있을 경우는 리턴
// 		if(items.some(function(item){
// 			return item.uploadLoading;
// 		}))
// 			return;
		
// 		// 공통 속성 메뉴에서의 이벤트일 경우
// 		if(event.target.selfElement instanceof CommonProperty){
// 			if(pName.indexOf("Flip") > -1){
// 				for(i=0; i < items.length; i += 1){
// 					item = items[i];
// 					//2021.01.18 브라우저 버그로 인해 flip 적용이 안되는 부분에서 will-change적용 후 flip되도록 설정
// 					target = (item instanceof Picture) ? item._getImageElement() : item.getChildAt(0).element;
	
// 					if(!target.style.willChange)
// 						HtmlUtil.setStyle(target, "will-change", "transform");
	
// 					if(!noSetValue){
// 					item.flip(pName == "verticalFlip" ? "v" : "h");
// 					item.changeAngleAfterFlip();
// 					}
					
// 					t._undoDataAddObject(item, undoData); 
// 				}
				
// 				// 반전은 한번에 하나의 요소만 변경 가능하기에 
// 				event.target.selfElement.changeElementFlipState(items[0]);
// 				// InstanceManager.Editor.objectHandleAllocater(items[0]);
	
// 				//2021.01.18 다중선택 시 추가
// 				if(items.length == 1){
// 					//그룹안에 있는 요소를 flip할 때에는 objectsHandleAllocater타도록 함.
// 					//objectHandleAllocater를 타면 위치가 틀어짐.
// 					if(!(items[0].getParent() instanceof Group))
// 						InstanceManager.Editor.objectHandleAllocater(items[0]);
// 					else
// 						InstanceManager.Editor.objectsHandleAllocater(items[0]);
// 				} else{
// 					//다중 선택 시 operationName을 변경.
// 					detail.operationName = "o_flips";
// 					InstanceManager.Editor.objectsHandleAllocater(items);	
// 				}
				
// 			} else
// 				InstanceManager.CanvasWrapper[pName](event);
// 		}else{
			
// 			value = t._getCorrectValue(event);
			
// 			for (i=0; i < items.length; i += 1){
// 				item = items[i];
				
// 				if( (item instanceof Group && t._isSizeProperty(pName)) || item instanceof ImageFrame )
// 					item.savePreSize();
	
// 				if(isArray(pName)){ // 속성 명이 배열 값일 경우 ex / 차트의 글꼴 크기와 같이 하나의 속성이 여러개의 속성을 변경 할 경우
// 					if(isArray(value))
// 						arrValue = value;
	
// 					for(j = 0 ; j < pName.length ; j += 1){
						
// 						pastValue = !isUndefined(dPastValue) ? dPastValue : item[pName[j]];
// 						value = arrValue ? arrValue[j] : value;
	
// 						if(!noSetValue){
// 							if(isArray(pastValue) && pastValue.length > 1){
// 								item[pName[j]] = pastValue.map(function(item, index){
// 									return {
// 										color : value.color,
// 										index : index
// 									};
// 								});
		
// 								undoValue = pastValue.map(function(item, index){
// 									return {
// 										color : value.color,
// 										index : index
// 									};
// 								});
// 							}else{
// 								item[pName[j]] = value;
// 								undoValue = value;
// 							}
// 						}
	
// 						t._undoDataAddObject(item, undoData, pName[j], undoValue, pastValue, oName);
// 					}
// 				}else{
// 					if (oName === "c_table"){
// 						pastValue = JSON.parse(JSON.stringify(item.contentData));
						
// 						if(dPastValue && (pName == "fontFamily" || pName ==  "fontSize"))
// 							pastValue.tableObjData.layout["table" + pName.slice(0, 1).toUpperCase() + pName.slice(1)] = dPastValue;
// 					}else
// 						pastValue = !isUndefined(dPastValue) ? dPastValue : item[pName];
	
// 					if (oName === "m_colorProps" || oName === "m_commonProps" ){
// 						let mData = item.contentData.mapObjData ? item.contentData.mapObjData.Data ? item.contentData.mapObjData.Data : item.contentData.mapObjData.mapData : item.contentData.Data;
// 						for ( let m = 0 ; m < mData.length ; m++ ) {
// 							if ( pName === "mapColor" )
// 								mData[m].color = value.color;
// 							else if ( pName === "mapColors" && mData[m].label == value.data.label )
// 								mData[m].color = value.color;
// 							else if ( pName === "labelColor" )
// 								mData[m].labelColor = value.color;
// 							else if ( pName === "showMapLabel" )
// 								mData[m].localLabel = value;
// 							else if ( pName === "showDataLabel" )
// 								mData[m].Selected = value;
// 						}
// 					}
					
// 					//
// 					let valueLength,
// 						objValues = item[pName];
						
// 					// objValues 가 undefined 일 경우 이게 실제 getter 의 값이 undefined 인지
// 					// getter 가 없는지에 따라 동작이 달라져야 하기에 _props 구문에서 pName 값이 있는지를 검사 후 
// 					// getter 의 존재유무에 따라 값을 적용하거나 넘기도록 합니다.
// 					// getter 가 없는 경우는 값 적용 및 undo 에도 넣으면 안되기에 추가함
// 					if(isUndefined(objValues) && !item.constructor._props[pName])
// 						continue;
						
// 					// 배열 값이 0일 경우에는 넘기기
// 					if(isArray(objValues)){
// 						if(!(valueLength = objValues.length))
// 							continue;
// 					}else
// 						valueLength = 1;
					
// 					if(!noSetValue){
// 						if(pName == "colors" && isObject(value)){
// 							if(!isUndefined(item.colors)){
								
// 								// 1. 텍스트 & 기본선이 아닐 경우
// 								// 2. 텍스트, 기본선이라면 index 값이 0일 경우에만
// 								if(
// 									(isUndefined(item.fontFamily) && !(item instanceof BasicLine)) || 
// 									((!isUndefined(item.fontFamily) || item instanceof BasicLine) && !value.index)
// 								)
// 									item[pName] = value;
// 								else
// 									continue; // undo 에도 쌓지 않고 넘기기 위함
// 							}
// 						}else if((valueLength > 1) &&((t.selectedItems.length == 1 && t.selectedItems[0] instanceof Group) || t.selectedItems.length > 1)){
// 							for(j=0; j<valueLength; j++){
// 								item[pName] = {
// 									index : j,
// 									color : value.color
// 								};
// 							}
// 						}else
// 							item[pName] = value;
// 					}
// 					t._undoDataAddObject(item, undoData, pName, value, pastValue, oName);
// 				}
// 			}
	
// 			if(t._isSizeProperty(pName)){
// 				if(item instanceof Group){
// 					item.resizingTraceGroup();
// 					item.renewalTraceData();
// 				}else{
// 					// 크기 변경시 resize가 필요한 아이템들을 위함 ex Chart, Map
// 					if(pName.indexOf("rotation") < 0 && item.resize)
// 						items.forEach(item => item.resize());
// 				}
				
// 				/*
// 				 * 아이콘 크기 변경시 윤곽선 모서리 둥글게 갱신
// 				 */
// 				if( item instanceof UISVGContent && item.isStrokeable() && 
// 						(item.contentData.stroke || item.contentData.radius ) ){
// 					item.adjustStrokeRadiusObject();
// 				}
// 				/*
// 				 * 이미지 프레임 크기 갱신
// 				 */
// 				if( item instanceof ImageFrame && item.isFlexible() && !item.contentData.maintainAspectRatio ){
// 					item.adjustViewBox();
// 					item.resizingInnerImgNSWE();
// 				} else if( item instanceof ImageFrame && item.isFlexible() && item.contentData.maintainAspectRatio){
// 					item.adjustViewBox();
// 					item.resizingInnerImgEdge();
// 				}
// 				if(items.length == 1)
// 					InstanceManager.Editor.objectHandleAllocater(item);
// 				else
// 					InstanceManager.Editor.objectsHandleAllocater(items);
// 			}
// 		}
	
// 		//변경된 데이터가 없으면, Undo에 쌓지 않습니다.
// 		if(undoData && undoData.objects.length){
// 			CanvasDoStack.pushNewOperate(detail.operationName, "", JSON.stringify(undoData), 0);
	
// 			if(isString(pName))
// 				pName = [pName];
	
// 			if(/color|t_innerHTML|o_transforms/i.test(detail.operationName) || (isArray(pName) && pName.some(function(name){
// 				return /color/i.test(name);
// 			})))
// 				InstanceManager.CanvasController.changedMainColors();
// 		}
// 	}
	
// 	private _fgPropertyChangeHandler(event){
// 		let t = this, 
// 			detail = event.detail,
// 			item = t._selectedFg,
// 			undoData:{
// 				savedSlideData:any,
// 				objectData:any,
// 				property:string,
// 				id:string
// 			},{
// 				propertyName : pName,
// 				operationName : oName,
// 				value
// 			} = detail;
		
// 		if(pName == "color")
// 			item["borderColor"] = value.color;
// 		else
// 			item[pName] = value;
			
// 		if(detail.undoData){
// 			undoData = {
// 				savedSlideData : detail.undoData.savedSlideData,
// 				objectData : item.getData(),
// 				id : item.getParent().element.id,
// 				property : pName == "color" ? "borderColor" : pName
// 			};
			
// 			CanvasDoStack.pushNewOperate(oName, "", JSON.stringify(undoData), 0);
// 		}
// 	}
	
// 	private _bgPropertyChangeHandler(event){
// 		let t = this, 
// 			undoData,
// 			o:string,
// 			prop, propValue,
// 			detail = event.detail,
// 			item = t._selectedBg,
// 			oName = "s_background",
// 			slideId = item.getParent().element.id,
// 			childName, childData, newChildData,
// 			pName = detail.propertyName, value = detail.value;
		
// 		//
// 		if(pName == "color")
// 			item[pName] = value.color;
// 		else if(pName){
// 			prop = pName;
// 			childData = item.getChildData();
// 			childName = item.getChildName();
			
// 			//타이밍에 따라 배경이 아닌 Property 값이 들어올 수 있습니다(방지)
// 			if(!childName)
// 				return;
			
// 			//convert filter
// 			if(pName.toLowerCase().indexOf("filter") > -1 && pName != "filterColors" && pName != "colorFilterRange"){//filter data initialize
// 				prop = "filter";
				
// 				if(pName == "activeSvgFilter"){
// 					//실행하지 않습니다.
// 					if(value)
// 						return;
// 					else
// 						propValue = {};
// 				}else{
// 					if(pName == "basicFilter"){
// 						propValue = {};
						
// 						for(o in PictureUtil.BasicFilterList.nFilter1){
// 							//if(o == "brightness" || o == "contrast" || o == "saturation" || o == "blur" || o == "vignette" || o == "hue")
// 							propValue[o+"FilterRange"] = value[o];
// 						}
// 					}else{
// 						propValue = JSON.parse(JSON.stringify(childData));
// 						propValue = (propValue["filter"]) ? propValue["filter"] : {};
						
// 						//propValue 설정된 FilterRange외에 다른 FilterRange에 초기값이 없으면 초기값 설정
// 						//FilterRange 초기값인 filter1으로 비교
// 						for(o in PictureUtil.BasicFilterList.filter1){
// 							if(isNull(propValue[o + "FilterRange"]))
// 								propValue[o + "FilterRange"] = PictureUtil.BasicFilterList.filter1[o];
// 						}
						
// 						propValue[pName] = value;
// 					}
// 				}
// 				//filter1일 경우 데이터 초기화
// 				if(PictureUtil.checkActiveFilterNum(propValue) == "filter1")
// 					propValue = {};
// 			}else if(pName.toLowerCase().indexOf("svgcolor") > -1){//svgColor data initialize
// 				prop = "svgColors";
				
// 				propValue = JSON.parse(JSON.stringify(childData));
// 				propValue = (propValue["svgColors"]) ? propValue["svgColors"] : {};
// 				propValue[value.index] = value.color;
// 			}else if(pName.toLowerCase().indexOf("filtercolors") > -1){//filterColor data initialize			
// 				propValue = JSON.parse(JSON.stringify(childData));
// 				propValue = (propValue["filterColors"]) ? propValue["filterColors"] : ["transparent", "transparent", "transparent"];
// 				propValue[value.index] = value.color;
// 			}else if(pName.toLowerCase().indexOf("colormix") > -1){//colormix data initialize			
// 				propValue = JSON.parse(JSON.stringify(value));
// 			}else if(pName.toLowerCase().indexOf("shadow") > -1){//문제가 많이 발생하는 DropShadow를 여기서 정리해버립니다.
// 				//
// 				if(pName == "shadowX")
// 					propValue = value / item.getWidth();
// 				else if(pName == "shadowY")
// 					propValue = value / item.getHeight();
// 				else if(pName == "shadowOpacity")
// 					propValue = value / 100;
// 				else
// 					propValue = value;
				
// 			}else if(pName == "opacity") // convert opacity
// 				propValue = value/100;
// 			else
// 				propValue = value;
			
// 			newChildData = JSON.parse(JSON.stringify(childData));

// 			if(pName.toLowerCase().indexOf("colormix") > -1){ // 사진 색감 필터에서만 쓰임
// 				newChildData.blend = propValue.blend;
//                 newChildData.filterColors = propValue.colors;
// 				newChildData.colorFilterRange = propValue.range;
// 			}else
// 				newChildData[prop] = propValue;
			
// 			item[childName] = newChildData;
// 		}
		
// 		if(detail.undoData){
// 			undoData = {};
// 			undoData[slideId] = {
// 				slideData : JSON.parse(JSON.stringify(item.getData())),
// 				savedSlideData : detail.undoData.savedSlideData.background
// 			};
			
// 			CanvasDoStack.pushNewOperate(oName, "", JSON.stringify(undoData), 0);
// 		}
// 	}
	
// 	/**
// 	* @private
// 	* 자식 객체들에서 발생하는 blur 이벤트를 받아 undo, redo 데이터를 생성하도록 합니다.
// 	* 
// 	* @param {event} event - blur 이벤트
// 	*
// 	private _propertyBlurHandler(event){
// 		let t = this, menu;
// 		target = event.target.selfElement;
		
// 		menu = target;
// 		while(!(menu instanceof PropertyMenu)){
// 			target = menu;
// 			menu = menu.getParent();
// 		}
		
// 		menu.blured(target, event);
// 	};*/


// 	protected _scrollHandler(event){
// 		let t = this, cpList, outsideTTList;
		
// 		if(!t.getParent()._contentPane)
// 			return;
		
// 		super._scrollHandler(event);
// 		//PropertyView._super._scrollHandler.call(t, event);
		
// 		//ColorPanel 조절
// 		cpList = document.getElementsByClassName("rMateH5__ColorPanel");
// 		if(cpList){
// 			for(let i=0; i<cpList.length; i++){
// 				let cp = cpList[0].selfElement;
// 				cp.setPxStyle("marginTop", event.delta * -1);
// 			}
// 		}
		
// 		//OutSidePanel ToolTip위치 조절
// 		outsideTTList = document.getElementsByClassName("rMateH5__MangoToolTip outsidePanel");
// 		if(outsideTTList){
// 			for(let i=0; i<outsideTTList.length; i++){
// 				let tt = outsideTTList[i].selfElement;
// 				tt.setPxStyle("marginTop", event.delta * -1);
// 			}
// 		}
// 	}

// 	/**
// 	 * @private
// 	 */
// 	private _vlockChangeHandler(event){
// 		let t = this,
// 			visible = t._lockElement.getVisible(),
// 			targets = InstanceManager.Targets;
		
// 	//	t._changeLock(!visible);
		
// 		if(targets && targets.length > 0)
// 			t._contentTitle.changeButtonVisible(t._checkBtnStatus(targets));
// 	};

// 	/**
// 	 * @private
// 	 */
// 	private _lockChangeHandler(event){
// 		let t = this,
// 			visible = t._lockElement.getVisible(),
// 			targets = InstanceManager.Targets;
		
// 		t._changeLock(!visible);
		
// 		if(targets && targets.length > 0)
// 			t._contentTitle.changeButtonVisible(t._checkBtnStatus(targets));
// 	}

// 	/**
// 	 * @private
// 	 */
// 	private _imgLockChangeHandler(event){
// 		let t = this,
// 	//		visible = t._lockElement.getVisible(),
// 			targets = InstanceManager.Targets;
		
// 	//	t._changeLock(!visible);
		
// 		if(targets && targets.length > 0)
// 			t._contentTitle.changeButtonVisible(t._checkBtnStatus(targets));
// 	}
	
// 	/**
// 	 * @private
// 	 */
// 	private _samePropertyChangeHandler(event){
// 		let i, j,
// 			t = this,
// 			prop:string,
// 			data:{
// 				color:string,
// 				changedData,
// 				x:number,
// 				y:number,
// 				blur:any,
// 				opacity:number
// 			},
// 			contentName:string,
// 			type, reg, dataArr,
// 			undoPropName = "",
// 			detail = event.detail,
// 			value = event.detail.value,
// 			undoData = detail.undoData,
// 			spData = event._samePropertyData;
		
// 		type = spData.type;
// 		reg = spData.usedRegExp;
// 		dataArr = spData.preSavedDataArr;
		
// 		undoPropName = "all_props";
		
// 		for(i=0; i<dataArr.length; i++){
// 			let contentData,
// 				o, upperO, result,
// 				savedData = dataArr[i],
// 				object = document.getElementById(savedData.id);
			
// 			//object가 있을 경우 object에 데이터를 적용하고 없을경우 contentData만 변경합니다.
// 			if(object){
// 				object = object["selfElement"];
// 				contentData = object["contentData"];
// 			}else
// 				contentData = DataManager.getData(savedData.id);
				
// 			for(o in savedData){
// 				if(o == "id")
// 					continue;
				
// 				if(o == "innerHTML"){
// 					//InnerHTML의 경우 sameColor, sameFont에 따라 innerHTML과 비교할 result 값이 달라집니다.
// 					switch(type){
// 						case "color" :
// 							result = value.color;
// 						break;
// 						case "font" :
// 							result = value + ", " + TextUtil.DEFAULT_FONT_FAMILY;
// 						break;
// 					}
					
// 					if(object)
// 						object["setInnerHTML"](savedData.innerHTML.replace(reg, result));
// 					else
// 						contentData.innerHTML = savedData.innerHTML.replace(reg, result);
// 				}else if(o == "colors"){
// 					let colorNum;

// 					result = value.color;
					
// 					for(j=0; j<savedData[o].length; j++){
// 						colorNum = savedData[o][j].id.replace(/[^\d].+[^\d]/g, "") * 1;
						
// 						if(object)
// 							object["colors"] = {index:colorNum, color:result};
// 						else{
// 							let svgData = contentData.data.svg;
// 							svgData[colorNum].fill = result;
// 						}
// 					}
// 				}else if(o == "typeAColors"){
// 					let colorNum;

// 					result = value.color;
					
// 					for(j=0; j<savedData[o].length; j++){
// 						//colors
// 						colorNum = savedData[o][j].group.replace(/[^\d].+[^\d]/g, "") * 1;
						
// 						if(object){
// 							if(savedData.colors)
// 								colorNum += savedData.colors.length;
							
// 							object["colors"] = {index:colorNum, color:result};
// 						}else{
// 							let svgData = contentData.data.svgColors;
// 							svgData[colorNum].svgColors = result;
// 						}
// 					}
// 				}
// 				else if(o == "chartLayout"){
// 					//InnerHTML의 경우 sameColor, sameFont에 따라 innerHTML과 비교할 result 값이 달라집니다.
// 					switch(type){
// 						case "color" :
// 							result = value.color;
// 						break;
// 						case "font" :
// 							result = value + ", " + TextUtil.DEFAULT_FONT_FAMILY;
// 						break;
// 					}
					
// 					result = JSON.parse(JSON.stringify(savedData[o]).replace(reg, result));
					
// 					if(!ObjectUtil.objectCompare(contentData.data[o], result)){
// 						if(object)
// 							object["layout"] = result;
		
// 						contentData.data[o] = result;
// 					}
// 				}else if(o == "tableLayout" || o == "tableData"){
// 					//InnerHTML의 경우 sameColor, sameFont에 따라 innerHTML과 비교할 result 값이 달라집니다.
// 					switch(type){
// 						case "color" :
// 							result = value.color;
// 						break;
// 						case "font" :
// 							/// 2022.02.25 표의 경우 DEFAULT_FONT_FAMILY를 넣지 않는다. 
// //							result = value + ", " + TextUtil.DEFAULT_FONT_FAMILY;
// 							result = value;
// 						break;
// 					}
					
// 					prop = o.toLowerCase().replace("table", "");
// 					result = JSON.parse(JSON.stringify(savedData[o]).replace(reg, result));
					
// 					if(!ObjectUtil.objectCompare(contentData.tableObjData[prop], result)){
// 						if(object)
// 							object[prop] = result;
						
// 						contentData.tableObjData[prop] = result;
// 					}
// 				}else if(o == "mapLayout" || o == "mapData"){
// 					//InnerHTML의 경우 sameColor, sameFont에 따라 innerHTML과 비교할 result 값이 달라집니다.
// 					switch(type){
// 						case "color" :
// 							result = value.color;
// 						break;
// 						case "font" :
// 							result = value + ", " + TextUtil.DEFAULT_FONT_FAMILY;
// 						break;
// 					}
					
// 					prop = o.toLowerCase().replace("map", "");
// 					contentName = (prop == "layout") ? "mapLayout" : "Data";
// 					result = JSON.parse(JSON.stringify(savedData[o]).replace(reg, result));
					
// 					if(!ObjectUtil.objectCompare(contentData[contentName], result)){
// 						if(object)
// 							object[prop] = result;
						
// 						contentData[contentName] = result;
// 					}
// 				}else{
// 					switch(o){
// 						case "color" :
// 						case "strokeColor" :
// 						case "shadowColor" :
// 						case "backPanelColor" :
// 						case "lineStrokeColor" :
// 							result = value.color;
// 						break;
// 						case "textStrokeColor" :
// 						case "textShadowColor" :
// 						case "textStrokeSecondColor" :
// 							o = o.replace("Color", "");
// 							upperO = o.slice(0,1).toUpperCase() + o.slice(1).replace("Second", "");
							
// 							data = TextUtil["parse" + upperO](contentData[o]);
// 							data.color = value.color;
							
// 							result = TextUtil["combine" + upperO](data.color, data.x, data.y, data.blur, data.opacity);
// 						break;
// 						default :
// 							result = value;
// 					}
					
// 					if(object)
// 						object[o] = result;
// 					else
// 						contentData[o] = result;
// 				}
// 			}
			
// 			//에러가 발생하였지만 증상은 확인 못함, 에러가 발생하지 않게만 처리
// 			if(undoData && (data = undoData.objects[i]))
// 				data.changedData = JSON.parse(JSON.stringify(contentData));
// 		}

// 		if(undoData){
// 			CanvasDoStack.pushNewOperate(undoPropName, "", JSON.stringify(undoData), 0);
// 			InstanceManager.CanvasController.changedMainColors();
// 		}
// 	}
	
// 	/**
// 	 * @private
// 	 * functionExecution 이벤트 핸들러
// 	 * 속성창에서 현재 선택된 아이템들의 특정 함수들을 실행하려 할 때
// 	 * 
// 	 * @param {CustomEvent} event - customevent 객체
// 	 */
// 	private _functionExecutionHandler(event){
// 		let t = this,
// 			items = t.selectedItems,
// 			detail = event.detail,
// 			funcName = detail.funcName,
// 			funcParam = detail.funcParam,  // funcParam 은 배열값이어야 한다
// 			needChangeProps = detail.needChangeProps, // 배열 값
// 			isBackgroundItem = false;
			
// 		items.forEach(function(item){
// 			if(item instanceof Background){
// 				if(item.bgContent)
// 					item = item.bgContent.getContent();
// 			}
			
// 			if(item && item[funcName]){
// 				if(!isArray(funcParam))
// 					funcParam = [funcParam];
					
// 				item[funcName].apply(item, funcParam);
// 			}
// 		});
		
// 		// 속성창에서 현재 선택된 아이템들의 특정 함수를 실행하여 아이템의 상태가 변경되었을 때
// 		// 변경된 내용이 해당 이벤트를 발생한 속성창이 아닌 다른 속성창의 상태가 변경되어야 할 경우
// 		// detail 객체에 needChangeProps 를 배열 값으로 설정하여 변경되어야 할 속성명을 설정하도록 함
// 		// ex > VideoVolumeProperty
// 		//if(needChangeProps)
// 		//	t.callLater(t.reSelectChange, needChangeProps);
// 	}
// }