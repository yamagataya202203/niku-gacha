const scenes = [
  document.getElementById("scene1"),
  document.getElementById("scene2"),
  document.getElementById("scene3"),
  document.getElementById("scene4"),
  document.getElementById("scene5")
];

const flash = document.getElementById("flash");
const white = document.getElementById("white");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const gacha = [
  ["次回来店時\n商品券 10,000円",0.05],
  ["次回来店時\n商品券 5,000円",0.1],
  ["次回来店時\n商品券 3,000円",0.8],
  ["次回来店時\n商品券 2,000円",1.5],
  ["次回来店時\n商品券 1,000円",8],
  ["本日の会計\n5,000円割引",0.05],
  ["本日の会計\n3,000円割引",0.5],
  ["本日のお会計\n1000円割引",1],
  ["本日のお会計\n500円割引",10],
  ["次回来店時\n特選5種盛り",0.3],
  ["次回来店時\n特選3種盛り",1.5],
  ["次回来店時\nプレミアム赤身3種盛り",0.8],
  ["次回来店時\n赤身3種盛り",1.3],
  ["次回来店時\n特上厚切り和牛ハラミ",0.8],
  ["次回来店時\n特上和牛ハラミ",1.5],
  ["次回来店時\n和牛ヒレ",0.8],
  ["次回来店時\n柔らか上タン",2],
  ["次回来店時\n柔らか上ロース",2],
  ["次回来店時\n飲める炙りユッケ",10],
  ["次回来店時\n赤身(薄切り)炙りユッケ",10],
  ["次回来店時\n和牛ハラミ炙りユッケ",5],
  ["次回来店時\n赤身炙り刺し",5],
  ["次回来店時\n和牛ハラミ炙り刺し",2],
  ["次回来店時\n赤身炙りたたき",5],
  ["次回来店時\n上赤身炙りたたき",5],
  ["次回来店時\nハラミ炙りたたき",5],
  ["次回来店時\n和牛ハラミ炙りたたき",2],
  ["次回来店時\nロース or カルビ",8],
  ["ランクアップ\nもう1回",10],
];

function draw(){
  let sum = 0;
  const r = Math.random()*100;
  for(let i=0;i<gacha.length;i++){
    sum += gacha[i][1];
    if(r <= sum) return gacha[i][0];
  }
}

function show(n){
  scenes.forEach(s=>s.classList.remove("show"));
  scenes[n].classList.add("show");
}

btn.onclick = () => {

  btn.style.display = "none";

  show(1);
  setTimeout(()=>show(2),1800);
  setTimeout(()=>show(3),3500);

  setTimeout(()=>flash.classList.add("flash-active"),4200);
  setTimeout(()=>white.classList.add("white-active"),4700);

  setTimeout(()=>{
    white.style.opacity = "0";
  },5800);

  setTimeout(()=>{
    show(4);
    result.textContent = draw();
  },6200);
};
