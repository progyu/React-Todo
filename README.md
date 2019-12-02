# 소개

Hooks를 적용한 함수형 컴포넌트 와 클래스형 컴포넌트로 각각 5가지 버전의 TodoList를 구현.

---

## Version
v1 : 하나의 컴포넌트에서 useState, setState를 사용해 상태를 관리.

v2 : 컴포넌트 합성, 추출, 상속을 이용하여 분리, 성능 최적화, classnames 라이브러리 사용.

v3 : Context API를 사용, Sass 적용.

v4 : TypeScript 적용, styled-components 라이브러리 사용.

v5 : redux, react-redux, Redux-DevTools 사용, Ducks 패턴.

---

## 기능

- 할 일 추가.

- 선택한 할 일 삭제.

- 선택한 할 일을 완료 상태로 변경.

- 모든 할 일을 완료 상태로 변경.

- 완료한 할 일을 모두 삭제.

- 모든 할 일, 할 일, 완료한 한 일 별로 필터.

---

## 기타

**Hooks-v2 성능 최적화 테스트 결과**

조건: 할 일 2000개 중 첫번째 할 일의 check 상태 변경

테스트 도구: 크롬 개발자 도구 Performance => Timings => App[update]

결과
- 성능 최적화 이전 ( 1.08s ~ 1.36s )
- React.memo 적용 ( 1.05s ~ 1.23s ) * 큰 변화 없음.
- useCallback과 함수형 업데이트 적용 ( 153ms ~ 282ms ) * 눈에 보일 정도로 빨라짐.


**Hooks-v3 Context API, useState Hooks 적용 후 느낀점**

- React 공식문서가 밝힌 context의 주된 용도는 다양한 레벨에 네스팅된 많은 컴포넌트에게 데이터를 전달하는 것.
- Todo와 같이 네스팅된 컴포넌트가 많지 않은 간단한 웹앱에서는 오히려 Context를 사용하는 것이 코드의 가독성을 해치는 요인으로 작용.
- 부모로부터 자식에게 props를 통해 데이터를 전달하는 간단한 방식이 더 유효하다고 생각.
