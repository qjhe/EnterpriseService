/**
 * Created by q on 2016/5/19.
 */
//切换
function fnTab(oNav,aCon,iActive,callback){
    var oElem=oNav.children();
    var aElem=aCon.children();

    //aElem.hide().eq(0).show();

    oElem.each(function(index, element) {
        if(iActive=='click'){
            $(this).click(function(){
                aElem.hide().eq(index).show();
                oElem.removeClass("active").eq(index).addClass("active");
                callback&&callback(this,index);
            });
        }
        if(iActive=='hover'){
            $(this).hover(function(){
                aElem.hide().eq(index).show();
                oElem.removeClass("active").eq(index).addClass("active");
                callback&&callback(this,index);
            },function(){});
        }
    });
}
//table隔行变色
function interColor(className,color,color2){
    $("."+className+" tr:even td").css("background-color",color);  //�ı�ż���б���ɫ*/
    if(color2){$("."+className+" tr:odd td").css("background-color",color2); } //�ı�ż���б���ɫ*/
    $("."+className+" tr:even").attr("bg",color);
    $("."+className+" tr:odd").attr("bg","#fff");
}
//错误提示信息
function errorInfoShow(obj, msg) {
    obj.show();
    if (msg != "") {
        obj.removeClass("es-right").addClass("es-error");
        obj.find("span").html(msg);
    } else {
        obj.removeClass("es-error").addClass("es-right");
        obj.find("span").html(msg);
    }
}
/*修改*/
function modyFun(obj){
    var showWord=$(obj).parent().siblings().find(".es-show-word");
	var hideBtn=$(obj).siblings(".es-mody");
	var hideWord=$(obj).parent().siblings().find(".es-t-text");
	showWord.hide();
	hideWord.val(showWord.text()).show().focus();
	$(obj).hide();
	hideBtn.show();
}
 /*保存*/   
function saveFun(obj){
	var modyBox=$(obj).parent(".es-mody");
	var modyBtn=$(obj).parent(".es-mody").siblings(".es-modBtn");
	var hideWord=$(obj).parent().parent().siblings().find(".es-t-text");
	var showWord=$(obj).parent().parent().siblings().find(".es-show-word");
	var msgTip=$(obj).parent().parent().siblings().find(".es-error-msg");
	var finaVal=$(obj).parent().parent().siblings().find(".es-t-text1");
	showWord.text(hideWord.val());
	modyBox.hide();
	hideWord.hide();
	modyBtn.show();
	showWord.show();
	finaVal.val(hideWord.val())
	msgTip.hide();
}
 /*取消*/   
function acncleFun(obj){
	var modyBox=$(obj).parent(".es-mody");
	var modyBtn=$(obj).parent(".es-mody").siblings(".es-modBtn");
	var hideWord=$(obj).parent().parent().siblings().find(".es-t-text");
	var showWord=$(obj).parent().parent().siblings().find(".es-show-word");
	
	modyBox.hide();
	hideWord.hide();
	modyBtn.show();
	showWord.show();
}
//设置导航栏高度
function setNavHeight(){
    var oNav = $(".es-acc-nav");
    oNav.height( oNav.parent().height() );
}
//x,y 坐标,radius 半径,process 百分比,backColor 中心颜色, proColor 进度颜色, fontColor 中心文字颜色
function DrowProcess(x,y,radius,process,backColor,proColor,fontColor,myCanvas,fontsize){
	fontsize||(fontsize=32);
	var canvas = document.getElementById(myCanvas);
	if (canvas.getContext) {
		var cts = canvas.getContext('2d');
	}else{
		return;
	}
	
	cts.beginPath();  
	// 坐标移动到圆心  
	cts.moveTo(x, y);  
	// 画圆,圆心是45,45,半径45,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针  
	cts.arc(x, y, radius, 0, Math.PI * 2, false);  
	cts.closePath();  
	// 填充颜色  
	cts.fillStyle = backColor;  
	cts.fill();

	cts.beginPath();  
	// 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形  
	cts.moveTo(x, y);  
	// 跟上面的圆唯一的区别在这里,不画满圆,画个扇形  
	cts.arc(x, y, radius, Math.PI * 1.5, Math.PI * 1.5 -  Math.PI * 2 * process / 100, true);  
	cts.closePath();  
	cts.fillStyle = proColor;  
	cts.fill(); 
	
	//填充背景白色
	cts.beginPath();  
	cts.moveTo(x, y); 
	cts.arc(x, y, radius - (radius * 0.145), 0, Math.PI * 2, true);  
	cts.closePath();
	cts.fillStyle = 'rgba(255,255,255,1)';  
	cts.fill(); 
	  
	//在中间写字 
	cts.font = "normal "+fontsize+"px Arial";  
	cts.fillStyle = fontColor;  
	cts.textAlign = 'center';  
	cts.textBaseline = 'middle';  
	cts.moveTo(x, y);  
	cts.fillText(process+"%", x, y);  
	
}
//canvas end
/**
 * kkpager pagination控件设置
 * @param pageNo     页码
 * @param totalPages 总页数
 * @param element    分页位置ID
 * @param callback   点击页码的回调方法
 */
function definedPaginator(pageNo, totalPage, element, callback){
	if(!pageNo){
		pageNo = 1;
	}
	//生成分页
	kkpager.generPageHtml({
		pagerid : element,
		pno : pageNo,
		//总页码
		total : totalPage,
		//总数据条数
		//totalRecords : totalRecords,
		lang : {
			firstPageText : '|<',
			lastPageText : '>|',
			prePageText : '<',
			nextPageText : '>',
			totalPageBeforeText : '共',
			totalPageAfterText : '页',
			totalRecordsAfterText : '条数据',
			gopageBeforeText : '转到',
			gopageButtonOkText : '确定',
			gopageAfterText : '页',
			buttonTipBeforeText : '第',
			buttonTipAfterText : '页',
			isShowTotalRecords : false
		},
		mode : 'click',//默认值是link，可选link或者click
		click : function(page){
			//eval(callback)(page);
			callback&&callback(page);
			this.selectPage(page);//page:当前页
			return false;
		}
	},true);//true:重新初始化分页控件;false:不重新初始化分页控件(默认)
};