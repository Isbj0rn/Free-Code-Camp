 $(document).ready(function() {
   var tweetApi = 'https://twitter.com/intent/tweet'
       $("#getMessage").on("click", function(){
      // Only change code below this line.
      
      $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
              
      $('#qod-quote').html(json.quoteText);
        if(json.quoteAuthor.length == 0){
          $('#qod-author').html('-Unknown');
        }else{
                $('#qod-author').html('-' + json.quoteAuthor);}
       //grab href from twitter <a> and append quoteText and quoteAuthor to the href
        $('.twitter-share-button').on('click', function(){
     document.getElementById("twitterShare").href=tweetApi + '?text=' + json.quoteText + ' -' + json.quoteAuthor;
               
    });
      
      // Only change code above this line.
    });
   
   
   })
 });
	 

       
      