<?php
use App\Router\Router;
use App\Handlers\readEnv;
use App\Controllers\AuthController;
use App\Controllers\RestaurantController;
use App\Controllers\CartController;
use App\Controllers\PaymentController;
use App\Controllers\OrderController;
use App\Controllers\ReviewController;
use App\Controllers\CouponController;

// Route::addRoute('/', 'GET', [::class, '']);
Router::addRoute('/', 'GET', function() {
    header('Content-Type: application/json');
    $env = new readEnv();
    $env = $env->getEnv();
    echo json_encode(['ok' => true, 'db' => $env['DB_NAME'] ?? null]);
});

// Auth & Session
Router::addRoute('/auth/login', 'POST', [AuthController::class, 'login']);
Router::addRoute('/auth/me', 'GET', [AuthController::class, 'me']);
Router::addRoute('/auth/logout', 'POST', [AuthController::class, 'logout']);

// Restaurants
Router::addRoute('/restaurants', 'GET', [RestaurantController::class, 'nearby']);
Router::addRoute('/restaurants/menus', 'GET', [RestaurantController::class, 'menus']);
Router::addRoute('/restaurants/dishes', 'GET', [RestaurantController::class, 'dishes']);
Router::addRoute('/restaurants/payments', 'GET', [RestaurantController::class, 'paymentMethods']);
Router::addRoute('/restaurants/promotions', 'GET', [RestaurantController::class, 'promotions']);

// Cart CRUD and item operations

// Coupons
Router::addRoute('/coupons', 'GET', [CouponController::class, 'index']);