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

        return Inertia::render('blogs/BlogPage', [
            'blogs' => $this->getBlogs()->map(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'excerpt' => $blog->excerpt,
                    'featured_image' => $blog->featured_image ? '/storage/' . $blog->featured_image : null,
                    'author' => $blog->user->name ?? 'Admin',
                    'date' => $blog->published_at->format('d M Y'),
                    'category' => $blog->category->name ?? 'General',
                    'slug' => $blog->slug,
                ];
            })
        ]);
    }

    public function show($slug)
    {
        $blog = Blog::with(['user', 'category'])
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        return Inertia::render('blogs/BlogShowPage', [
            'blog' => [
                'id' => $blog->id,
                'title' => $blog->title,
                'slug' => $blog->slug,
                'excerpt' => $blog->excerpt,
                'content' => $blog->content,
                'featured_image' => $blog->featured_image ? '/storage/' . $blog->featured_image : null,
                'author' => $blog->user->name ?? 'Admin',
                'date' => $blog->published_at->format('d M Y'),
                'category' => $blog->category->name ?? 'General',
                'meta_title' => $blog->meta_title,
                'meta_description' => $blog->meta_description,
                'published_at' => $blog->published_at->format('Y-m-d H:i:s'),
            ]
        ]);
    }

    public function api()
    {
        $blogs = $this->getBlogs();
        return BlogResource::collection($blogs);
    }

    public function apiShow($slug)
    {
        $blog = Blog::with(['user', 'category'])
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        return new BlogResource($blog);
    }

    private function getBlogs()
    {
        return Blog::with(['user', 'category'])
            ->where('status', 'published')
            ->orderBy('published_at', 'desc')
            ->get();
    }
}
