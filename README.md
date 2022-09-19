# mintube
 mintube :)

# MongoDB
- brew services start mongodb-community@6.0
- brew services stop mongodb-community@6.0
- mongosh, show dbs, use db명, show collections, db.collection.find()  

# 0919
- Edit Video Page
- join(): array를 string으로 format
- startsWith()
- https://mongoosejs.com/docs/api/model.html
- findByIdAndUpdate()
- exist(filter)

# 0918
- try, catch
- {required: true, default: Date.now}
- mongooseSchemaType: https://mongoosejs.com/docs/schematypes.html
- 정규표현식: https://regexpal.com, https://www.mongodb.com/docs/manual/reference/method/ObjectId/
- [0-9a-f]{24}
- findById()

# 0917
- promise : callback의 최신버전 같은 느낌
- await은 database로 부터 결과값을 받을 때 까지 기다림, asynchronous function안에서만 사용가능함
- split(","): ,로 분리
- map((word)=>`#${word}`): 단어 앞에 # 을 붙여줌
- create(), save()

# 0913
- CRUD(video model)
- model의 형태를 정의해 줄 필요가 있다, 보통 schema라고 함
- Schema: 물리적인 장치로부터 논리적인 데이터베이스 레코드를 매핑하는데 사용되는 정보. 즉, 쿠키틀 같은 것
- init.js: 서버에 필요한 모든 것들을 import하는 역할을 담당
- https://mongoosejs.com/docs/queries.html
- Model.find({configuration}, callback): callback function을 활용하는방법, promise를 활용하는 방법

# 0912
- Recap post, get
- make a video upload page
- redirect
- Mongo DB: general purpose, document-based database, JSON-like-document(objects)
- https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
- mongoose: node와 mongoDB를 이어주는 다리
- mongod, mongosh
- server에 import dbfile
- db.on: 여러번 발생가능 이벤트처럼
- db.once: 한번만 발생

# 0909
- action="url" : 데이터들을 어디로 보낼지
- method: default는 get, 검색할 때 검색어가 주소창에 포함되어 있음
- input태그에 name을 지어주고 get요청을하면 url에 name에 대한 정보가 추가됨(input에 name을 안쓰면 데이터가 전송되지 않는다)
- method="post" : 로그인 하거나, 파일을 보내거나 database에 있는 값을 바꾸는 뭔가를 보낼 때 사용
- 하나의 url에 get, post방식 모두 쓰는 경우: videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
- globalRouter.route("/").get(home);
- express.urlencoded: form의 body를 이해 함
- express.urlencoded(extended): body에 있는 정보들을 보기 좋게 형식을 갖춰줌
- routes를 사용하기전에 middleware를 사용해야한다, middleware가 form을 이해하고, 자바스크립트로 변형시켜줘서 사용할 수 있게 된다
- app.use(express.urlencoded({extended: true})); : express application이 form의 value를 이해할 수 있도록 하고, 자바스크립트 형식으로 변형시켜준다

# 0908
- &rarr; : 오른쪽 화살표
- absolute url(/url), relative url(url)

# 0907
- 태그에 하나의 variable 값만 집어넣는 경우 h1= 과 같이 사용
- variable를 text와 섞게 된다면 #{variable} + text 처럼 사용
- conditionals: if, else if, else
- https://pugjs.org/language/conditionals.html
- iteration : each v in array
- https://pugjs.org/language/iteration.html
- mixin: partial과 비슷한데 **데이터를 받을 수 있는** 일종의 미리 만들어진 HTML block이라 볼 수 있다.
- partial은 include사용 mixin은 include로 mixin파일을 가져오고, + 로 mixin안의 function을 사용

