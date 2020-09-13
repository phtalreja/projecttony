const functions = require('firebase-functions');


const firebaseConfig = {
    apiKey: "AIzaSyANc5OhpQ6vFTFs9VRTrNuFzMijhwmrZ_w",
    authDomain: "pennapps2020-1df2f.firebaseapp.com",
    databaseURL: "https://pennapps2020-1df2f.firebaseio.com",
    projectId: "pennapps2020-1df2f",
    storageBucket: "pennapps2020-1df2f.appspot.com",
    messagingSenderId: "976023894018",
    appId: "1:976023894018:web:b31fb21eb79ceb97f20f1b"
  };
  firebase.initializeApp(firebaseConfig);
  // Initialize Cloud Functions through Firebase
function onsubmit(){ 
    var display = document.getElementById("result").innerText;
    var query = document.getElementById("query").value;
    var geocode = document.getElementById("geocode").value;
    var opinionAnalysis = firebase.functions().httpsCallable('opinionAnalysis');
    opinionAnalysis({query:query, geocode:geocode}).then(function(result) {
    console.log(result);
}
    .catch(error => {  }))};


    var Twit = require('twit')
    var T = new Twit({
        consumer_key:         'gUgGi3vABY0Py5KRvWpA7mzfy',
        consumer_secret:      'Q0w4JKNwsuolHTwxBODAlhmVBMe7IopUWC7ziDjDR5tejKYedu',
        access_token:         '1304623214476238850-0OwEcFtmHZWY1azIqu93s0eiROehV0',
        access_token_secret:  'QJSX6N7EHO4klOyIqYKaY5L6LAlNGO6XV94IxIFpW7SRr',
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
        strictSSL:            true,     // optional - requires SSL certificates to be valid.
      })
    
    
    var tweetData = {
        text: "",
        score: 0,
        magnitude:0,
      };
    
      // Imports the Google Cloud client library
    const language = require('@google-cloud/language');
    
    // Creates a client
    const client = new language.LanguageServiceClient();
    
      var q = "Donald Trump"
      var n = 10
      var g = "41.8781,-87.6298,50mi"
      var tweetList = [n]
      var texts = [n]
      var scores = [n]
      var magnitudes = [n]
      var entityData = [n]
    
      T.get('search/tweets', { q, count:n,lang:"en", result_type:"recent", geocode:g}, async function(err, data, response) {
        aggregate = data.statuses
        for (i = 0; i<n; i++){
            tweetList[i] = aggregate[i]
            var c = tweetList[i].text
            c = c.substring(0,114)
    
            const document = {
                content: c,
                type: 'PLAIN_TEXT',
              };
            
            const [result] = await client.analyzeSentiment({document});
        
            const sentiment = result.documentSentiment;
    
            texts[i] = c
            scores[i] = sentiment.score
            magnitudes[i] = sentiment.magnitude
            
            console.log(texts[i])
            console.log(scores[i])
            console.log(magnitudes[i])
    
            const [result2] = await client.analyzeEntities({document});
    
            const entities = result2.entities;
            
            num = entities.length
            entityData[i] = entities
    
            for(j = 0; j<num; j++){
                console.log(entities[j].name)
                console.log(entities[j].type)
                console.log(entities[j].salience)
            }
    
            console.log("*****************")
    
        }
    
      })
    

