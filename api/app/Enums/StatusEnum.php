<?php

namespace App\Enums;

use Illuminate\Support\Str;

enum StatusEnum: string
{

    case ACTIVE = 'active';
    case INACTIVE = 'inactive';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            static::ACTIVE => Str::ucfirst(self::ACTIVE->value),
            static::INACTIVE => Str::ucfirst(self::INACTIVE->value),
        };
    }
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    public function color()
    {
        return match ($this) {
            static::ACTIVE => 'success',
            static::INACTIVE => 'danger',
        };
    }
}
