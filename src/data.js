import html from "./asset/image/skills/html.PNG";
import css from "./asset/image/skills/css.png";
import sass from "./asset/image/skills/sass.PNG";
import ex from "./asset/image/skills/ex.png";
import js from "./asset/image/skills/js.PNG";
import mg from "./asset/image/skills/mg.png";
import node from "./asset/image/skills/node.png";
import react from "./asset/image/skills/react.png";
import tw from "./asset/image/skills/tw.png";
import ts from "./asset/image/skills/ts.jpg";
import portfolio from "./asset/image/projects/portfolio.png";
import shop from "./asset/image/projects/shop.jpg";
import tinyzone from "./asset/image/projects/tinyzone.png";
import media from "./asset/image/projects/media.png";
export const projects = [
  {
    name: "S Media",
    imgUrl: media,
    desc: "This social media site has just begun to develope. There are basic functions such as logging in, posting posts...",
    desc_vn:
      "Trang mạng xã hội vừa mới bắt đầu phát triển. Đã có những chứ năng cơ bản như đăng nhập, đăng bài post...",
    tech: "React Js, SASS, Node JS, MongoDB, React Router, Redux Toolkit, Axios, TypeScript...",
    features: "Login, Register, CRUD Post, Display Post,...",
    member: "1",
    linkDemo: "",
    source: "https://github.com/LePhuocSangDev/social-media.git",
  },
  {
    name: "TinyZone-clone",
    imgUrl: tinyzone,
    desc: "Build a movie website based on the website's design: https://tinyzone.to . Completed basic pages such as login, homepage, landing page and movie page",
    desc_vn:
      "Xây dựng website xem phim dựa trên design của trang web: https://tinyzone.to .Đã hoàn thành những trang cơ bản như đăng nhập, trang chủ, landing page và trang thông tin phim.",
    tech: "ReactJs,Tailwind, Node JS, MongoDB...",
    features: "Display Api Data, Responsive, Login, Register,...",
    member: "1",
    linkDemo: "https://github.com/LePhuocSangDev/tinyzone-clone.git",
    source: "tinyzone-clone.vercel.app",
  },
  {
    name: "Personal Portfolio",
    imgUrl: portfolio,
    desc: "Build a personal website based on web-inspired design. Completed the main functions as well as adding mobile responsive",
    desc_vn:
      "Xây dựng trang cá nhân dựa trên thiết kế lấy cảm hứng trên mạng. Đã hoàn thành những chức năng chính, và bản thiết kế cho mobile",
    tech: "ReactJs,Tailwind, Framer Motion, React Router, Rive animation...",
    features: "Dark Mode, Page Transition, Modal, Css Grid...",
    member: "1",
    linkDemo: "https://lephuocsang.dev",
    source: "https://github.com/LePhuocSangDev/portfolio.git",
  },

  {
    name: "LPS Shoes",
    imgUrl: shop,
    desc: "Website selling shoes with beautiful interface, management page and full function. Combination of React Js and Node Js as well as other technologies. In the process of fixing minor bugs and will be completed soon in the future",
    desc_vn:
      "Trang web bán giày với giao diện đẹp mắt, có trang quản lý và đầy đủ chức năng. Kết hợp giữa React Js và Node Js cũng như những công nghệ khác. Đang trong quá trình xử lý những lỗi nhỏ và sẽ sớm hoàn thiện trong tương lai",
    tech: "React Js, SASS, Node JS, MongoDB, React Router, Redux Toolkit, Axios,...",
    features: "Login, CRUD Product, Add to cart, Check out, Admin Dashboard...",
    member: "1",
    linkDemo: "https://polite-cannoli-a1c24e.netlify.app/",
    source: "https://github.com/LePhuocSangDev/e-commerce.git",
  },
];
export const skills = [
  {
    name: "HTML",
    imgUrl: html,
  },
  {
    name: "CSS",
    imgUrl: css,
  },
  { name: "SASS", imgUrl: sass },
  { name: "TypeScript", imgUrl: ts },

  {
    name: "Tailwind CSS",
    imgUrl: tw,
  },
  {
    name: "JavaScript",
    imgUrl: js,
  },
  {
    name: "React Js",
    imgUrl: react,
  },
  {
    name: "Node Js",
    imgUrl: node,
  },
  {
    name: "Express",
    imgUrl: ex,
  },
  {
    name: "MongoDb",
    imgUrl: mg,
  },
];
