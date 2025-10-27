<?php

namespace App\Database\Seeders;

final class CuponsUsuarioSeeder extends Seeder
{
    public function run(): void
    {
        $usuarios = $this->getAll('usuarios', ['ativo' => 1]);
        $cupons = $this->getAll('cupons', ['ativo' => 1]);
        
        foreach ($usuarios as $usuario) {
            $associar = $this->faker->randomElements($cupons, $this->faker->numberBetween(1, min(3, count($cupons))));
            foreach ($associar as $cupom) {
                $cupomUsuarioData = [
                    'usuario_id' => $usuario['id'],
                    'cupom_id' => $cupom['id'],
                    'usos_restantes' => $this->faker->numberBetween(1, 5)
                ];
                
                try {
                    $this->db->insert('cupons_usuario', $cupomUsuarioData);
                } catch (\Exception $e) {
                    // Ignore duplicate key errors (INSERT IGNORE equivalent)
                    if (strpos($e->getMessage(), 'duplicate') === false && strpos($e->getMessage(), 'unique') === false) {
                        throw $e;
                    }
                }
            }
        }
    }
}


