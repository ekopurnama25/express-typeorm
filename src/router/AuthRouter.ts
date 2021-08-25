import AuthServices  from "../service/AuthServices"; 
const AuthMiddleware  = require('../middleware/AuthMiddleware');

const router = require("express").Router();

router.post('/auth', AuthServices.loginUsers);

router.post('/checkusers',  AuthMiddleware.verifyToken, AuthServices.CheckUserData);

router.post('/refresh_token', AuthServices.loginUsers);

export default router;