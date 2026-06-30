<!DOCTYPE html>
<html>
<head>
<style>
body {margin:0;background:black;overflow:hidden;}
.box {
  width:200px;height:150px;background:pink;
  margin:200px auto;cursor:pointer;
}
.heart {
  position:absolute;
  color:red;
  animation: up 3s linear;
}
@keyframes up {
  from {transform:translateY(0);opacity:1;}
  to {transform:translateY(-500px);opacity:0;}
}
</style>
</head>
<body>

<div class="box" onclick="go()"></div>

<script>
function go(){
  for(let i=0;i<20;i++){
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";
    h.style.left=Math.random()*window.innerWidth+"px";
    h.style.top="80%";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }
}
</script>

</body>
</html>
