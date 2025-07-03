<?php

namespace App\Observers;

use App\Models\Blog;
use Illuminate\Support\Str;

class BlogObserver
{
    public function creating(Blog $blog)
    {
        if (empty($blog->slug)) {
            $blog->slug = Str::slug($blog->title);
        }
    }

    public function updating(Blog $blog)
    {
        if ($blog->isDirty('title') && empty($blog->slug)) {
            $blog->slug = Str::slug($blog->title);
        }
    }
}
