window.onload = function () {
  var parent = document.querySelector('.canvas');
  var canvas;
  var ctx;
  var inputList = document.querySelectorAll('input');

  function create() {
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    parent.append(canvas);
  }

  function drawCanvas(code) {
    if (canvas) {
      parent.removeChild(canvas);
    }
    create();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    eval(code);
  }

  for (var i = 0; i < inputList.length; i++) { //遍历节点列表并且绑定事件
    inputList[i].addEventListener("click", function (e) {
      var textarea = this.previousElementSibling;
      drawCanvas(textarea.value);
    })
  }
}