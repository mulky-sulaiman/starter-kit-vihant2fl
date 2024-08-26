<?php

namespace App\Enums;

use Illuminate\Support\Str;

enum PartnerSubTypeEnum: string
{

    case FACULTY = 'faculty';
    case FIELD = 'field';
    case PROGRAM = 'program';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            static::FACULTY => Str::ucfirst(self::FACULTY->value),
            static::FIELD => Str::ucfirst(self::FIELD->value),
            static::PROGRAM => Str::ucfirst(self::PROGRAM->value),
        };
    }
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
    public function icon()
    {
        return match ($this) {
            static::FACULTY => 'tabler-school',
            static::FIELD => 'tabler-school-bell',
            static::PROGRAM => 'tabler-school-bell',
        };
    }
    public function color()
    {
        return match ($this) {
            static::FACULTY => 'secondary',
            static::FIELD => 'muted',
            static::PROGRAM => 'gray-100',
        };
    }
}
