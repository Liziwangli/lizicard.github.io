//card弹窗加载配置
//简单用法
//window.MyNavCard = $MGC();
//高级用法
window.addEventListener("DOMContentLoaded", function () {
    window.MyNavCard = $MGC({
        icon: "img/Popuplogo.png",
        /*
        icon: 可以是头像、网站logo等
        */
        name: "溧子",
        /*
        name: 可是是名字、网站名称等
        */
        info: "遇见是一种福气，不遇见也是。",
        /*
        info: 个性签名、网站口号、信息等，为空或者不设置将不显示
        默认值: 空
        */
        z_index: 9999,
        /*
        不用解释，默认值为9999
        */
        blur: "#write",
        /*
        blur: 想要模糊化处理的页面元素，取值可以是.className（类名）、#idName（id属性值）、tagName（标签名）
        */
        lang: "zh-CN",
        /*
        lang: 语言设置，目前和关闭按钮的文本有关
        默认值: zh-CN
        可选值: zh-CN,zh-TW,en-US
        如果不提供或者提供的不在可选值内，将使用默认值或者使用html页面的lang属性
        */
        mini: true,
        /*
        mini: 迷你按钮，用于重新打开MyukiGCard（在页面底部中间位置）
        默认值: true
        */
        darkmode: 2,
        /*
        darkmode: 夜间模式
        默认值: 1
        可选值: 0、1、2、3
        0: 禁用夜间模式
        1: 跟随系统（如果系统支持夜间模式）
        2: 根据时间，下午6时～上午6时打开夜间模式
        3: 常开夜间模式
        */
        maxWidth: "480px",
        /*
        maxWidth: MyukiGCard的最大宽度
        默认值: 480px
        */
        fontFamily: "",
        /*
        fontFamily: 字体，为空或不设置将使用默认字体
        */
        links: [{
            "title": "个人博客",
            "url": "https://Lizi-nb.cn",
            "type": "primary",

        }, {
            "title": "努力开发中……",
            "url": "",
        }],
        /*
        导航链接列表
        title: 链接的标题
        url: 链接地址
    	
        type: 链接按钮的类型，包括：
        default | primary | secondary | success | danger | waring | info | light | dark | link
        如果不提供type，默认为dafault
    	
        target: 在何处打开链接，包括：
        _blank（新窗口）| _self(默认) | _parent(父框架) | _top(整个窗口) | framename(指定的框架)
        如果不提供target，将使用默认
        */
    });
});

//图片放大操作
function zoom(img) {
    document.body.style.overflow = 'hidden';
    document.getElementsByClassName('myuki-gcard_mini shown')[0].style.display = 'none'
    //创建div显示背景
    var zoomDiv = document.createElement("div");
    zoomDiv.style.position = "fixed";
    zoomDiv.style.top = "0";
    zoomDiv.style.left = "0";
    zoomDiv.style.width = "100%";
    zoomDiv.style.height = "100%";
    zoomDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    zoomDiv.style.zIndex = "999";
    zoomDiv.style.display = "flex";
    zoomDiv.style.justifyContent = "center";
    zoomDiv.style.alignItems = "center";
    //创建img放需要放大的img
    var zoomImg = document.createElement("img");
    zoomImg.src = img.src;
    zoomImg.style.maxWidth = "90%";
    zoomImg.style.maxHeight = "90%";

    zoomDiv.appendChild(zoomImg);

    document.body.appendChild(zoomDiv);

    //点击div时移除该div
    zoomDiv.onclick = function () {
        document.body.style.overflow = '';
        document.body.removeChild(zoomDiv);
        document.getElementsByClassName('myuki-gcard_mini shown')[0].style.display = 'block'
    }
}

//解析地址
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function (r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var lat = r.address.lat//当前经度
        var lng = r.address.lng//当前纬度
        var province = r.address.province //返回当前省份
        var city = r.address.city//返回当前城市
        var district = r.address.district
        var street = r.address.street
        //var localtion = document.getElementById('location')
        console.log(province + city + district + street)
        //localtion.value = province + city + district + street
    }
})