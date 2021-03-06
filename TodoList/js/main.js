// 1. 사용자가 input에 입력한 텍스트를 받고
// 2. 새로운 아이템을 만듦 ( 텍스트와 삭제 버튼 같이)
// 3. 새로 만든 아이템을 workout에 추가 하면서,
// 4. input을 초기화

const workout = document.querySelector(".workout");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".add");

// 버튼을 눌렀을 때 이벤트를 처리하는 함수는 앞에 on을 붙여줌
// add라는 이름을 붙일 건데, 앞에 on을 붙여 onAdd로 함수명 짓기
function onAdd() {
    // 1. 사용자가 input에 입력한 텍스트를 받고
    const text = input.value;
    console.log(text);
    if(text === "") {
        input.focus();
        return;
    }

    // 2. 새로운 아이템을 만듦 ( 텍스트와 삭제 버튼 같이 )
    const item = createItem(text); // text를 받았으니

    // 3. 새로 만든 아이템을 workout에 추가 하면서,
    workout.appendChild(item); // workout 안에 item을 자식으로서 추가하는

    // 4. input을 초기화
    input.value = "";
    input.focus(); // 커서를 다시 줌
}

function createItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "items");

    const item = document.createElement("div");
    item.setAttribute("class", "item");

    const name = document.createElement("span");
    name.setAttribute("class", "name");
    name.innerText = text;

    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "del");
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; // 안에 쓰레기통 이미지는 변함이 없기 때문에
    delBtn.addEventListener("click", () => {
        workout.removeChild(itemRow);
    });

    const divider = document.createElement("div");
    divider.setAttribute("class", "divider");

    item.appendChild(name);
    item.appendChild(delBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(divider);

    return itemRow;
}

addBtn.addEventListener("click", () => {
    onAdd();
});

input.addEventListener("keypress", () => {
    if (window.event.keyCode == 13) {
        // enter 번호인 13일 때에만 동작하도록 실행
        // 기존 spacebar나 숫자 입력 시 입력 되는 것을 방지
        console.log("enter");
        onAdd();
    }
});