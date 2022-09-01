# mintube
 mintube :)

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