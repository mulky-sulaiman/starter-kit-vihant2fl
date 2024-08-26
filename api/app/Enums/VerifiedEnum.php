<?php

namespace App\Enums;

use Illuminate\Support\Str;

enum VerifiedEnum: string
{

    case VERIFIED = 'verified';
    case UNVERIFIED = 'unverified';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            static::VERIFIED => Str::ucfirst(self::VERIFIED->value),
            static::UNVERIFIED => Str::ucfirst(self::UNVERIFIED->value),
        };
    }
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
    public function color()
    {
        return match ($this) {
            static::VERIFIED => 'success',
            static::UNVERIFIED => 'muted',
        };
    }
}
