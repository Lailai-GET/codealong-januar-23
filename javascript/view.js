updateView();
function updateView() {
  let html = "";
  for (let i = 0; i < model.products.length; i++) {
    html += /*html*/ `
    <div>${model.products[i].title}</div>
    <div>kr:${model.products[i].price},-</div>
        `;
  }
  document.getElementById("app").innerHTML = html;
}
