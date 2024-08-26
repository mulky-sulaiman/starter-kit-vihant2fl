<?php

namespace App\Enums;
use Illuminate\Support\Str;

enum RoleGroupEnum: string
{
    case EMPLOYEE = 'employee';
    case USER = 'user';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            static::EMPLOYEE => Str::ucfirst(self::EMPLOYEE->value),
            static::USER => Str::ucfirst(self::USER->value),
        };
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    public function color()
    {
        return match ($this) {
            static::EMPLOYEE => 'primary',
            static::USER => 'info'
        };
    }
}
