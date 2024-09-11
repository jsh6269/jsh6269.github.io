# 블로그
- 옛날 감성이 나는 디자인
  - 네모네모하게!
- 커뮤니티 게시판 디자인으로 구성

## 실행 방법
```bash
git clone https://github.com/jsh6269/jsh6269.github.io.git
npm install
npm start
```
## 게시글 올리기
아래와 같은 방법으로 게시글 파일을 넣어주면 자동으로 웹 페이지에 반영됨
1. notion에 글 작성
2. 내보내기(export)  
>     내보내기 형식: HTML  
>     포함할 콘텐츠: 모든 콘텐츠
3. public/posts/{category}/{id}/ 폴더에 압축풀기
4. python migrate.py

## 배포
github pages를 사용
```bash
git add .
git commit
git push origin main  

npm run build  
npm run deploy  
```
