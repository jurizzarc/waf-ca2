<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSRF token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>College App</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/college-app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
       
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>


    {{-- <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
    </script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('td a button.btn').mouseover(function () {
                $(this).find('.jam').css({
                    'fill': '#fff'
                });
            });

            $('td a button.btn').mouseleave(function () {
                $(this).find('.jam').css({
                    'fill': '#161616'
                });
            });
        });
    </script> --}}
</body>
</html>