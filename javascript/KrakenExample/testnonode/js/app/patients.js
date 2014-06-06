define(function (require) {
    var jquery = require('jquery');
    var jqtd= require('datatables');
    //var jqueryDataTablesPlugins = require('datatablesPlugins');
    var datatablesScroller = require('datatables-scroller');
    //"sPaginationType": "bootstrap",

    $(document).ready(function() {
     var oTable =  $('#example').dataTable({
            "sAjaxSource": "myData.txt",
            "sScrollY": "400px",
            //"sDom": "frtiS",
            "sDom": "<'toolbar'><'row'<'span1'f>r>t<'row'<'span8'i>S>",
            "bDeferRender": true,
            //"bPaginate": false
         "fnInitComplete": function (o) {
             console.log('complete');

         },
         "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
           //console.log('draw row',nRow, aData, $(nRow));
             $('td:eq(5)',nRow).html('<div class="btn-toolbar"> <button id="patientDelete" type="button" class="btn btn-primary btn-xs">Delete</button>' +
                 '<span></span>' +
                 '<button id="patientEdit" type="button" class="btn btn-primary btn-xs">Edit</button> </div>');



         },
         "fnDrawCallback": function( oSettings ) {

             $('#example tbody tr').click( function( e ) {
                 if ( $(this).hasClass('success') ) {
                     //$(this).removeClass('success');
                     console.log('Remove class');
                 }
                 else {
                     oTable.$('tr.success').removeClass('success');
                     $(this).addClass('success');
                     console.log('Add class');

                 }
             });
             $('#patientDelete').click(function(e)
             {
                 console.log('Jo cie klik');
             });
             $('#patientEdit').click(function(e)
             {
                 console.log('Edit');
             });
         }
     });
    $.extend( $.fn.dataTableExt.oStdClasses, {
            "sSortAsc": "header headerSortDown",
            "sSortDesc": "header headerSortUp",
            "sSortable": "header"
        } );

        $("div.toolbar").html(
            '<button type="button" class="btn btn-primary">Add</button>');


    } );
    var oSettings = $('#example').dataTable().fnSettings();
    console.log(oSettings);
    var dashboard={};

    dashboard.StaticDataSource = function (options) {
    this._formatter = options.formatter;
    this._columns = options.columns;
    this._delay = options.delay || 0;
    this._data = options.data;
};

return dashboard;

});
