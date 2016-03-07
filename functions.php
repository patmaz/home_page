<?php
function my_scripts() {
    
	wp_enqueue_script(
		'my-scripts1',
		get_stylesheet_directory_uri() . '/js-vendor/jquery.min.js'
	);
	wp_enqueue_script(
		'my-scripts2',
		get_stylesheet_directory_uri() . '/js-vendor/angular.min.js'
	);
	wp_enqueue_script(
		'my-scripts3',
		get_stylesheet_directory_uri() . '/js-vendor/angular-route.min.js'
	);
    wp_enqueue_script(
		'my-scripts4',
		get_stylesheet_directory_uri() . '/js-vendor/angular-resource.min.js'
	);
    wp_enqueue_script(
		'my-scripts',
		get_stylesheet_directory_uri() . '/js/client.js'
	);
    
    wp_localize_script(
		'my-scripts',
		'myLocalized',
		array(
			'partials' => trailingslashit( get_template_directory_uri() ) . 'partials/'
			)
	);
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );

?>