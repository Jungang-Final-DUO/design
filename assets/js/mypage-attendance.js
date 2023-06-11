function getMyCalendar() {
    const now = new Date();
    const today = now.getDate();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

// 1일의 요일 구하기
    const firstDay = new Date(now.setDate(1)).getDay();
//마지막 날짜 구하기
    const lastDate = new Date(year, month, 0).getDate();

//이번달 출력
    document.getElementById('now-month').innerText = month.toString();

// 달력 렌더링
    let dates = '';
    for (let i = 0; i < firstDay; i++) {
        dates += '<div class = "date my-calendar"></div>';
    }
    // 1일부터 어제까지
    for (let i = 1; i < today ; i++) {
        dates += `<div class = "prev-date date my-calendar"><img class = "attend-image" src="/assets/img/mypage/add-attend.png" alt="attended">${i}</div>`;
    }
    // 오늘부터 말일까지
    for (let i = today; i <= lastDate ; i++) {
        dates += `<div class = "date my-calendar"><img class = "attend-image" src="/assets/img/mypage/add-attend.png" alt="attended">${i}</div>`;
    }

    const myCalendar = document.getElementById('dates');
    myCalendar.innerHTML = dates;
}

getMyCalendar();