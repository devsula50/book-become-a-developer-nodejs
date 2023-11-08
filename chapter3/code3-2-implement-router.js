const express = require('express')
const url = require('url')

const app = express()
const port = 3000

app.listen(port, () => {
() => console.log('익스프레스 라우터 만들기')
})
app.get('/', (_, res) => res.end('HOME'))
app.get('/user', user)
app.get('/feed', feed)

function user(req, res) {
  const userInfo = url.parse(req.url, true).query
  res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`)
}

function feed(_, res) {
  res.end(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    </ul>`)
}

function notFound(req, res) {
  res.statusCode = 404
  res.end('404 page not found')
}