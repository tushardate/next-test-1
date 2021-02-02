<?php
/**
 * Plugin Name: TD Custom API
 * Plugin URI: http://tushardate.com
 * Description: Tushar Date Custom API!
 * Version: 1.0
 * Author: Tushar Date
 * Author URI: http://tushardate.com
 */


function td_posts() {
	$args = [
		'numberposts' => 99999,
		'post_type' => 'post'
	];

	$posts = get_posts($args);

	$data = [];
	$i = 0;

	foreach($posts as $post) {
		$data[$i]['id'] = $post->ID;
		$data[$i]['title'] = $post->post_title;
		$data[$i]['content'] = $post->post_content;
		$data[$i]['slug'] = $post->post_name;
		$data[$i]['featured_image']['thumbnail'] = get_the_post_thumbnail_url($post->ID, 'thumbnail');
		$data[$i]['featured_image']['medium'] = get_the_post_thumbnail_url($post->ID, 'medium');
		$data[$i]['featured_image']['large'] = get_the_post_thumbnail_url($post->ID, 'large');
		$i++;
	}

	return $data;
}

function td_post( $slug ) {
	$args = [
		'name' => $slug['slug'],
		'post_type' => 'post'
	];

	$post = get_posts($args);


	$data['id'] = $post[0]->ID;
	$data['title'] = $post[0]->post_title;
	$data['content'] = $post[0]->post_content;
	$data['slug'] = $post[0]->post_name;
	$data['featured_image']['thumbnail'] = get_the_post_thumbnail_url($post[0]->ID, 'thumbnail');
	$data['featured_image']['medium'] = get_the_post_thumbnail_url($post[0]->ID, 'medium');
	$data['featured_image']['large'] = get_the_post_thumbnail_url($post[0]->ID, 'large');

	return $data;
}

function td_project( $slug ) {
	$args = [
		'name' => $slug['slug'],
		'post_type' => 'projects'
	];

	$post = get_posts($args);


	$data['id'] = $post[0]->ID;
	$data['title'] = $post[0]->post_title;
	$data['content'] = $post[0]->post_content;
	$data['slug'] = $post[0]->post_name;
	$data['featured_image']['thumbnail'] = get_the_post_thumbnail_url($post[0]->ID, 'thumbnail');
	$data['featured_image']['medium'] = get_the_post_thumbnail_url($post[0]->ID, 'medium');
	$data['featured_image']['large'] = get_the_post_thumbnail_url($post[0]->ID, 'large');

	$data['group_row_repeater'] = get_field('group_row_repeater', $post[0]->ID);
	$data['general_project_description'] = get_field('general_project_description', $post[0]->ID);
	$data['client_name'] = get_field('client_name', $post[0]->ID);
	$data['password_protect'] = get_field('password_protect', $post[0]->ID);
	$data['password'] = get_field('password', $post[0]->ID);
	return $data;
}

function td_projects() {
	$args = [
		'numberposts' => 99999,
		'post_type' => 'projects'
	];

	$posts = get_posts($args);

	$data = [];
	$i = 0;

	foreach($posts as $post) {
		$data[$i]['id'] = $post->ID;
		$data[$i]['title'] = $post->post_title;
		$data[$i]['slug'] = $post->post_name;
		$data[$i]['featured_image']['thumbnail'] = get_the_post_thumbnail_url($post->ID, 'thumbnail');
		$data[$i]['featured_image']['medium'] = get_the_post_thumbnail_url($post->ID, 'medium');
		$data[$i]['featured_image']['large'] = get_the_post_thumbnail_url($post->ID, 'large');
		$data[$i]['group_row_repeater'] = get_field('group_row_repeater', $post->ID);
		$data[$i]['general_project_description'] = get_field('general_project_description', $post->ID);
		$data[$i]['client_name'] = get_field('client_name', $post->ID);
		$data[$i]['password_protect'] = get_field('password_protect', $post->ID);
		$data[$i]['password'] = get_field('password', $post->ID);
		$i++;
	}

	return $data;
}


add_action('rest_api_init', function() {
	register_rest_route('td/v1', 'posts', [
		'methods' => 'GET',
		'callback' => 'td_posts',
	]);

	register_rest_route( 'td/v1', 'posts/(?P<slug>[a-zA-Z0-9-]+)', array(
		'methods' => 'GET',
		'callback' => 'td_post',
	) );

	register_rest_route( 'td/v1', 'projects/(?P<slug>[a-zA-Z0-9-]+)', array(
		'methods' => 'GET',
		'callback' => 'td_project',
	) );
	
	register_rest_route('td/v1', 'projects', [
		'methods' => 'GET',
		'callback' => 'td_projects',
	]);
});