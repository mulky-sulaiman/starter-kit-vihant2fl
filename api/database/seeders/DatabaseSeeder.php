<?php

namespace Database\Seeders;

use App\Enums\GenderEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'first_name' => 'Test',
            'last_name' => 'Admin',
            'username' => 'test.admin',
            'email' => 'admin@example.com',
            'email_verified_at' => null,
            'phone' => '0811986976',
            'gender' => GenderEnum::MALE->value,
        ]);
    }
}
