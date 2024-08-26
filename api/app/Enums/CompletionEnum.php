<?php

namespace App\Enums;

use Illuminate\Support\Str;

enum CompletionEnum: string
{

    case EMPTY = 'empty';
    case INCOMPLETE = 'incomplete';
    case COMPLETE = 'complete';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            static::EMPTY => Str::ucfirst(self::EMPTY->value),
            static::INCOMPLETE => Str::ucfirst(self::INCOMPLETE->value),
            static::COMPLETE => Str::ucfirst(self::COMPLETE->value),
        };
    }
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    public function icon()
    {
        return match ($this) {
            static::EMPTY => 'tabler-x',
            static::INCOMPLETE => 'tabler-exclamation-mark',
            static::COMPLETE => 'tabler-check',
        };
    }

    public function color()
    {
        return match ($this) {
            static::EMPTY => 'danger',
            static::INCOMPLETE => 'warning',
            static::COMPLETE => 'success',
        };
    }
}
