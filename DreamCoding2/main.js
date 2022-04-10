const vertical = document.querySelector(".y"); // y 변수에 y 클래스
const horozontal = document.querySelector(".x"); // x 변수에 x 클래스
const target = document.querySelector(".target"); // target 변수에 target 클래스
const tag = document.querySelector(".tag"); // tag 변수에 tag 클래스


addEventListener("load", () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener("mousemove", () => { // 마우스가 움직일 때 함수 발생
        const x = event.clientX; // 변수 xx는, (등록돼 있는)cientX를 지정
        const y = event.clientY; // 변수 yy는, (등록돼 있는)cientY를 지정
        // console.log(`${xx} ${yy}`);
    
        // y.style.left = `${xx}px`; // y 변수 스타일에 변수 xx를 갖고 오기 (선이 커서 따라다님)
        // x.style.top = `${yy}px`; // x 변수 스타일에 변수 yy를 갖고 오기 (선이 커서 따라다님)
        // target.style.left = `${xx}px`; // target(이미지)가 마우스커서에 붙게
        // target.style.top = `${yy}px`;
        // tag.style.left = `${xx}px`;
        // tag.style.top = `${yy}px`;
        // tag.innerHTML = `(${xx}px, ${yy}px)`;
    
        // 좌표 실습 성능 개선을 위해 top, left 좌표를 transform로 변경하기
    
        vertical.style.transform = `translateX(${x}px)`; // y 변수 스타일에 변수 xx를 갖고 오기 (선이 커서 따라다님)
        horozontal.style.transform = `translateY(${y}px)`; // x 변수 스타일에 변수 yy를 갖고 오기 (선이 커서 따라다님)
        target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfWidth}px)`; // target(이미지)가 마우스커서에 붙게
        tag.style.transform = `translate(${x}px, ${y}px)`;
        tag.innerHTML = `(${x}px, ${y}px)`;
    });

});
