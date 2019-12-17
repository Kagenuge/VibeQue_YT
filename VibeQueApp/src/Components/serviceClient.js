//const ngrokUrl = 'http://48959761.ngrok.io/api/songrequest'
const ipAddr = 'http://10.100.104.64:3000/api/songrequest'

const postSong = (songUrl) => {
  try {
    console.log("Koitetaan", songUrl)
    return fetch(ipAddr, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trackUrl: songUrl })
    }).then(res=> {
      console.log("POST RES: ", res.json())
       return res;})
  } catch (err) {
    console.log(err)
  }
};
export default postSong;