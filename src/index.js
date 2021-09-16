import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、追加ボタンクリック後、値を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの子要素に各要素を設定する
  div.appendChild(li);
  console.log(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
