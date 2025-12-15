// 【新增功能】加载进度条逻辑
window.addEventListener('load', function() {
    // 页面加载完成时，进度条快速拉满
    document.getElementById('loading-bar').style.width = '100%';
    
    // 延迟一段时间后隐藏（可选，让用户看到效果）
    setTimeout(function() {
        document.getElementById('loading-bar').style.opacity = '0';
    }, 500); // 0.5秒后隐藏
});

document.addEventListener('DOMContentLoaded', function() {
    // DOM加载完毕（但图片等可能还在加载），进度到 60%
    // 仅在 DOM 内容加载时设置一个初始进度
    if(document.getElementById('loading-bar')) {
        document.getElementById('loading-bar').style.width = '60%';
    }
    
    // 【新增功能】加载更多文章逻辑
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    // 选择所有带有 hidden-post 类的文章卡片
    const hiddenPosts = document.querySelectorAll('.hidden-post'); 
    
    // 检查是否有按钮和隐藏文章
    if (loadMoreBtn && hiddenPosts.length > 0) {
        loadMoreBtn.addEventListener('click', function() {
            hiddenPosts.forEach(post => {
                // 移除 hidden-post 类，使文章显示
                post.classList.remove('hidden-post');
            });
            // 按钮点击后隐藏自己
            loadMoreBtn.style.display = 'none'; 
        });
    }

    // 【新增功能】返回顶部按钮的 JavaScript 逻辑
    let mybutton = document.getElementById("backToTop");

    // 监听滚动事件
    window.onscroll = function() {scrollFunction()};

    // 当用户滚动时，检查是否显示按钮
    function scrollFunction() {
      if (!mybutton) return; // 安全检查，确保按钮存在

      // 如果用户向下滚动超过 20px，则显示按钮，否则隐藏
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
});

