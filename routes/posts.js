const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('We are on posts');
});

router.post('/', (req, res) => {
    Post
        .create({
            title: req.body.title,
            description: req.body.description
        })
        .then(data => res.json(data))
        .catch(err => {res.json({ message: err });
        });
});
        
module.exports = router;
//     post.save()
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({ message: err });
//         });
//     console.log('hey');
// });

// router.post('/', (req, res) => {
//     const post = new Post(req.body);

//     post.save()
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({ message: err });
//         });
//     console.log('hey');
// })
