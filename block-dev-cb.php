<?php
/**
 * Plugin Name:       Block Dev Cb
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-dev-cb
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_dev_cb_block_dev_cb_block_init() {
	register_block_type( __DIR__ . '/build/connecting-meta-data' );
}
add_action( 'init', 'block_dev_cb_block_dev_cb_block_init' );

add_action('init', function(){
	register_post_meta( 'post', 'first_name', array(
		'type' => 'string',
		'single' => true,
		'show_in_rest' => true
	));
	register_post_meta( 'post', 'last_name', array(
		'type' => 'string',
		'single' => true,
		'show_in_rest' => true
	));
});
