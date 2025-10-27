<?php

namespace App\Controllers;

use App\Request;
use App\Models\Coupon;

class CouponController {
    private Request $request;
    private Coupon $coupons;

    public function __construct()
    {
        $this->request = new Request();
        $this->coupons = new Coupon();
    }

    public function index()
    {
        $userId = $_SESSION['user']['id'] ?? null;
        $data = $this->coupons->listAvailable($userId ? (int)$userId : null);
        return $this->request->json($data);
    }
}


