<?php

namespace App\Enums;

use Illuminate\Support\Str;

enum PartnerTypeEnum: string
{

    case UNIVERSITY = 'university';
    case SCHOOL = 'school';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            static::MALE => Str::ucfirst(self::UNIVERSITY->value),
            static::FEMALE => Str::ucfirst(self::SCHOOL->value),
        };
    }
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
    public function icon()
    {
        return match ($this) {
            static::UNIVERSITY => 'tabler-school',
            static::SCHOOL => 'tabler-school-bell',
        };
    }
    public function color()
    {
        return match ($this) {
            static::UNIVERSITY => 'azure',
            static::SCHOOL => 'indigo',
        };
    }
}
