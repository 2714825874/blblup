// 【新增功能】返回顶部按钮的 JavaScript 逻辑

// 获取按钮元素
let mybutton = document.getElementById("backToTop");

// 监听滚动事件
window.onscroll = function() {scrollFunction()};

// 当用户滚动时，检查是否显示按钮
function scrollFunction() {
  // 如果用户向下滚动超过 20px，则显示按钮，否则隐藏
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
