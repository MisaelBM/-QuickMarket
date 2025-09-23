<?php

use App\Router\Router;

Router::addRoute("/", "GET", function() {
    echo json_encode(["message" => "API is working"]);
});





?>