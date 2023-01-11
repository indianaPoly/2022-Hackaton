# **<React + JavaScript> SSCC HackatonProject**

## **Hackaton 주제**

- 하드웨어 사용자의 현재 위치를 서버로 부터 가져와 map을 통해 표현

---

## **사용 라이브러리**

- 통신 라이브러리: `axios`
- 전역 상태 라이브러리: `redux-toolkit`

---

## **파일구조**

```bash
├── bottomBar
│   ├── bottomBar.js
│   └── bottomBar.css
├── idSearch
│   ├── idSearch.js
│   └── idSearch.css
├── locationLog
│   ├── locationLog.js
│   └── locationLog.css
├── map
│   ├── location.js
│   └── location.css
├── store.js
└── app.js
```

---

## **컴포넌트 로직**

### **idSearch**

- 서버로 부터 위도, 경도 데이터 가져오기
- 위도, 경도 데이터를 전역에서 사용하기 위해 store.js에 저장

### **map**

- store.js에 저장된 위도, 경도 데이터를 통해 카카오맵 API를 사용해 화면에 그리기
- 위도, 경도에 해당하는 도로명 주소를 store.js에 저장

### **locationLog**

- store.js에 저장된 도로명 주소를 가져와 화면에 그림
