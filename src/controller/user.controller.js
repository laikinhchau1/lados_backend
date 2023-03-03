const renderUser = async (req,res) => {
    try{
        res.render('user.ejs')
    }catch(err) {
        console.log('khong hien thi duoc danh sach user', err)
    }
}

export default {renderUser}