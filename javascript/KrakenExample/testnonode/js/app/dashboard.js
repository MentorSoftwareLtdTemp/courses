define(function (require) {
    var jquery = require('jquery');
    var calendar = require('calendar');
    var b= require('bootstrap');
    //var bm= require('bootstrap-modal');
    //var bdp = require('bootstrap-datetimepicker');

    var dashboard = {};

    $(document).ready(function() {
        $('#myModal').modal();
        var options = {
            events_source: 'events.json.php',
            view: 'month',
            tmpl_path: '../lib/calendar/tmpls/',
            tmpl_cache: false,
            day: '2013-03-12'
        }
        var calendar = $('#calendar').calendar(
            { events_source: 'events.json'
            }


        );
        $('.btn-group button[data-calendar-nav]').each(function() {
            var $this = $(this);
            $this.click(function() {
                calendar.navigate($this.data('calendar-nav'));
                $('#cal-day-panel').click(function()
                {
                    $('#responsive').show();
                    console.log('click calendar 1');
                });
            });
        });

        $('.btn-group button[data-calendar-view]').each(function() {
            var $this = $(this);
            $this.click(function() {
                calendar.view($this.data('calendar-view'));
                $('#cal-day-panel').click(function()
                {
                    $('#responsive').modal();
                    console.log('click calendar');
                });
            });
        });

    });


return dashboard;

});
