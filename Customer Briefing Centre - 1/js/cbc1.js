 $(document).ready(function() {
     /* function to invoke Side Panel on Click of Register Interest Button */
     $('.btnRegisterInterest').on('click',function() {
         $('.sideNav').removeClass('displayNone');
         $('.sideNav').addClass('reveal');
     });  
 });