<?php

namespace App\Enums;

use Illuminate\Support\Str;

enum JobLevelEnum: string
{

    case UNKNOWN = '';
    case EXECUTIVE = 'executive';
    case DIRECTOR = 'director';
    case MANAGERIAL = 'managerial';
    case SENIOR = 'senior';
    case INTERMEDIATE = 'intermediate';
    case ENTRY = 'entry';


    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            static::UNKNOWN => 'Undefined',
            static::EXECUTIVE => Str::ucfirst(self::EXECUTIVE->value),
            static::DIRECTOR => Str::ucfirst(self::DIRECTOR->value),
            static::MANAGERIAL => Str::ucfirst(self::MANAGERIAL->value),
            static::SENIOR => Str::ucfirst(self::SENIOR->value),
            static::INTERMEDIATE => Str::ucfirst(self::INTERMEDIATE->value),
            static::ENTRY => Str::ucfirst(self::ENTRY->value),
        };
    }
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    // public function icon()
    // {
    //     return match ($this) {
    //         static::EMPTY => 'tabler-x',
    //         static::INCOMPLETE => 'tabler-exclamation-mark',
    //         static::COMPLETE => 'tabler-check',
    //     };
    // }

    // public function color()
    // {
    //     return match ($this) {
    //         static::EMPTY => 'danger',
    //         static::INCOMPLETE => 'warning',
    //         static::COMPLETE => 'success',
    //     };
    // }
}
