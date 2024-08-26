<?php

namespace App\Helpers;

class Utils
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public static function handleFlash(array $origin, ?array $new): array
    {
        $result = $origin;
        if ($new) {
            $result = array_merge($result, $new);
        }
        return $result;
    }
}
