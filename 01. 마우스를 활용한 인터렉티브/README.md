# 01. 마우스를 활용한 인터렉티브  

## 1. mouse move 값 활용  
- 마우스 위치에 따라 오브젝트 제어  
- e.clientX, e.clientY  

```js
window.onload = function() {
  let h1 = document.getElementsByTagName('h1')[0];
  let cursor_item = document.getElementsByClassNa('cursor_item')[0];

  window.addEventListener('mousemove', mouseFuncfalse);

  function mouseFunc(e) {
    h1.innerHTML = "x: " + e.clientX + " y: " + clientY;
    cursor_item.style.transform = "translate(" + clientX +"px," + e.clientY + "px)";
    // console.log(e.clientX, e.clientY);
  }
}
```

<hr>

## 2. requestAnimationFrame (loop, 자연스러운 움직임)  

```js
function loop() {
  window.requestAnimationFrame(loop);
}
```

<hr>

## 3. tranform, translate 값 변경  
```js
function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  h1.innerHTML = "x: " + x + " mx: " + mx;
  cursor_item.style.transform = "translate(" + mx +"px" +my + "px)";

  window.requestAnimationFrame(loop);
}
```

<hr>

## 4. transition, easing(가속도)  
- 검색 : css3 easeing  

```css
.cursor_item {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: red;
  top: 0;
  left: 0;
  margin: -50px 0 0 -50px;
  transition: all 1s ease-in-out;
}
```

```js
window.onload = function() {
  cursor_item = document.getElementsByClassNa('cursor_item')[0];
  
  window.addEventListener('click', mouseFunc, false);
  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;
    cursor_item.style.transform = "translate(" + x +"px"+ y + "px)";
  }
}

```

