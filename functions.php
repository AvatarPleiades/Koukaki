<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/assets/css/theme.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/theme.css'));
    wp_enqueue_style( 'swiper-css', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css', array());
    wp_enqueue_script('simple-parallax', 'https://cdnjs.cloudflare.com/ajax/libs/simple-parallax-js/5.6.2/simpleParallax.min.js', array(), '9.4.1', true);
    wp_enqueue_script( 'swiper-js', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', array(), '9.2.0', true  );
    wp_enqueue_script( 'child-js', get_stylesheet_directory_uri() . '/js/script.js', array(), false, true );
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}