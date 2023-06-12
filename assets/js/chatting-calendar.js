function getMyCalendar() {
    const match_now = new Date();
    const match_today = match_now.getDate();
    const match_year = match_now.getFullYear();
    const match_month = match_now.getMonth() + 1;

// 1일의 요일 구하기
    const match_firstDay = new Date(match_now.setDate(1)).getDay();
//마지막 날짜 구하기
    const match_lastDate = new Date(match_year, match_month, 0).getDate();

//이번달 출력
    document.getElementById('now-month').innerText = match_month.toString();

// 달력 렌더링
    let dates = '';
    for (let i = 0; i < match_firstDay; i++) {
        dates += '<div class = "date my-calendar"></div>';
    }
    // 1일부터 어제까지
    for (let i = 1; i < match_today ; i++) {
        dates += `<div class = "prev-date date my-calendar">${i}</div>`;
    }
    // 오늘부터 말일까지
    for (let i = match_today; i <= match_lastDate ; i++) {
        dates += `<div class = "date my-calendar available-date">${i}</div>`;
    }

    const myCalendar = document.getElementById('dates');
    myCalendar.innerHTML = dates;
}

getMyCalendar();