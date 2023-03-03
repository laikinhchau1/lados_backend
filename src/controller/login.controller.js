
const login = async (req, res) =>{
    
    try {
        res.render('index.ejs')
      } catch(err) {
        console.log('bi loi roi b oi', err);
    }
}

export default {login}