// server
import {createServer} from 'net';


// create a tcp ip server

const handleData = (sock, data) => {
    console.log('got', data)
    sock.write('u sent ' + data)
}


const handleConnect = sock => {
    console.log('client connected')
    sock.write('welcome')
    sock.on('data', data => handleData(sock, data))
    // sock.end()
}


const server = createServer(handleConnect)
server.listen(3000, '127.0.0.1')
