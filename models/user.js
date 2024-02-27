  var crypto = require('crypto');

  const createSalt = () => {
    return crypto.randomBytes(16).toString('hex');
  }
  
  const encryptPassword = (password, salt) => {
    return crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex')
  }
  
  const users = [
    {email: "dpan19@pratt.edu",
     name: "diana", 
    salt:"fa495f00c3aca9ee41bf11eca32cd993",
    encryptedPassword:"43c304035ca486cce45d6dc2bcd1cc8b4f945bd89f7c92c9e8bdf6d0568ab32c"}
  ];
  

  exports.add = (user) => {
    let salt = createSalt();
    let new_user = {
      email: user.email,
      name: user.name,
      salt: salt,
      encryptedPassword: encryptPassword(user.password, salt)
    }
    console.log(new_user);
    users.push(new_user);
  }

  /*
  exports.add = (user) => {
    users.push(user);
  }
*/
  exports.getByEmail = (email) => {
    return users.find((user) => user.email === email);
  }

  /*
  exports.login = (login) => {
    let user = exports.getByEmail(login.email);
    if (user && user.password === login.password) {
      return user;
    }
    return null;
  }
*/
  
  exports.login = (login) => {
    let user = exports.getByEmail(login.email);
    if (!user) {
      return null;
    }
    let encryptedPassword = encryptPassword(login.password, user.salt);
    if (user.encryptedPassword === encryptedPassword) {
      return user;
    }
    return null;
  }


  exports.all = users
  