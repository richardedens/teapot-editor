"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import * as passport from "passport";
var SignupController_1 = __importDefault(require("../controllers/SignupController"));
// import * as loginCheck from "connect-ensure-login";
var router = express_1.default.Router();
/* GET home page. */
router.get("/", SignupController_1.default.show);
exports.default = router;
//# sourceMappingURL=signup.js.map