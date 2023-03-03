const dashboard = async (req, res) => {
    try{
        res.render('\danhsach.ejs')
    }catch(err){
        console.log('bi loi o dashboard', err);
    }
}   

export default {dashboard}