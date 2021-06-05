// ==UserScript==
// @name         acfun高级弹幕助手
// @description  高弹增强工具
// @namespace    adhelper
// @version      0.1
// @author       knia
// @include      https://www.acfun.cn/v/ac*
// @icon         data:image/png;base64,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
// @run-at       document-start
// @require https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js
// ==/UserScript==

(function() {
	function dragElement(elmnt) {
		var pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;
		if (document.getElementById(elmnt.id + "header")) {
			/* if present, the header is where you move the DIV from:*/
			document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
		} else {
			/* otherwise, move the DIV from anywhere inside the DIV:*/
			elmnt.onmousedown = dragMouseDown;
		}

		function dragMouseDown(e) {
			e = e || window.event;
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		}

		function elementDrag(e) {
			e = e || window.event;
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}

		function closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}
	var helperBody = `<style>
	#dmkhelper {
		display: none;
		position: absolute;
		top: 420px;
		left: 1100px;
		z-index: 9;
		background-color: #f1f1f1;
		text-align: center;
		border: 1px solid #d3d3d3;
		moz-user-select: -moz-none;
		-moz-user-select: none;
		-o-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		flex-direction: column;
	}

	#dmkhelper p {
		display: flex;
		padding: 5px;
	}

	#dmkhelper button {
		margin: 0 5px;
	}

	#dmkhelperheader {
		padding: 10px;
		cursor: move;
		z-index: 10;
		background-color: #2196F3;
		color: #fff;
		width: 200px;
	}
	.easing-dropdown{
		display: block;
	}
</style>

<div>
	<div id="advanced-dmk-helper"
		style="right: 0px;width: 40px;height: 20px;position: fixed;visibility: visible;cursor: pointer;top: 387px;z-index: 9999;background-color: #fd4c5d;color: white;text-align: center;padding: 1px;">
		高弹</div>
	<div id="dmkhelper">
		<div id="dmkhelperheader">高级弹幕助手</div>
		<p>
			<button class="danmaku-g-button danmaku-g-button-border" id="moveAdd">动作+1</button>
			<button class="danmaku-g-button danmaku-g-button-border" id="moveDel">动作-1</button>
		</p>
		<p>
			<button class="danmaku-g-button danmaku-g-button-border" id="moveFill">动作填满</button>
			<button class="danmaku-g-button danmaku-g-button-border" id="moveClear">动作清空</button>
		</p>
		<hr>
		<p>
		<div class="form-item-wrapper flex" style="
			    display: flex;
			    justify-content: center;
			    align-items: center;
			">
			<label class="label" style="
			    flex: 1 1 12%;
			">缓动函数</label>
			<div class="row flex mgt-10" style="
			    flex: 0 0 35%;
			">
				<div class="component form-item" data-key="font">
					<div class="danmaku-g-select">
						<div class="danmaku-g-select-chosen easing-chosen">
							<span class="danmaku-g-select-search">
								<input class="danmaku-g-select-search-input" style="display: none;">
							</span>
							<span class="danmaku-g-select-selected" data-value="Linear">Linear</span>
							<i class="danmaku-g-select-icon danmaku-g-icon"></i>
						</div>
						<div class="danmaku-g-select-dropdown hidden easing-dropdown">

							<div class="danmaku-g-select-option danmaku-g-select-option-selected" data-value="Linear">Linear
							</div>
							<div class="danmaku-g-select-option" data-value="EaseIn">EaseIn</div>
							<div class="danmaku-g-select-option" data-value="EaseOut">EaseOut</div>
							<div class="danmaku-g-select-option" data-value="EaseInOut">EaseInOut</div>
						</div>
					</div>
				</div>
			</div>
			<button class="danmaku-g-button danmaku-g-button-border" id="applyEasing" style="
			    flex: 1 0;
			">应用</button>

		</div>
		</p>
		<p>
			holder
		</p>
	</div>
</div>
`;
	$('body').append(helperBody);
	$('#advanced-dmk-helper').click(function() {
		$('#dmkhelper').toggle();
	});

	dragElement(document.getElementById(("dmkhelper")));



	function addOneMove() {
		$('.danmaku-g-icon.plus').click();
	}

	function deleteOneMove() {
		if ($('ul.move-tab li').length - 2 > 0) {
			$('.danmaku-g-modal.danmaku-g-modal-confirm').remove();
			$('.danmaku-g-icon.delete').click();
			$('[data-type=confirm].danmaku-g-button').click();
		}
	}

	function fillMoves() {
		for (var i = 0; i < 19; i++) {
			$('.danmaku-g-icon.plus').click();
		}
	}
	//删除全部动作
	function clearMoves() {
		var moveTabs = $('ul.move-tab li').length - 2;
		for (let i = 0; i < moveTabs; i++) {
			$('.danmaku-g-modal.danmaku-g-modal-confirm').remove();
			$('.danmaku-g-icon.delete').click();
			$('[data-type=confirm].danmaku-g-button').click();
			$('.danmaku-g-modal.danmaku-g-modal-confirm').remove();
		}
	}

	//事件绑定
	$('#moveAdd').click(addOneMove);
	$('#moveDel').click(deleteOneMove);
	$('#moveFill').click(fillMoves);
	$('#moveClear').click(clearMoves);


	//缓动函数
	function linear(currentTime, startValue, changeValue, duration) {
		startValue = parseFloat(startValue);
		changeValue = parseFloat(changeValue);
		return parseFloat(changeValue * currentTime / duration + startValue).toFixed(2);
	}

	function easeInQuad(currentTime, startValue, changeValue, duration) {
		currentTime /= duration;
		return changeValue * currentTime * currentTime + startValue;
	}

	function easeOutQuad(currentTime, startValue, changeValue, duration) {
		currentTime /= duration;
		return -changeValue * currentTime * (currentTime - 2) + startValue;
	}

	function easeInOutQuad(currentTime, startValue, changeValue, duration) {
		currentTime /= duration / 2;
		if (currentTime < 1) return changeValue / 2 * currentTime * currentTime + startValue;
		currentTime--;
		return -changeValue / 2 * (currentTime * (currentTime - 2) - 1) + startValue;
	}
	//缓动函数/

	//缓动函数行事件绑定
	$('.easing-chosen').click(function() {
		$('.easing-dropdown').toggleClass('hidden');
	});

	$('.easing-dropdown .danmaku-g-select-option').click(function() {
		$('.easing-dropdown .danmaku-g-select-option-selected').removeClass(
			'danmaku-g-select-option-selected');
		$(this).addClass('danmaku-g-select-option-selected');
		var valSelected = $(this).attr('data-value');
		$('.easing-chosen .danmaku-g-select-selected').text(valSelected).attr('data-value', valSelected);
		$('.easing-dropdown').toggleClass('hidden');
	});

	//点击缓动函数栏的“应用”按钮
	//设定一个flag，点击应用的时候为true，全部结束后重置为false
	//isListening 是否已经启动过监听了 
	var isListening = false;
	var keyFrames = []; //关键帧数组
	$('#applyEasing').click(function() {
		//点击按键绑定监听
		if (!isListening) {
			isListening = true;
			console.log('isListening:' + isListening);
			var inputBoxMoveTime = document.querySelector("[data-key=moveTime] input");
			observeElement(inputBoxMoveTime, "value", function(oldValue, newValue) {

				console.log(oldValue, newValue);
				//$('[data-key=moveTime] input').val(150).focus();
				
				console.log($('[data-key=moveTime] input').val());

			});
		}
		//当只有一个动作的时候插入关键帧tabs
		if ($('ul.move-tab li.move').length == 1) {
			addMoveTabs();
		}

	});

	//监听
	function observeElement(element, property, callback, delay = 0) {
		let elementPrototype = Object.getPrototypeOf(element);
		if (elementPrototype.hasOwnProperty(property)) {
			let descriptor = Object.getOwnPropertyDescriptor(elementPrototype, property);
			Object.defineProperty(element, property, {
				get: function() {
					return descriptor.get.apply(this, arguments);
				},
				set: function() {
					let oldValue = this[property];
					descriptor.set.apply(this, arguments);
					let newValue = this[property];
					if (typeof callback == "function") {
						setTimeout(callback.bind(this, oldValue, newValue), delay);
					}
					return newValue;
				}
			});
		}
	}



	//应用所选函数，批量修改运动信息 doEditTabsFlag为true时方可执行此方法
	//可能引发未知问题：在处理的过程中再次触发监听事件(目前验证没问题，先执行手动点击，随后会正常执行代码点击)
	//1.首次获取原始数据，传入缓动函数
	//2.获得20个关键帧的数据，存储为数组，每一帧数据也要用数组
	//3.循环tabs，通过关键帧数组索引获取当前tab的关键帧数据
	//4.填入当前tab
	//中间关键帧为坐标，需要把上一关键帧的位置填入形成运动
	//分为两个方法：addMoveTabs()添加关键帧 editMoveData()编辑每关键帧的数据
	function addMoveTabs() {
		//TODO:表单data value赋值为fun name
		var easingFun = $('.easing-chosen .danmaku-g-select-option-selected').attr('data-value');
		//获取起始和结束数据
		//$('ul.move-tab li.move[data-index=0]').click();
		//TO-DO:确认move-tab改变后再赋值 干脆默认只存在1个tab 或者强制删除其他tab

		var originData = [];
		originData.duration = $('[data-key=moveTime] input').val();
		originData.startX = $('[data-key=startPosX] input').val();
		originData.startY = $('[data-key=startPosY] input').val();
		originData.endX = $('[data-key=endPosX] input').val();
		originData.endY = $('[data-key=endPosY] input').val();
		originData.rotateX = $('[data-key=animationRotateX] input').val();
		originData.rotateY = $('[data-key=animationRotateY] input').val();
		originData.rotateZ = $('[data-key=animationRotateZ] input').val();
		originData.stretchX = $('[data-key=animationScaleX] input').val();
		originData.stretchY = $('[data-key=animationScaleY] input').val();

		//根据持续时长添加动作数量（关键帧数量）
		//TODO:验证当前动作数量必须为1
		var tabsCount = 1;
		var lastTabDurationIncrement = 0;
		if (originData.duration >= 2000) {
			tabsCount = 20;
		} else if (originData.duration % 100 == 0) {
			//时长小于2000能整除100
			tabsCount = originData.duration / 100;
		} else if (originData.duration < 200) {
			tabsCount = 2;
			lastTabDurationIncrement = originData.durationtabsCount - 100;
		} else {
			//不能整除，多余的添加到最后一个动作 取整parseInt(350/100)=>3;
			tabsCount = parseInt(originData.duration / 100);
			lastTabDurationIncrement = originData.durationtabsCount - tabsCount * 100;
		}
		//传入缓动函数
		keyFrames = []; //关键帧数组
		for (let i = 0; i < tabsCount; i++) {
			keyFrames[i] = [];
		}

		/* currentTime 当前时间 循环中的i
		startValue 起始位置 0
		changeValue 总移动距离 结束位置100
		duration 动画时长 分几步 一般为循环次数-1*/

		//TODO计算每步增量 重新验证一下各个数据的情况
		//2000ms以上的直接等分每帧时长 2000以下的每帧100 末帧+lastTabDurationIncrement
		var stepDuration;
		if (tabsCount == 20) {
			stepDuration = originData.duration / tabsCount;
		} else {
			stepDuration = 100;
		}
		//关键帧数组赋值
		for (let i = 0; i < tabsCount; i++) {
			if (lastTabDurationIncrement != 0 && i == tabsCount - 1) {
				//末帧
				keyFrames[i].duration = stepDuration + lastTabDurationIncrement;
			} else {
				keyFrames[i].duration = stepDuration;
			}

			keyFrames[i].x = linear(i, originData.startX, originData.endX, tabsCount - 1);
			keyFrames[i].y = linear(i, originData.startY, originData.endY, tabsCount - 1);
		}

		for (let i = 0; i < tabsCount - 1; i++) {
			$('.danmaku-g-icon.plus').click();
			//$('[data-key=moveTime] input').val(150).focus();
			//console.log($('[data-key=moveTime] input').val());
		}

		//[Debug]动作数对不上时中止
		/* if (tabsCount != $('ul.move-tab li.move').length) {
			console.log("tabs count incorrect, abort.", tabsCount, $('ul.move-tab li.move').length);
			return false;
		} */



		//验证关键帧数据准确性
		/* for (let i = 0; i < tabsCount; i++) {
			console.log(i, keyFrames[i].duration, keyFrames[i].x, keyFrames[i].y);
		} */



	}

	function editMoveData(keyFrames) {
		//写入动作列表

		var index = $('ul.move-tab li.active').attr('data-index');
		$('[data-key=moveTime] input').val().blur();

	}


})();
