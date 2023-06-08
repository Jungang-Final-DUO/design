# DUO 해 DUO 의 디자인 작업 저장소입니다.

- 본 프로젝트에 이식할 때의 편의를 위해 디렉토리 구조를 구성하였으니 모든 html 파일들은 src 바로 밑에서만 작성해주세요
- assets 폴더에 접근할 때는 절대경로 (/가 맨 앞에 붙은) 로 접근해주세요
- 또한 모든 css 파일은 @import('common.css')를 맨 첫 줄에 적어서 common.css 파일을 불러와주세요
- body 태그 아래에 div#main-wrapper 만들고 그 안에 구조 짜기 
- css는 무조건 파일 따로 만들어서 assets/css 폴더 아래에 위치시키기
- input 태그안의 name 속성 requestDTO 들의 필드명과 맞추기
- a 태그의 링크도 @RequestMapping의 URL과 맞추기
- 버튼이나 a 태그 호버시 효과 주고싶으면 btn 클래스 추가하세요

## 깃 플로우 전략

1. develop 브랜치에서 자신이 사용할 브랜치를 만든다.
2. fetch/front/{기능} 과 같이 명명한다.
3. PR은 develop 브랜치로만 날린다.
4. PR이 수락되면 기존의 브랜치를 삭제하고 다시 1번을 반복한다. 