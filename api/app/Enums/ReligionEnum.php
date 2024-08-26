<?php

namespace App\Enums;

use Illuminate\Support\Str;

enum ReligionEnum: string
{
    case UNKNOWN = '';
    case ISLAM = 'islam';
    case CATHOLIC = 'catholic';
    case PROTESTANT = 'protestant';
    case HINDUISM = 'hinduism';
    case BUDDHISM = 'buddhism';
    case CONFUCIAN = 'confucian';
    case OTHERS = 'others';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            static::UNKNOWN => 'Undefined',
            static::ISLAM => Str::ucfirst(self::ISLAM->value),
            static::CATHOLIC => Str::ucfirst(self::CATHOLIC->value),
            static::PROTESTANT => Str::ucfirst(self::PROTESTANT->value),
            static::HINDUISM => Str::ucfirst(self::HINDUISM->value),
            static::BUDDHISM => Str::ucfirst(self::BUDDHISM->value),
            static::CONFUCIAN => Str::ucfirst(self::CONFUCIAN->value),
            static::OTHERS => Str::ucfirst(self::OTHERS->value),
        };
    }
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
    public function icon()
    {
        return match ($this) {
            static::UNKNOWN => 'tabler-question-mark',
            static::ISLAM => 'tabler-moon-stars',
            static::CATHOLIC => 'tabler-bible',
            static::PROTESTANT => 'tabler-cross',
            static::HINDUISM => 'tabler-om',
            static::BUDDHISM => 'tabler-grip-vertical',
            static::CONFUCIAN => 'tabler-confucius',
            static::OTHERS => 'tabler-pray',
        };
    }

    public function iconRaw()
    {
        return match ($this) {
            static::UNKNOWN => 'data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-question-mark%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M8%208a3.5%203%200%200%201%203.5%20-3h1a3.5%203%200%200%201%203.5%203a3%203%200%200%201%20-2%203a3%204%200%200%200%20-2%204%22%20/%3E%3Cpath%20d=%22M12%2019l0%20.01%22%20/%3E%3C/svg%3E',
            static::ISLAM => 'data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-moon-stars%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M12%203c.132%200%20.263%200%20.393%200a7.5%207.5%200%200%200%207.92%2012.446a9%209%200%201%201%20-8.313%20-12.454z%22%20/%3E%3Cpath%20d=%22M17%204a2%202%200%200%200%202%202a2%202%200%200%200%20-2%202a2%202%200%200%200%20-2%20-2a2%202%200%200%200%202%20-2%22%20/%3E%3Cpath%20d=%22M19%2011h2m-1%20-1v2%22%20/%3E%3C/svg%3E',
            static::CATHOLIC => 'data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-bible%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M19%204v16h-12a2%202%200%200%201%20-2%20-2v-12a2%202%200%200%201%202%20-2h12z%22%20/%3E%3Cpath%20d=%22M19%2016h-12a2%202%200%200%200%20-2%202%22%20/%3E%3Cpath%20d=%22M12%207v6%22%20/%3E%3Cpath%20d=%22M10%209h4%22%20/%3E%3C/svg%3E',
            static::PROTESTANT => 'data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-cross%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M10%2021h4v-9h5v-4h-5v-5h-4v5h-5v4h5z%22%20/%3E%3C/svg%3E',
            static::HINDUISM => 'data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-om%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M7%2012c2.21%200%204%20-1.567%204%20-3.5s-1.79%20-3.5%20-4%20-3.5c-1.594%200%20-2.97%20.816%20-3.613%202%22%20/%3E%3Cpath%20d=%22M3.423%2014.483a4.944%204.944%200%200%200%20-.423%202.017c0%202.485%201.79%204.5%204%204.5s4%20-2.015%204%20-4.5s-1.79%20-4.5%20-4%20-4.5%22%20/%3E%3Cpath%20d=%22M14.071%2017.01c.327%202.277%201.739%203.99%203.429%203.99c1.933%200%203.5%20-2.239%203.5%20-5s-1.567%20-5%20-3.5%20-5c-.96%200%20-1.868%20.606%20-2.5%201.5c-.717%201.049%20-1.76%201.7%20-2.936%201.7c-.92%200%20-1.766%20-.406%20-2.434%20-1.087%22%20/%3E%3Cpath%20d=%22M17%203l2%202%22%20/%3E%3Cpath%20d=%22M12%203c1.667%203.667%204.667%205.333%209%205%22%20/%3E%3C/svg%3E',
            static::BUDDHISM => 'data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-grip-vertical%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M9%205m-1%200a1%201%200%201%200%202%200a1%201%200%201%200%20-2%200%22%20/%3E%3Cpath%20d=%22M9%2012m-1%200a1%201%200%201%200%202%200a1%201%200%201%200%20-2%200%22%20/%3E%3Cpath%20d=%22M9%2019m-1%200a1%201%200%201%200%202%200a1%201%200%201%200%20-2%200%22%20/%3E%3Cpath%20d=%22M15%205m-1%200a1%201%200%201%200%202%200a1%201%200%201%200%20-2%200%22%20/%3E%3Cpath%20d=%22M15%2012m-1%200a1%201%200%201%200%202%200a1%201%200%201%200%20-2%200%22%20/%3E%3Cpath%20d=%22M15%2019m-1%200a1%201%200%201%200%202%200a1%201%200%201%200%20-2%200%22%20/%3E%3C/svg%3E',
            static::CONFUCIAN => 'data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-confucius%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M9%2019l3%202v-18%22%20/%3E%3Cpath%20d=%22M4%2010l8%20-2%22%20/%3E%3Cpath%20d=%22M4%2018l8%20-10%22%20/%3E%3Cpath%20d=%22M20%2018l-8%20-8l8%20-4%22%20/%3E%3C/svg%3E',
            static::OTHERS => 'data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-pray%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M12%205m-1%200a1%201%200%201%200%202%200a1%201%200%201%200%20-2%200%22%20/%3E%3Cpath%20d=%22M7%2020h8l-4%20-4v-7l4%203l2%20-2%22%20/%3E%3C/svg%3E',
        };
    }
}
