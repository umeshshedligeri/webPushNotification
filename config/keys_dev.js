module.exports = {
    //i used mlab database for fast and realiable pace development enviroment
    // "mongodb+srv://datagrazpdev:Dev@1234@datagrazp-vjrhz.mongodb.net/edgeverve"

    //    mongoURI: 'mongodb://web-push:webpush123@ds213053.mlab.com:13053/web-push',
    mongoURI: 'mongodb+srv://datagrazpdev:Dev@1234@datagrazp-vjrhz.mongodb.net/edgeverve',
    privateKey: '0H2pvuC24PJBeBnLpXBQlN8NVERbYv_T4CHet25jfP4' || process.env.VAPID_PRIVATE_KEY,
    publicKey: 'BPJItqcJ4oo-1bskuCpnLbv8uipXVzHcrMVLactaGviXZ5iJGRFWRmolN4JgrO4djCkunZBmE_LmBlOSaJ0MZuY' || process.env.VAPID_PUBLIC_KEY
}