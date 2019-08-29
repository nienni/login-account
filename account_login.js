//database
const usersList = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

//function account_login.js
function accountLogin(loginData) {

  //核對帳號
  function checkAccount(user) {
    return user.email.includes(loginData.account)
  }

  //找到帳號在資料庫中的索引
  indexOfAccount = usersList.findIndex(checkAccount)
  console.log(indexOfAccount)

  //核對密碼
  function checkPw(user) {
    return user.password.includes(loginData.pw)
  }

  //找到密碼在資料庫中的索引
  indexOfPw = usersList.findIndex(checkPw)
  console.log(indexOfPw)

  //帳密相同則回傳使用者名稱
  if (indexOfAccount === indexOfPw) {
    return `Welcome back!${usersList[indexOfAccount].firstName}`
  }

  //帳密不同則顯示錯誤訊息
  else {
    return '輸入錯誤，請重新登入'
  }
}

module.exports = accountLogin