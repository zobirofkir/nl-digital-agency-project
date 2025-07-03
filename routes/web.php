<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('WelcomePage');
})->name('home');

Route::get('/abouts', function () {
    return inertia('AboutPage');
})->name('abouts');

Route::get('/services', function () {
    return inertia('ServicePage');
})->name('services');

Route::get('/projects', function () {
    return inertia('ProjectPage');
})->name('projects');

Route::get('/blogs', function () {
    return inertia('blogs/BlogPage');
})->name('blogs');

Route::get('/blogs/{id}', function ($id) {
    return inertia('blogs/BlogShowPage', ['id' => $id]);
})->name('blogs.show');

Route::get('/contacts', function () {
    return inertia('ContactPage');
})->name('contacts');
