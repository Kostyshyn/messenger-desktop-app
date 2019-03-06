import socketio from 'socket.io-client'
// import { Event } from '../events';

const getConnection = function(token){

	const SocketInstance = socketio(process.env.VUE_APP_BASE_URL, { forceNew: true });	
	const socket = SocketInstance;
	socket.on('connect', client => {
		socket.emit('authenticate', {
			token: token
		}).on('authenticated', () => {

			console.log('authenticated', socket.id);

		// already authenticated

		});

// 		socket.on('message', function(val){
// 			console.log(val);
// 		});
// 
// 		socket.on('notification', function(note){
// 			if (note.type == 'message'){
// 				Event.$emit('message', note.payload);	
// 			}
// 			Event.$emit('notification', note);
// 			// console.log(note);
// 		});

		socket.on('unauthorized', (error, callback) => {
  			if (error.data.type == "UnauthorizedError" || error.data.code == "invalid_token") {
    			// redirect user to login page perhaps or execute callback:
    			callback();
    			console.log('User\'s token has expired unauth');
  			}
		});
	})
	return socket;
};

export { getConnection };
