<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class AlphaDashDot implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!is_string($value) && !is_numeric($value)) {
            $fail('The :attribute may only contain letters, numbers, dashes, underscores and dots.');
        }

        if (!preg_match('/^[0-9A-Za-z.\-_]+$/u', $value) > 0) {
            $fail('The :attribute may only contain letters, numbers, dashes, underscores and dots.');
        }
    }
}
