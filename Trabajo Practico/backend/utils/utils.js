
//Setear el uuid del usuario en una cookie
function setUserCookies(req,res,id_usuario) {
    req.session.user_id = id_usuario;
    res.cookie('user_id', id_usuario);
}

module.exports = {
    setUserCookies
}