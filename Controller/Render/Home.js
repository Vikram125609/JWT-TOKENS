const Home = () => {
    return {
        index: (req, res) => {
            res.render('Home');
        }
    }
};
module.exports = Home;