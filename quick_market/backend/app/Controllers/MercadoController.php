<?php

namespace App\Controllers;

use App\Request;
use App\Models\Mercado;

class MercadoController {
    private Request $request;
    private Mercado $mercado;

    public function __construct()
    {
        $this->request = new Request();
        $this->mercado = new Mercado();
    }

    public function nearby()
    {
        $data = $this->mercado->nearby();
        return $this->request->json($data);
    }

    public function menus()
    {
        $mercadoId = (int)($_GET['mercados_id'] ?? 0);
        $data = $this->mercado->menusByMercado($mercadoId);
        return $this->request->json($data);
    }

    public function produtos()
    {
        $mercadoId = (int)($_GET['mercados_id'] ?? 0);
        $menuId = (int)($_GET['menu_id'] ?? 0);
        $data = $this->mercado->produtosByMenu($mercadoId, $menuId);
        return $this->request->json($data);
    }

    public function paymentMethods()
    {
        $mercadoId = (int)($_GET['mercados_id'] ?? 0);
        $data = $this->mercado->paymentMethods($mercadoId);
        return $this->request->json($data);
    }

    public function promotions()
    {
        $mercadoId = (int)($_GET['mercados_id'] ?? 0);
        $data = $this->mercado->promotions($mercadoId);
        return $this->request->json($data);
    }
}


