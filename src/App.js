import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import wx from 'weixin-js-sdk';
let data = {
  "pdf_id": "bihaizhengshu",
  "dept_id": "1",
  "create_time": "31/8/2020 21:20:17",
  "pdf_url": null,
  "update_time": "21/8/2020 21:20:17",
  "title": "山东碧海标志服装有限公司投标资质荣誉证书",
  "back_image": null,
  "logo_image": "http://measure.3vyd.com//uPic/logosmall.jpg",
  "width": null,
  "height": null,
  "image_url": "https://measure.3vyd.com/bihaizhengshu2/",
  "page_count": 30,
  "desc": "原山东军工服装厂,创建于1985年,占地面积12万㎡,建筑面积4.8万㎡,年产量100多万套的大型西服、标志服装、皮鞋、领带、皮具、家纺、床上用品的生产企业。",
  "share_count": 1857
};
let data1 ={
  "pdf_id": "bihaishouce123",
  "dept_id": "1",
  "create_time": null,
  "pdf_url": null,
  "update_time": null,
  "title": "山东碧海标志服装有限公司产品手册",
  "back_image": null,
  "logo_image": "http://measure.3vyd.com//uPic/logosmall.jpg",
  "width": null,
  "height": null,
  "image_url": "https://measure.3vyd.com/bihaiversion2/",
  "page_count": 74,
  "desc": "原山东军工服装厂,创建于1985年,占地面积12万㎡,建筑面积4.8万㎡,年产量100多万套的大型西服、标志服装、皮鞋、领带、皮具、家纺、床上用品的生产企业。",
  "share_count": 1657
};
let data2 ={
  
    "pdf_id": "bihaixizhuang",
    "dept_id": "1",
    "create_time": null,
    "pdf_url": null,
    "update_time": null,
    "title": "山东碧海标志服装有限公司职业装产品手册",
    "back_image": null,
    "logo_image": "http://measure.3vyd.com//uPic/mingduo9999logo.jpg",
    "width": null,
    "height": null,
    "image_url": "https://measure.3vyd.com/bihaixizhuang/",
    "page_count": 48,
    "desc": "原山东军工服装厂,创建于1985年,占地面积12万㎡,建筑面积4.8万㎡,年产量100多万套的大型西服、标志服装、皮鞋、领带、皮具、家纺、床上用品的生产企业。",
    "share_count": 1153
  
};
function App() {
  function getUrlParam(name, url) {
    let u = arguments[1] || window.location.href,
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        r = u.substr(u.indexOf("?") + 1).match(reg);
    return r != null ? decodeURI(r[2]) : "";
  };
  
  function getConfigData() {
    const id = getUrlParam("id");
    switch (id) {
      case "bihaizhengshu":
        return {
          imageUrl:"https://measure.3vyd.com/bihaizhengshu2/",
          title: "山东碧海标志服装有限公司投标资质荣誉证书",
          pageCount:30,
          width:590
        };
      
      // eslint-disable-next-line no-duplicate-case
      case "bihaishouce123":
          return {
            imageUrl:"https://measure.3vyd.com/bihaiversion2/",
            title:"山东碧海标志服装有限公司产品手册",
            pageCount:74,
            width:822
          };
          break;
        case "bihaixizhuang":
            return {
              imageUrl:"https://measure.3vyd.com/bihaixizhuang/",
              title:"山东碧海标志服装有限公司职业装产品手册",
              pageCount:48,
              width:822
            };
            break;
    
      default:
        break;
    }
  };

  function getShareData() {
    const id = getUrlParam("id");
    switch (id) {
      case "bihaizhengshu":
        return {
          title: "山东碧海标志服装有限公司投标资质荣誉证书", // 分享标题
          desc: "原山东军工服装厂,创建于1985年,占地面积12万㎡,建筑面积4.8万㎡,年产量100多万套的大型西服、标志服装、皮鞋、领带、皮具、家纺、床上用品的生产企业。", // 分享描述
         
          imgUrl: "http://measure.3vyd.com//uPic/logosmall.jpg", // 分享图标
        };
      
      // eslint-disable-next-line no-duplicate-case
      case "bihaishouce123":
          return {
            title: "山东碧海标志服装有限公司产品手册", // 分享标题
            desc: "原山东军工服装厂,创建于1985年,占地面积12万㎡,建筑面积4.8万㎡,年产量100多万套的大型西服、标志服装、皮鞋、领带、皮具、家纺、床上用品的生产企业。", // 分享描述
           
            imgUrl: "http://measure.3vyd.com//uPic/logosmall.jpg", // 分享图标
          };
          break;
        case "bihaixizhuang":
            return {
              title: "山东碧海标志服装有限公司职业装产品手册", // 分享标题
              desc: "原山东军工服装厂,创建于1985年,占地面积12万㎡,建筑面积4.8万㎡,年产量100多万套的大型西服、标志服装、皮鞋、领带、皮具、家纺、床上用品的生产企业。", // 分享描述
             
              imgUrl: "http://measure.3vyd.com//uPic/logosmall.jpg", // 分享图标
            };
            break;
    
      default:
        break;
    }
  };

  useEffect(()=>{
    const url = window.location.href.split('#')[0]
    // alert(url);
    fetch("https://zhlt-api.mondonational.com/api/pdf/initWXJSSDKConfigInfo",{method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({shareUrl:url})}).then(async (res)=>{
      const result = await res.json();
      // alert(JSON.stringify(result))
      wx.config({
        // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: result.appid, // 必填，公众号的唯一标识
        timestamp:result.timestamp , // 必填，生成签名的时间戳
        nonceStr: result.nonceStr, // 必填，生成签名的随机串
        signature: result.signature,// 必填，签名，见附录1
        jsApiList: [
          'onMenuShareAppMessage',
          'onMenuShareTimeline'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(() => {
        //分享给朋友
        wx.onMenuShareAppMessage({
          ...getShareData(),
          link:result.shareUrl,
          success: function () {
            console.log('====================================');
            console.log("分享成功");
            console.log('====================================');
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            console.log('====================================');
            console.log("分享失败");
            console.log('====================================');
          }
        })
      
        //分享到朋友圈
        wx.onMenuShareTimeline({
          ...getShareData(),
          link:result.shareUrl,
          success: function () {
            // 用户确认分享后执行的回调函数
            console.log('====================================');
            console.log("分享成功");
            console.log('====================================');
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            console.log('====================================');
            console.log("分享失败");
            console.log('====================================');
          }
        })
      })
     
    });
    document.title  =getConfigData().title;
   
  },[]);
  
  
  return (
    <div className="App" style={{height:"100vh",width:"100vw"}}>
     <iframe src={`https://zhuchuanwu.github.io/common3d/?params=${encodeURIComponent(JSON.stringify(getConfigData()))}`}
      title={"山东碧海标志服装有限公司"} height="100%" width="100%" id="frame_full" frameborder="0" scrolling="no" 
     onLoad={() => {
      let doc = document.getElementById("iframe").contentWindow.document.getElementsByTagName("body")[0];
      let dom = document.getElementById('IframeInhorBox');
      let x = dom.scrollWidth/doc.scrollWidth;
      this.setState({
        iwidth:dom.scrollWidth/x + 'px',
        iheight:doc.scrollHeight + 'px',
        itransform : x,
        itransformOrigin : '0 0',
      })
      document.getElementById('IframeInhorBox').style.height = doc.scrollHeight*x + 'px';
    }}


     
     ></iframe>
    </div>
  );
}

export default App;
