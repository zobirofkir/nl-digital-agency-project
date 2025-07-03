<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogController;

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

Route::get('/blogs', [BlogController::class, 'index'])->name('blogs');

Route::get('/blogs/{slug}', [BlogController::class, 'show'])->name('blogs.show');

Route::get('/contacts', function () {
    return inertia('ContactPage');
})->name('contacts');
