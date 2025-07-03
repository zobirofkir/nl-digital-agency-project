<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Resources\BlogResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = $this->getBlogs();

        return Inertia::render('Blog/Index', [
            'blogs' => $blogs
        ]);
    }

    public function api()
    {
        $blogs = $this->getBlogs();
        return BlogResource::collection($blogs);
    }

    private function getBlogs()
    {
        return Blog::with(['user', 'category'])
            ->where('status', 'published')
            ->orderBy('published_at', 'desc')
            ->get();
    }
}
