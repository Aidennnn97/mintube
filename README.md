# mintube
 mintube :)

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
 - HTTP: 서버와 소통하는 방법, GET
 -  request, response
 -  app.get("route", callback(req, res)), callback함수는 여러개 사용 가능
 -  res.end(): request를 종료
 -  res.send()
 -  https://expressjs.com/ko/4x/api.html

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