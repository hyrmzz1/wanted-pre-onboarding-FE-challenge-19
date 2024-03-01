# Wanted Pre-onboarding Challenge
## React 실전 가이드: 면접 및 실무 기술
## 3월 프론트엔드 챌린지 사전 과제

## 안내사항
과제 세팅에 맞춰 과제를 수행해주세요. 세팅값에 맞지 않는 프로젝트는 과제 확인이 불가능합니다. 과제 제출 전에 확인하고 제출 부탁드립니다.<br>
- 과제 제출 최상단에 개인 이력서 주소 첨부해주세요.
- create-react-app 혹은 vite으로 프로젝트를 생성합니다.
- 아래 과제 공통 세팅의 폴더 구조를 확인합니다.
- 과제를 제출하는 방법은 본인이 작업한 github repository 주소를 issues에 올리면 됩니다.
- 과제물은 main 브랜치에 올립니다.
- 프로젝트는 node version 20에서 실행할 수 있어야합니다.
- Settings -> Codespaces -> Configuration Select branch를 main 으로 하고 제출합니다.(codespace 확인용도)
- 함수형 컴포넌트를 사용해 코드를 짜주세요.

## 과제 공통 세팅
- cra로 과제를 수행하기 위해서는 node.js와 npm이 설치 되어있어야 합니다.
- 폴더 구조는 가능한 아래 양식을 맞춰주세요.
- 스타일은 tailwind, styled-component, scss등 자유롭게 설정하시면 됩니다.
- 아래 폴더와 파일은 필수 요소입니다. 나머지는 자유롭게 설정해주세요.

```
/src
  /components
    /List
  /store
  App.tsx
  index.tsx
```

## 과제 1 todo list 만들기
Add와 Delete 기능 2 가지를 만듭니다.
<img src="https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19/blob/main/todoListAssignment.png" width="50%">
- input 창에 list1을 입력 후 Add 버튼을 누르면 input 창 하단에 list1 컴포넌트가 뜹니다.
- 각 list의 delete 버튼을 누르면 해당 list 컴포넌트가 삭제됩니다.
- 디자인은 자유롭게 해도 됩니다. 위의 2가지 버튼과 그에 따른 기능이 있으면 됩니다.
- 가능하면 컴포넌트를 만듭니다. (작은 단위라도 좋습니다.)
- 전역상태를 관리해주세요.(가능한 Redux나 Redux-toolkit을 이용해주세요.)

## 과제 2
질문을 읽고 답해주세요. 본인이 알고 있는 만큼 답변해주시면 됩니다.

- DOM과 Virtual DOM을 설명해주세요.
- 리액트의 특징을 설명해주세요.
- flux 패턴에 대하여 설명해주세요.
- 상태관리에 대하여 설명해주세요.
- 궁금한 것에 대하여 알려주세요.