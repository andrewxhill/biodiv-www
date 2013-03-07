// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window)

      var cartodb_options = {
        domain: 'biota'
      }

    var sql = new cartodb.SQL({ user: carousel_options.domain});
    sql.execute("SELECT * FROM {{table_name}} ORDER BY display_order ASC LIMIT 9", {table_name: 'dataset_controller'})
      .done(function(data) {
        for (var i=0; i<data.rows.length; i++){
          //TODO
          // Drop data from dataset_controller into the template in data.html
          console.log(data.rows[i])
        }
      }) 
  })
}(window.jQuery)
