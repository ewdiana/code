const express = require('express');
const router = express.Router();
const Author = require('../models/author');

/*
router.get('/', async (req, res, next) => {
  let authors = await Author.all();
  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});
*/

router.get('/', function(req, res, next) {
  const authors = Author.all
  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});



router.get('/form', async (req, res, next) => {
  res.render('authors/form', { title: 'BookedIn || Authors' });
});

/*
// database austhors
router.get('/form', async (req, res, next) => {
 if(! User.allowed(req, res, '/authors')){
    return;
  }  
  let templateVars = { title: 'BookedIn || Authors' }
  if (req.query.id) {
    let author = await Author.get(req.query.id)
    if (author) {templateVars['author'] = author}
  }
  res.render('authors/form', templateVars);
});
*/

/*
// upsert using database
router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  if(! User.allowed(req, res, '/authors')){
    return;
  }  
  await Author.upsert(req.body);
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: 'the author has been created!',
  };
  res.redirect(303, '/authors')
});
*/

// hard-coded version with session
router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Author.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the author has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/authors')
});


/*
router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body));
  Author.upsert(req.body);
  res.redirect(303, '/authors');
});
*/


// uses hard-coded author model
router.get('/edit', async (req, res, next) => {
  let authorIndex = req.query.id;
  let author = Author.get(authorIndex);
  res.render('authors/form', { title: 'BookedIn || Authors', author: author, authorIndex: authorIndex });
});



module.exports = router;