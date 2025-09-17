<?php
use App\Routes\Route;
use App\Handlers\readEnv;
use App\Controllers\AuthController;
use App\Controllers\RestaurantController;
use App\Controllers\CartController;
use App\Controllers\PaymentController;
use App\Controllers\OrderController;
use App\Controllers\ReviewController;
use App\Controllers\CouponController;

// Route::addRoute('/', 'GET', [::class, '']);
Route::addRoute('/', 'GET', function() {
    header('Content-Type: application/json');
    $env = new readEnv();
    $env = $env->getEnv();
    echo json_encode(['ok' => true, 'db' => $env['DB_NAME'] ?? null]);
});

// Auth & Session
Route::addRoute('/auth/login', 'POST', [AuthController::class, 'login']);
Route::addRoute('/auth/me', 'GET', [AuthController::class, 'me']);
Route::addRoute('/auth/logout', 'POST', [AuthController::class, 'logout']);

// Restaurants
Route::addRoute('/restaurants', 'GET', [RestaurantController::class, 'nearby']);
Route::addRoute('/restaurants/menus', 'GET', [RestaurantController::class, 'menus']);
Route::addRoute('/restaurants/dishes', 'GET', [RestaurantController::class, 'dishes']);
Route::addRoute('/restaurants/payments', 'GET', [RestaurantController::class, 'paymentMethods']);
Route::addRoute('/restaurants/promotions', 'GET', [RestaurantController::class, 'promotions']);

// Cart CRUD and item operations
Route::addRoute('/cart', 'GET', [CartController::class, 'index']);
Route::addRoute('/cart', 'POST', [CartController::class, 'createOrReplace']);
Route::addRoute('/cart/items', 'POST', [CartController::class, 'addItem']);
// For removal, pass ?id=<cartItemId>
Route::addRoute('/cart/items/remove', 'DELETE', function () {
    $id = $_GET['id'] ?? '';
    $controller = new CartController();
    return $controller->removeItem($id);
});

// Payment execution (stub)
Route::addRoute('/payments/execute', 'POST', [PaymentController::class, 'execute']);

// Orders
Route::addRoute('/orders', 'POST', [OrderController::class, 'create']);

// Reviews
Route::addRoute('/reviews', 'GET', [ReviewController::class, 'index']);
Route::addRoute('/reviews', 'POST', [ReviewController::class, 'create']);

// Coupons
Route::addRoute('/coupons', 'GET', [CouponController::class, 'index']);