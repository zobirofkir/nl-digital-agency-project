<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/blogs', [BlogController::class, 'api']);
Route::get('/blogs/{slug}', [BlogController::class, 'apiShow']);

Route::get('/projects', [ProjectController::class, 'api']);
Route::get('/projects/{id}', [ProjectController::class, 'apiShow']);
