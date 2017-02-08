Node.js + Express + Sequelize + MySQL = API
===

APIのサンプル。

## Description

Node.jsとExpressとSequelizeとMySQLを使ったWeb APIのサンプル。
実際はCRUDをGET・POST・PUT・DELETEで行うが、サンプルのためすべてGETで実現。


## Usage

- ユーザー作成  
/users/create/:name

- ユーザー一覧  
/users

- ユーザー更新  
/users/update/:id/:name

- ユーザー削除  
/users/destroy/:id

- タスク作成  
/tasks/create/:id/:title

- タスク一覧  
/tasks/show/:user_id

- タスク削除  
/tasks/destroy/:user_id/:title
