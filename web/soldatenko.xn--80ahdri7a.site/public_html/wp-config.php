<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', '2665-21_34265' );

/** Имя пользователя базы данных */
define( 'DB_USER', '2665-21_34265' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'd896d7d59d3f1b987580' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@Y~:Ow[<cKZlMcmr58XnmxLe9wt$wT*0]j.k*2`sd&naA^sdHi#[A**e`@ McyXP' );
define( 'SECURE_AUTH_KEY',  'bZyLso6Fv`+j{&o,81kzV4a0#z$dP?fcaDzL^}O2BO8(t*6~JzDZ-&BT77636+^5' );
define( 'LOGGED_IN_KEY',    ')!m57%$*:wgp_^ih4(0eSj~sX0-dE)$-&+O |Kc+{m&CXNyvIF MqehQX6hueG(k' );
define( 'NONCE_KEY',        'XoWZb?v y|!d5eaP+le{[lKT>.+FVU}-gLw- kTpNCd6qdkjhqV8{Y^.^FN&z&W+' );
define( 'AUTH_SALT',        '}]S |tf{-STc19 n}ygOD9?6B2lT4p~CleM@my}N+Xg-4;_1qTYzIY!%Tsm,$8xo' );
define( 'SECURE_AUTH_SALT', '`5*C{wJr;9Rw}?AVF6F($-`Tg<HM-<a;1qNH `kR;khE,$Qe1(7([pQOvV`n.Z{H' );
define( 'LOGGED_IN_SALT',   'yk{r.qD54v1{;fM[[^*wTU!xKG6WkvLCym.rpr!&dx]Q:/7fZI-58e%e=Z+=#o1w' );
define( 'NONCE_SALT',       '5dWTA;H`Kf8Zhs]0NL:YXLy|Gtm<+jYRSg$5.;Lasq)B0RwAOZ=qv;)a0zjPZ2:x' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = '0Tjt8_';


/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';