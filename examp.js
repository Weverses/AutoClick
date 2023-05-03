async function simulateClick() {
    while (true) {
      // 第一步模拟点击，点击坐标为 (x, y)
      const buttons1 = document.getElementsByClassName('color999');
      console.log('找到', buttons1.length, '个 class 为 color999 的元素');
      for (let i = 0; i < buttons1.length; i++) {
        const button1 = buttons1[i];
        // 判断元素是否隐藏，如果是则显示
        if (button1.offsetParent === null) {
          console.log('元素隐藏，将其显示');
          button1.style.display = 'block';
          button1.style.visibility = 'visible';
        }
        // 判断元素是否为“ 课程说明：3390元 ”按钮，如果是则模拟点击
        if (button1.innerText === '课程说明：3390元') {
          console.log('找到“ 课程说明：3390元 ”按钮');
          button1.click();
          console.log('已模拟点击“课程说明：3390元”按钮');
          break;
        }
      }
  
      // 等待 1 秒
      console.log('等待 0.001 秒');
      await new Promise(resolve => setTimeout(resolve, 0));
  
      // 第二步模拟点击，点击 class 为 flex1 的元素
      const buttons = document.getElementsByClassName('flex1');
      console.log('找到', buttons.length, '个 class 为 flex1 的元素');
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        // 判断元素是否隐藏，如果是则显示
        if (button.offsetParent === null) {
          console.log('元素隐藏，将其显示');
          button.style.display = 'block';
          button.style.visibility = 'visible';
        }
        // 判断元素是否为“确 定”按钮，如果是则模拟点击
        if (button.innerText === '确 定') {
          console.log('找到“确认”按钮');
          button.click();
          console.log('已模拟点击“确认”按钮');
          break;
        }
      }
  
      await new Promise(resolve => setTimeout(resolve, 1));
    }
  }
  
  simulateClick();
  