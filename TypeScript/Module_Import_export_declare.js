"use strict";
/*
    네임스페이스 : JS 일반 객체로 컴파일 된다. IIFE 함수에 해당 객체를 전달하고 그 함수를
    즉시 호출하는 식으로 컴파일 된다.
    - 기본적으로 네임스페이스 외부에선 네임스페이스 내부를 볼 수 없는데, 이러한 동작은 IIFE 함수
    내에서 지역 변수를 선언하며 각종 코드를 실행시키는 방식을 통해 구현하게 된다.
    - 만약 네임스페이스 외부에서도 접근이 가능하도록 하고 싶은 데이터(변수, 상수, 함수, 클래스, 네임스페이스)가
    있다면 export릉 사용하기
*/
/*
    declare : 변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 알린다.
    - 즉, JS 코드로는 컴파일 되지 않고, TypeScript 컴파일러에게 타입 정보를 알리디만 한다.
    - 타입의 경우 어차피 JS 코드로 컴파일 되지 않으므로 declare 키워드를 사용하지 않아도 된다.
*/
