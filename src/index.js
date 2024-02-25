const path = require('path');
const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app); // Sử dụng http.Server
const io = require('socket.io')(http); // Liên kết Socket.IO với http.Server
const cookieParser = require('cookie-parser');
const port = 5000;
const db = require('./config/db');
const cors = require("cors");

db.Connect();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources'));

app.use(cookieParser());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

// Xử lý các kết nối của Socket.IO
io.on('connection', (socket) => {
    console.log('A client connected', socket.id);
    
    // Xử lý các sự kiện Socket.IO ở đây
    
    // Ví dụ:
    socket.on('message', (data) => {
        console.log('Received message:', data);
        // Gửi lại tin nhắn cho tất cả client kết nối
        io.emit('message', data);
    });
    // Xử lý sự kiện "push_notification"
    socket.on('push_notification', (data) => {
        console.log('Received push_notification:', data);
        // Gửi thông báo cho tất cả các client kết nối
        io.emit('notification', data);
    });


    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

http.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
