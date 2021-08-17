// import React from "react";

// import TweenOne from "rc-tween-one";
// import BannerAnim, { Element } from "rc-banner-anim";

// import "rc-banner-anim/assets/index.css";
// const BgElement = Element.BgElement;

// const AnimationDemo = () => {
//   return (
//     <BannerAnim prefixCls="banner-user">
//       <Element prefixCls="banner-user-elem" key="0">
//         <BgElement
//           key="bg"
//           className="bg"
//           style={{
//             background: "#364D79",
//           }}
//         />
//         <TweenOne
//           className="banner-user-title"
//           animation={{ y: 30, opacity: 0, type: "from" }}
//         >
//           Ant Motion Banner
//         </TweenOne>
//         <TweenOne
//           className="banner-user-text"
//           animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
//         >
//           The Fast Way Use Animation In React
//         </TweenOne>
//       </Element>
//       <Element prefixCls="banner-user-elem" key="1">
//         <BgElement
//           key="bg"
//           className="bg"
//           style={{
//             background: "#64CBCC",
//           }}
//         />
//         <TweenOne
//           className="banner-user-title"
//           animation={{ y: 30, opacity: 0, type: "from" }}
//         >
//           Ant Motion Banner
//         </TweenOne>
//         <TweenOne
//           className="banner-user-text"
//           animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
//         >
//           The Fast Way Use Animation In React
//         </TweenOne>
//       </Element>
//     </BannerAnim>
//   );
// };

// export default AnimationDemo;
import React from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
// import slide from "../image/slide_1.png";
const { Element } = BannerAnim;
const BgElement = Element.BgElement;
const AnimationDemo = () => {
  return (
    <BannerAnim autoPlay autoPlaySpeed={3000} autoPlayEffect={false}>
      <Element key="aaa" prefixCls="banner-user-elem">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage:
              "url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">
            Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo
          </p>
        </QueueAnim>
        <TweenOne
          animation={{ y: 50, opacity: 0, type: "from", delay: 200 }}
          name="TweenOne"
        >
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>
      <Element key="bbb" prefixCls="banner-user-elem">
        <BgElement
          key="bg"
          className="bg "
          style={{
            backgroundImage:
              "url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></BgElement>

        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">
            Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo
          </p>
        </QueueAnim>
        <TweenOne
          animation={{ y: 50, opacity: 0, type: "from", delay: 200 }}
          name="TweenOne"
        >
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>
    </BannerAnim>
  );
};

export default AnimationDemo;
