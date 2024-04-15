import React, { Component } from "react";
import "./css/Home.css"; // 引入样式文件

import shuigangImage from '../assets/images/shuigang.png'; // 导入图片
import video from '../assets/video/video.mp4'; 

class Home extends Component {
    render() {
        return (
            <div className="container" style={{height: "100vh", overflow: "auto", display: "flex", flexDirection: "column"}}>
                <div className="text-content">
                    <h1>扎染文化介绍</h1>
                    <p>扎染古称扎缬、绞缬，古代常见的防染印花纺织品有绞缬、蜡缬和夹缬等种类。是汉族民间传统而独特的染色工艺。织物在染色时部分结扎起来使之不能着色的一种染色方法，中国传统的手工染色技术之一。</p>
                    <h2>扎染工艺</h2>
                    <p>扎染工艺分为扎结和染色两部分。它是通过纱、线、绳等工具，对织物进行扎、缝、缚、缀、夹等多种形式组合后进行染色。 其工艺特点是用线在被印染的织物打绞成结后，再进行印染，然后把打绞成结的线拆除的一种印染技术。它有一百多种变化技法，各有特色。如其中的“卷上绞”，晕色丰富，变化自然，趣味无穷。更使人惊奇的是扎结每种花，即使有成千上万朵，染出后却不会有相同的出现。这种独特的艺术效果，是机械印染工艺难以达到的。</p>
                    <h2>扎染非遗传承</h2>
                    <p>2007年，云南大理周城的张仕绅被确定为扎染国家级传承人。 2011年，海安县申请的南通扎染技艺被列入江苏省级非物质文化遗产名录。 2014年，焦宝林被评为南通扎染技艺省级传承人。大理市周城璞真综艺染坊被文化部列入国家级非物质文化遗产生产性保护示范基地。</p>
                </div>
                
                <img src={shuigangImage} alt="" className="right-image" />

                <div className="half-circle"></div>
               
                <video controls autoplay width="640" height="360">
                <source src={video} type="video/mp4" className=".video-container"/>您的浏览器不支持视频标签。</video>
                   




            </div>
        );
    }
}

export default Home;
