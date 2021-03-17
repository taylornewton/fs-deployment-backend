"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv = require("dotenv");
var reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
var app = express_1.default();
var cors = require('cors');
dotenv.config();
var connectionString = process.env.MONGO_URL;
if (!connectionString) {
    console.log('Missing required environment variable in .env: MONGO_URL');
    process.exit(1);
}
mongoose_1.default.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}, function () {
    console.log('connected to database');
});
// logging middleware
app.use(morgan_1.default('dev'));
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Add routing middleware here
app.use('/reviews', reviewRoutes_1.default);
// healthcheck
app.use('/', function (req, res) {
    res.status(200).json({ response: 'The app is running!', status: 200 });
});
// Route Not Found
app.use(function (req, res, next) {
    res.status(404).json({
        response: "This is not the URL you are looking for!",
        status: 404
    });
});
app.listen(3000, function () { return console.log('Server running on port 3000!'); });
exports.default = app;
