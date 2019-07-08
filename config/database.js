if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://tsu:123456a@ds249127.mlab.com:49127/vidjot-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost:27017/vidjot-dev'}
}