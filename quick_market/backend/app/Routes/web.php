<?php
use App\Routes\Route;
use App\Handlers\readEnv;

// Route::addRoute('/', 'GET', [::class, '']);
Route::addRoute('/', 'GET', function() {
    $env = new readEnv();
    $env = $env->getEnv();
    
    echo $env['DB_NAME'];
});