jQuery(document).ready(function() {

    $('#btnHide').click(function(e)
    {
        $('p').toggle(1000);

        if (jQuery('#btnHide').text()==="Hide") {
            jQuery('#btnHide').text('Show');
            jQuery('#btnHide').removeClass('btn-danger');
            jQuery('#btnHide').addClass('btn-success');

        }
        else {
            jQuery('#btnHide').text('Hide');
            jQuery('#btnHide').removeClass('btn-success');
            jQuery('#btnHide').addClass('btn-danger');
        }
        console.log(jQuery('#btnHide').text());

    });

    jQuery('#btnAddRow').click(function(e) {
        jQuery('<tr><td>d</td><td>d</td></tr>').appendTo("#tableData");
    });

    /** Load html doc*/
    jQuery('#btnLoadData').click(function(e) {
        jQuery('#tableData').load('/data/table.html');
    });

    /** Load json by post from /jquery/json*/
    jQuery('#btnLoadJson').click(function(e) {
        $.post( "/jquery/json", function( data ) {
            console.log(data);

            for (i in data)
            {
                jQuery('<tr><td>' +
                    data[i].firstName+ '</td><td>' +
                    data[i].lastName + '</td></tr>').
                    appendTo("#tableData");
            }
        });
        //jQuery('#tableData').load('/data/table.html');
    });


});