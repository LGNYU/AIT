import {createServer} from 'net';

const handleData = (sock, data) => {
    sock.write('HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nhello')
    sock.end()
}


const handleConnect = sock => {
    console.log('client connected')
    sock.on('data', data => handleData(sock, data))
}

const server = createServer(handleConnect)

server.listen(3000, '127.0.0.1')