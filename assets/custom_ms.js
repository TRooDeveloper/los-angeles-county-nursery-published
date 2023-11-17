window.addEventListener('load', function() {
//   $('#calculate').on('click', function(e) {
    
//     e.preventDefault();
    
//     var store_zip = $('body').attr("data-store-zip");
//     var customer_zip = $('#customer_zip').val();

//     var apiKey = ' AIzaSyCuxIHwRURiz6tcxTlJeR5DshsxyRI0Y6U';

//     var url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${store_zip}&destinations=${customer_zip}&key=${apiKey}`;

//     $.ajax({
//       url: url,
//       type: 'GET',
      
//       cors: true ,
//       contentType:'application/json',
//       secure: true,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       },
//       success: function(data) {
//         console.log(data);
//         if (data.rows.length > 0 && data.rows[0].elements.length > 0) {
//           var distance = data.rows[0].elements[0].distance.text;
//           // $('#result').text('Distance: ' + distance);
//           console.log('Distance: ' + distance);
//         } else {
//           console.log('Distance not found');
//         }
//       },
//       error: function() {
//         $('#result').text('Error fetching distance');
//       }
//     });
//   });


   // setTimeout(function () {
   //   if($("body").hasClass("template--product")){
   //          // custom_plant_type==Evergreen
          
   //        // Condition 1
   //          if($("input.custom_plant_type").length > 0){
   //              if($("input.custom_plant_type").val() == "Evergreen" && $("body").attr("usertype") == "Non-Local"){
   //                console.log("disable buttons");
   //              }
   //          }
          
   //        // // Condition 2
   //          if($("input.custom_plant_type").length > 0){
   //              if($("input.custom_plant_type").val() == "Deciduous" && $("body").attr("usertype") == "Non-Local" && $(".variant_dropshipping.selected").val() == "false"){
   //                console.log("disable button");
   //              }
   //          }
              
            
   //        }
   // }, 800);



  var swatches = document.querySelectorAll('.swatches__holder select');

// Define a function to handle the click event
function handleClick(event) {
    
    // hide buttons
          if($("body").hasClass("template--product") && $("body").attr("usertype") ){


    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

      // Example: Get the value of 'param1'
      var var_id = getParameterByName('variant');

          console.log("var Id -- "+var_id);
            setTimeout(function () {
            // custom_plant_type==Evergreen
            // Condition 1
            if($("input.custom_plant_type").length > 0){
                if($("input.custom_plant_type").val() == "Evergreen" && $("body").attr("usertype") == "Non-Local"){
                  console.log("Condition 1 - disable buttons -- Evergreen -- Non-Local");
                  $(".shopify-product-form .button.button--addToCart").attr("disabled","disabled");
                  $(".shopify-product-form div.shopify-payment-button button.shopify-payment-button__button").attr("disabled","disabled");
                }
            }
          
          // Condition 2
            if($("input.custom_plant_type").length > 0){
                if($("input.custom_plant_type").val() == "Deciduous" && $("body").attr("usertype") == "Non-Local" && $(".variant_dropshipping[data-var-id='"+var_id+"']").val() == "false"){
                  console.log("Condition 2 -- Deciduous -- Non-Local -- Dropshipping False - disable button");
                  $(".shopify-product-form .button.button--addToCart").attr("disabled","disabled");
                  $(".shopify-product-form div.shopify-payment-button button.shopify-payment-button__button").attr("disabled","disabled");
                }else if($("input.custom_plant_type").val() == "Deciduous" && $("body").attr("usertype") == "Local" && $(".variant_dropshipping[data-var-id='"+var_id+"']").val() != "false"){
                  console.log("Condition 2 -- Deciduous -- Non-Local -- Dropshipping False - disable button");
                  $(".shopify-product-form .button.button--addToCart").attr("disabled","disabled");
                  $(".shopify-product-form div.shopify-payment-button button.shopify-payment-button__button").attr("disabled","disabled");
                }
            }
            }, 100);
          }else{
            $(".shopify-product-form .button.button--addToCart").attr("disabled","disabled");
                  $(".shopify-product-form div.shopify-payment-button button.shopify-payment-button__button").attr("disabled","disabled");
          }
          // hide buttons end
}

// Loop through all matched elements and attach a click event listener
swatches.forEach(function(swatch) {
    swatch.addEventListener('change', handleClick);
});

});



