# webpack

## npm

> npm(Node Package Meanager)는 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저

---

## node, npm 버전 확인

```cmd
node -v
npm - v
```

---

## 초기화

```cmd
npm init
npm init -y
```

---

## jquery package 설치

```cmd
package.json 파일의 dependencies 항목에서 확인 가능
npm install jquery
```

---

## npm 장점

> 패키지 의존성 및 버전 관리가 용이
> 스크립트 tag를 통해서 html 파일에서 작성되면 찾기도 힘들고 변경이 힘듬
> (만약 스크립트의 라이브러리를 변경해야할 경우 모두 뒤져서 찾아 봐야됨)
>
> 필요한 스크립트 링크 cdn 주소를 일일이 찾아서 html 파일에 입력하는 과정이 불필요함
> (npm install을 통해서 필요한 스크립트 라이브러리를 들고오면 된다.)

---

## npm install

- ### 일반(지역) 설치

```cmd
npm i //package.json에 있는 디펜던시 설치
npm install jquery-ui
npm i jquery-ui //install = i 동일 표현
npm install gulp
npm uninstall gulp

// package.json 파일에 devDependencies 항목 생성
npm install vue --save-dev
npm i vue -D    //--save-dev = -D 동일 표현

```

- ### dependencies(배포용 라이브러리), devDependencies(개발용 라이브러리) 차이점

  - dependencies 는 애플리케이션 로직을 구현, 동작 하는데 연관, 화면 조작 라이브러리
  - devDependencies 는 webpack, js-compression, sass 등 개발을 할 때 도움을 주는 보조 라이브러리
  - npm run build로 빌드 및 배포 시, devDependencies 에 있는 라이브러리는 포함되지 않음

- ### 전역 설치 (시스템 레벨 전역 설치)

  - 프로젝트 루트의 node_modules 폴더에 설치 되지 않음

```cmd
npm install gulp --global   //node_modules 밑에 생기지 않음

```

---

## Webpack Start

```cmd
npm init -y
npm i webpack webpack-cli -D
npm i lodash
npm run build //package.json scripts-build
```

- ### Webpack Config 파일 (설정 파일)

  - webpack.config.js 파일 생성 한다.
  - package.json 파일에 scripts 항목에 옵션을 계속해서 추가하기 어렵기 때문에 설정 파일 필요

- ### Webpack 적용 전, 후

  - 개발자 도구 네트워크 패널을 통해서 확인 가능
  - Webpack 적용 전
    - cdn, html 파일 등 네트워크 패널에 가져오는 파일들이 많음
    - 네트워크 요청 총 count가 많음
    - web page 로딩 시간이 늘어남
  - Webpakc 적용 후
    - 네트워크 요청 총 count가 적음
    - cdn 링크 파일 요청 및 가져오기 횟수가 없어짐 (라이브러리 요청 call 이 없어짐)
    - 자바스크립트를 합쳐서 하나의 js만 가져옴 (lodash js + index.js)
    - web page 로딩에 필요한 request call을 줄여줌

## 바벨&ES6

- webpack.config.js에 sourcemap 기능 (운영 서버 배포할 경우 해당 옵션 사용X)
- 프로젝트 전체 소스가 보여서 정보 유출의 위험이 있음 (개발, 스테이징에서만 사용하자)

## Webpack의 주요 속성 4가지

- entry
- output
- loader (module)
  - 파일의 유형이 javascript가 아닌 경우 필요 (css, img)
  - 비 javascript 파일을 webpack에 인식 시켜준다.
- plugin
  - 결과물에 대한 추가적인 작업 및 변환 과정에 관여 할 수 있음

## 관련 링크

[웹팩 핸드북](https://joshua1988.github.io/webpack-guide/)

[npm Docs : npm-install](https://docs.npmjs.com/cli/v7/commands/npm-install)

[node.js - node path 라이브러리](https://nodejs.org/api/path.html)

[babel - ES6](https://babeljs.io/docs/en/learn)

[webpack - loaders](https://webpack.js.org/loaders/)

[webpack - plugins](https://webpack.js.org/plugins/)
