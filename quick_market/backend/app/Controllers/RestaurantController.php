<?php

namespace App\Controllers;

use App\Request;
use App\Models\Restaurant;

class RestaurantController {
    private Request $request;
    private Restaurant $restaurant;

    public function __construct()
    {
        $this->request = new Request();
        $this->restaurant = new Restaurant();
    }

    public function nearby()
    {
        $data = $this->restaurant->nearby();
        return $this->request->json($data);
    }

    public function menus()
    {
        $restaurantId = (int)($_GET['restaurant_id'] ?? 0);
        $data = $this->restaurant->menusByRestaurant($restaurantId);
        return $this->request->json($data);
    }

    public function dishes()
    {
        $restaurantId = (int)($_GET['restaurant_id'] ?? 0);
        $menuId = (int)($_GET['menu_id'] ?? 0);
        $data = $this->restaurant->dishesByMenu($restaurantId, $menuId);
        return $this->request->json($data);
    }

    public function paymentMethods()
    {
        $restaurantId = (int)($_GET['restaurant_id'] ?? 0);
        $data = $this->restaurant->paymentMethods($restaurantId);
        return $this->request->json($data);
    }

    public function promotions()
    {
        $restaurantId = (int)($_GET['restaurant_id'] ?? 0);
        $data = $this->restaurant->promotions($restaurantId);
        return $this->request->json($data);
    }
}


