//constants
const serverURI = 'ws://localhost:3377/';
const video = document.getElementById('video');
const ws = new WebSocket(serverURI);
//actions
//variables
let clientPeer;

function connectToServerPeer() {
    clientPeer = new SimplePeer({initiator: true, trickle: false});

    clientPeer.on('signal', function (data) {
        ws.send(JSON.stringify(data));
    });

/*
    $.post("http://localhost:3000/setupConnection", data)
        .done(function (data) {
            clientPeer.signal(data);
        });
*/

    /*
        clientPeer.on('stream', function (stream) {
            // got remote video stream, now let's show it in a video tag
            var video = document.getElementById('video');
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
    */
}

function getDataFromServerManual() {
    console.log("Got data from server")
}

function getDataFromServerAutomatic() {
    console.log("Got automatic data from server")
}

function clearTransferredData() {
    console.log("Stop transfer automatic data from server")
}

ws.onmessage = ev => {
    console.log(ev);
    console.log(ev.data);
};