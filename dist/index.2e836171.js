!function(){let n=document.querySelector("#html"),r=document.querySelector("#style"),e="\n/* 你好，我是fancy\n*  接下来我将演示一下我的前端功底\n*  首先我要准备一个div\n**/\n#div1{\n    border:1px solid red;\n    width:200px;\n    height:200px;\n}\n/* 接下来我把 div 变成一个八卦图\n*  注意看好咯\n*  首先，把 div 变成一个圆\n**/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/* 八卦是阴阳形成的\n*  一黑一白\n**/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* 加两个神秘的小球 */\n#div1::before{\n    width:100px;\n    height:100px;\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n    border-radius:50%;\n}\n#div1::after{\n    width:100px;\n    height:100px;\n    bottom:0;\n    left:50%;\n    transform:translateX(-50%);\n    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);\n    border-radius:50%;\n}\n/* 这样我们就得到了一个简单的八卦图啦 */\n",d="",a=0,t=()=>{setTimeout((()=>{"\n"===e[a]?d+="<br>":" "===e[a]?d+="&nbsp;":d+=e[a],n.innerHTML=d,r.innerHTML=e.substring(0,a),window.scrollTo(0,99999),n.scrollTo(0,99999),a+1<e.length&&(a+=1,t())}),50)};t()}();
//# sourceMappingURL=index.2e836171.js.map
