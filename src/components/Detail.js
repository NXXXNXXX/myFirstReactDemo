import React, {Component} from "react";
import "./css/normal.css"; // 引入样式文件

class Detail extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-content">
                    <h1>更多细节</h1>
                    <p>扎染有着悠久历史。起源于黄河流域。起源于何时尚无定论。据记载，早在东晋，扎结防染的绞缬绸已经有大批生产。公元408年东晋时期的作品，扎染这种工艺早在东晋时期就已经成熟了。当时绞缬产品，有较简单的小簇花样，如蝴蝶、腊梅、海棠等；也有整幅图案花样，如白色小圆点的“鱼子缬”，圆点稍大的“玛瑙缬”，紫地白花斑酷似梅花鹿的“鹿胎缬”等。 在南北朝时，扎染产品被广泛用于汉族妇女的衣着。唐代是中国古代文化鼎盛时期，绞缬的纺织品甚为流行、更为普遍，“青碧缬衣裙”成为唐代时尚的基本式样。北宋时，绞缬产品在中原和北方地区流行甚广。</p>
                </div>
                <div className="half-circle"></div>
            </div>
        );
    }
}




export default Detail;