# 0905
 - pug: HTML을 리턴해 주는 템플릿 엔진(템플릿을 이용해서 뷰를 만듬)
 - npm i pug
 - app.set("view engine", "pug");
 - express는 html을 리턴하기 위해 pug를 사용, views디렉토리의 pug 파일을 알아서 찾아줌
 - 기본적으로 express는 (current working directory) cwd/views에서 pug파일을 찾는다
 - package.json에서 서버를 실행하고 있기 때문에 package.json이 있는 폴더가 cwd가 된다
 - res.render("뷰이름", {템플릿에보낼변수}); 
 - app.set("views", process.cwd() + "/src/views");
 - pug에서 js사용법: #{}
 - pugjs.org/language/inheritance.html
 - partial
 - include partials/footer.pug
 - Template Inheritance: 상속은 일종의 베이스를 만들어준다(레이아웃, HTML의 베이스) 
 - extends layout.pug
 - block: 템플릿에 무언가를 집어 넣을 수 있는 곳
 - MVP.css: HTML태그에 몇가지 기본 스타일들을 입혀준다
 - https://andybrewer.github.io/mvp/

 # 0903
 - URL Parameters: /:id(parameters), :id를 변수로 인식, parameters는 url안에 변수 넣는걸 허용
 - router.get(); 할때 예를 들어 /upload가 /:id보다 아래에 있으면 upload를 변수 :id의 값으로 인식하여 upload를 못 불러옴, 하지만 Regular Expression으로 특정 문자만 올 수 있게 지정해 놓으면 상관없다
 - express Routing: https://expressjs.com/ko/guide/routing.html
 - Regular Expression: 문자열로부터 특정 정보를 추출해 내는 방법
 - /(kim\w+)/ : kim으로 시작하는 모든 단어를 target, \w+ 는 kim다음에 아무 문자나 얼마든지 와도 된다는 뜻
 - /(\d+)/ : \d+는 숫자(digit)만 올 수 있음
 - router.get("/:id(\\d+)", callback()); : 자바스크립트기 때문에 \를 하나더 붙여준다

# 0902
 - 라우터: URL 그룹화
 - express.Router();
 - http://expressjs.com/ko/api.html#router
 - 
 - GlobalRouter
 - / -> Home
 - /join -> Join
 - /login -> Login
 - /search -> Search
 - 
 - UserRouters
 - /users/:id -> See User
 - /users/edit -> Edit User Profile
 - /users/delete -> Delete User Profile
 - 
 - VideoRouter
 - /videos/:id -> Watch Video
 - /videos/:id/edit -> Edit Video
 - /videos/:id/delete -> Delete Video
 - /videos/upload -> Upload Video
 - /videos/comments -> Comment on a video
 - /videos/commnets/delete -> Delete A Comment of a Video

 - export 먼저 하고 import
 - 라우터 안에 라우트를 만들고 라우트마다 controller(함수)
 - export(1개이상 공유, import할 때 어떤것을 가져올지 {}안에 구체적으로 지정), export default(1개만 공유)

# 0901

 - morgan: node.js용 request logger middleware
 - npm i morgan
 - morgan(""): middleware를 return

# 0831

 - middleware: request와 response사이의 controller
 - (req, res, next)
 - next() : 다음 함수를 호출해 준다.
 - app.use(middleware) 순서가 중요하다 middleware를 먼저 use하고 그 다음 url을 get, middleware를 global하게 쓰기위해 맨위에 두어야한다.


# 0830

 - import express or require("express")
 - create express application using express function
 - server: listen interactive things
 - app.listen(port, callback()): 서버 시작시 작동
 - HTTP: 서버와 소통하는 방법, GET, POST
 - request, response
 - app.get("route", callback(req, res)), callback함수는 여러개 사용 가능
 - res.end(): request를 종료
 - res.send()
 - https://expressjs.com/ko/4x/api.html

# 0829

 - Babel: 자바스크립트 컴파일러로 최신 자바스크립트를 컴파일 해준다
 - npm i --save-dev @babel/core
 - devDependencies: 개발자에게 필요한 dependencies
 - dependencies : 프로젝트에 필요한것을 나타냄
 - touch babel.config.json (touch는 mac or linux에서 사용가능)
 - npm i @babel/preset-env --save-dev (최신 자바스크립트 구문을 사용할 수 있게 해줌)
 - npm i @babel/node --save-dev
 - nodemon: 파일이 수정되는걸 감시해주는 패키지로 수정되면 알아서 재시작 해줌
 - npm i nodemon --save-dev

# 0828

 - npm init (package.json)
 - npm i express
 - package.json: node.js 관련 정보를 담는 곳