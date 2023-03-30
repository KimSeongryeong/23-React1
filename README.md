# 김성령

## 2023-03-30 (5주차)

### 4장

#### <엘리먼트의 정의>
* 리액트 앱의 가장 작은 빌딩 블록들
* 화면에 나타나는 내용을 기술하는 자바스크립트 객체
* 리액트 엘리먼트 DOM 엘리먼트의 가상 표현

#### <엘리먼트의 생김새>
* 엘리먼트는 자바스크립트 객체 형태로 존재
* 컴포넌트 유형과 속성 및 내부의 모든 자식에 대한 정보를 포함하고 있는 일반적인 자바스크립트 객체

#### <엘리머트의 특징>
* 이 객체는 마음대로 변경할 수 없는 불변성
* 엘리먼트 생성 후에는 자식이나 속성을 바꿀 수 없음

#### <엘리먼트 렌더링하기>
* 렌더링을 위해 ReactDOM의 render()라는 함수를 사용
  + 리액트 엘리먼트를 HTML 엘리먼트에 랜더링하는 역할
* 렌더링되는 과정은 Virtual DOM애서 실제 DOM으로 이동하는 과정

#### 렌더링된 엘리먼트 업데이트하기
* 엘리먼트는 한 번 생성되면 바꿀 수 없기 때문에 엘리먼트를 업데이트하기 위해서는 다시 생성해야 함
* 기존 엘리먼트를 변경하는 것이 아니라 새로운 엘리먼트를 생성해서 바꿔치기 하는 것

#### <랜더링된 엘리먼트 업데이트 실습>

##### clock.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>

  <!-- 실행 스크립트 -->
  <script type="text/babel">
    function tick() {
        const element = (
            <div>
                <h1>안녕! 리액트</h1>
                <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
            </div>
        )

    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

  </script>
</body>
</html>
```

#### <시계만들기 실습( 교재코드X )>

##### Clock.jsx
```jsx
import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재시간 : {new Date(). toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;

```

##### index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';

setInterval(() => {
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <Clock/>
  </React.StrictMode>
);
}, 1000);

reportWebVitals();

```

### 5장
---

## 2023-03-23 (4주차)


1. README.md 백업
2. local에 있는 저장소 이름 바꾸기/삭제
3. 새프로젝트 생성(23-react1)
4. README.md 덮어쓰기
5. GitHub 저장소 삭제
6. 로컬에서 23-react1 push
7. GitHub 저장소 확인

프로젝트 생성
 : npx cerate-react-app 23-react1 

### 3장

#### <JSX의 정의>
* 자바스크립트와 XML/HTML을 함께사용할 수 있는 자바스크립트 확장 문법

#### <JSX의 역할>
* JSX로 작성된 코드는 모두 자바스크립트의 확장 문법
* 리액트는 JSX 코드를 모두 createElement() 함수를 사용하는 코드로 변환

#### <JSX의 장점>
* 코드가 간결해짐
* 가독성 향상
* Injection Attack을 방어함으로써 보안성이 올라감

#### <JSX 사용법>
* 기본적으로 모든 자바스크립트 문법을 지원
* 자바스크립트에 XML과 HTML을 섞어서 사용
* 중괄호를 사용하여 자바스크립트 코드를 삽입

#### <JSX 실습>

##### Book.jsx
```jsx
import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    )
}

export default Book;
```

##### Library.jsx
```jsx
import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}/>
            <Book name="처음 만난 AWS" numOfPage={400}/>        
            <Book name="처음 만난 리액트" numOfPage={500}/>
        </div>
    );
}

export default Library;
```
---
## 2023-03-16 (3주차)

### 0장

##### HTML
* 웹사이트의 뼈대를 구성하기 위해서 사용하는 마크업 언어
* 태그를 사용해서 웹사이트의 구조를 만듦

##### CSS
* 웹사이트의 레이아웃과 글꼴, 색상 등의 디자인을 입히는 역할을 하는 언어

##### javascript
* 웹페이지에서 동적인 부분을 구현하기 위한 스크립트 언어
* 웹사이트가 살아 움직이도록 생명을 불어넣는 역할

#### <개발환경 설정하기>
* VS Code 설치
* node.js 및 npm 설치

### 1장

#### <리액트의 정의>
* 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
* SPA를 쉽고 빠르게 만들수 있도록 해주는 도구

#### <리액트의 장점>
* 빠른 업데이트와 렌더링 속도
* 재사용성 
* 컴포넌트 기반 구조<
* 메타[구 페이스북]의 든든한 지원
* 활발한 지식 공유와 커뮤니티
* 리액트 네이티브를 통한 모바일 앱 개발 가능
 
#### <리액트의 단점>
* 방대한 학습량
* 높은 상태 관리 복잡도

### 2장

#### <실습>
* 웹사이트에 직접 리액트 연동하기
* HTML만으로 간단한 웹사이트 만들기
* CSS를 사용하여 스타일링하기
* 웹사이트에 Reactjs 추가하기
* create-react-app1 사용해서 리액트 애플리케이션 생성 및 실행

---