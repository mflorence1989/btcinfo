$(document).ready(function() {  
time();
   setInterval(time,3000)

});

  function time(){

    $.getJSON("https://blockchain.info/ticker?cors=true", function(json) {
      console.log(json)
      var html = "";
      var usd = "";
      var gbp = "";
      var aud = "";

      html = '<table class="table"><thead><tr><th>Currency</th><th>Price</th></thead><tbody>';
      jQuery.each(json, function(key, val) {
        html += "<tr><td><strong>" + key + "</strong></td><td>" + val["last"] + "</td></tr>"

        if (key == "USD") {
          usd += val["last"] + " " + key
        } else if (key == "GBP") {
          gbp += val["last"] + " " + key
        } else if (key == "CAD") {
          aud += val["last"] + " " + key
        }
      });
      html += "</tbody></table>";
      $(".prices").html(html);
      $(".usd-price").html(usd);
      $(".gbp-price").html(gbp);
      $(".aud-price").html(aud);
    });
  };
