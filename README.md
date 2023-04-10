# 김성령

## 2023-04-06 (6주차)

### 5장(2)

#### <컴포너트 추출>
* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
* 기능 단위로  구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋음

#### <댓글 컴포넌트 만들기>

##### Comment.jsx
```jsx
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
  };

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                src="https://i.namu.wiki/i/fhpoI9UeGzYSlO0RC4olFnKWrmFDMVumnMc-wJVlVM8ejDmbfr9xw4Rq_wwVjpklNiLduMYtK8zrU0hPOi-bdNuyXxTVo_SIeX6XF-F7kPeEafkDJlFfCqyviEL-Uc63AI_Ak6SgENTBE2uJP8AFbg.webp"
                alt="프로필 이미지"
                style={styles.image}
                />
                </div>
                <div style = {styles.contentContainer}>
                    <span style={styles.nameText}>{props.name}</span>
                    <span style={styles.commentText}>{props.comment}</span>
            <h1>[04월06일]내가 만든 첫 컴포넌트.</h1>
        </div>
        </div>
    );
}

export default Comment;


```

##### CommentList.jsx
```jsx
import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import Comment from "./CommentList";

const comment = [
    {
        name: "김성령",
        coment: "안녕하세요.",
    
    },
    {
        name: "김성령",
        coment: "안녕하세요.",
    
    },
    {
        name: "김성령",
        coment: "안녕하세요.",
    
    },
];

function CommentList(props) {
    return (
        <div>
            {comment.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
           
        </div>
    );
}

export default CommentList;
```
### <6장>

#### <State란?>
* 리액트 컴포넌트의 변경이 가능한 데이터
* 컴포넌트를 개발하는 개발자가 직접 정의해서 사용
* state가 변경될 경우 컴포넌트가 재렌더링됨
* 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 함 

#### <State의 특징>
* 자바스크립트 객체 형태로 존재
* 직접적인 변경이 불가능 함
* 클래스 컴포넌트
  * 생성자에서 모든 state를 한 번에 정의
  * state를 변경하고자 할 때에는 꼭 setState()함수를 사용해야 함

#### <함수 컴포넌트>
* useState()훅을 사용하여 각각의 state를 정의
* 각 state별로 주어지는 set함수를 사용하여 state 값을 변경

### -생명주기-

#### <마운트>
* 컴포넌트가 생성될 때
* componentDidMount()

#### <업데이트>
* 컴포넌트 props가 변경될 때
* setState() 함수 호출에 의해 state가 변경될 때
* forceUpdate()라는 강제 업데이트 함수가 호출될 때
* componentDidUpdate()

#### <언마우트>
* 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때
* componentWillUnmount()

#### <컴포넌트는 계속 존재하는 것이 아니라 시간의 흐름에 따라 생성되고 업데이트되다가 사라지는 과정을 격음>

#### <State와 생명주기 사용하기 실습>
##### Notification.jsx
```jsx
import React from "react";
import Notification from "./Notification";

cons

const styles = {
    wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    componentDidUpdate() {
    
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }
    componentWillUnmount() {
    
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }
    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.messageText}</span>
            </div>
        );
    }
}

export default Notification;
```
---

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

### 5장(1)

#### <리액트 컴포넌트>

* 컴포넌트 기반 구조
  * 작은컴포넌트들이 모여서 하나의 컴포넌트를 구성하고 이러한 컴포넌트들이 모여서 전체 페이지를 구성
* 개념적으로 자바스크립트의 함수와 비슷함
  * 속석들을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성하여 리턴함  


#### <Props의 개념>

* 리액트 컴포넌트의 속성
* 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체

#### <Props의 특징>

* 읽기전용
* 리액트 컴포넌트의 props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트 리턴해야 함

#### <Props 사용법>

* JSX를 사용할 경우 컴포넌트에 키-쌍 형태로 넣어 주면 됨
* 문자열 이외에 정수, 변수, 그리고 다른 컴포넌트 등이 들어갈 경우에는 중괄호를 사용해서 감싸주어야 함
* JSX를 사용하지 않는 경우에는 createElement() 함수의 두 번째 파라미터 자바스크립트 객체를 넣어 주면 됨

#### <컴포넌트의 종류>
  
  * 리액트 초기버전을 사용할 때는 클래스형 컴포넌트를 주로 사용
  * 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용
  * 예전에 작성된 코드나 문서들이 클래스형 컴포넌트도 사용

1. 함수형 컴포넌트
2. 클래스형 컴포넌트

#### <컴포넌트 합성>
  
  * 컴포넌트 합성은 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
  * 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용 할 수 있기 때문에, 
    복잡한 화면을 여러개의 컴포넌트로 나누어 구현 할 수 있습니다. 

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
 tjdfu: npx cerate-react-app 23-react1 

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
