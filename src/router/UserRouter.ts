import UserServices from "../service/UsersServices";

const router = require("express").Router();

router.post('/regis', UserServices.registrasiUsers);

export default router;