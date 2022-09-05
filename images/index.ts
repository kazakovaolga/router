import { Router } from "./router";
import { createLogger, createImage, leftPage } from "./utils";
var router = Router();
var header = document.querySelector('.header');
var root = document.getElementById('root');
var footer = document.getElementById('footer');
router.on(/.*/, createLogger(header, "/.*"), createImage(root, "/.*"), leftPage(footer, "/.*")); //router.on(/.*/, createLogger(header), createImage(root), leftPage(footer,"/.*"));

router.on(function (path) {
  return path === "/contacts";
}, createLogger(header, "/contacts"), createImage(root, "/contacts"), // onEnter    
leftPage(footer, "/contacts") // onLeave
);
router.on("/about", createLogger(header, "/about"), createImage(root, "/about"), // createImage(root,"/about"),    
leftPage(footer, "/about"));
router.on("/about/us", createLogger(header, "/about/us"), createImage(root, "/about/us"), // createImage(root,"/about/us"),
leftPage(footer, "/about/us"));
document.querySelector('body').addEventListener("click", function (event) {
  console.log('event=', event); // const el=event.target;
  // if (!el.matches("a")) {
  //     return;
  // }

  if (event !== null && event.target !== null) {
    var element = event.target;

    if (!element.matches('a')) {
      return;
    }

    ;
    var url = element.getAttribute("href");
    console.log(url);
    router.go(url);
  }

  event.preventDefault(); // let url = event.target.getAttribute("href");
  // router.go(url);
  //unsubscribe();
});