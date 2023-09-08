const mqtt = require('mqtt')

const options = {
  host: '192.168.219.103',
  port: 8080,
  protocol: 'ws'
  // username:"",
  // password:"",
}

// mqtt 서버로 보내는 코드
const topic = 'cmd/water1-E8DB84986E61'
const mqttMessage = '{"uuid":"3a43d665-6ad6-45ee-9e12-077180b045db","relay_name":"water_pump","relay_value":1}'
// const client = mqtt.connect(options)
const client = mqtt.connect('mqtt://192.168.219.103')

client.on('connect', () => {
  console.log('connected' + client.connected)
  client.publish(topic, mqttMessage)
  client.end()
})
