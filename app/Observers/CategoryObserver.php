<?php

namespace App\Observers;

use App\Models\Category;
use Illuminate\Support\Str;

class CategoryObserver
{
    public function creating(Category $category): void
    {
        if (empty($category->slug) && !empty($category->title)) {
            $category->slug = Str::slug($category->title);
        }
    }

    public function updating(Category $category): void
    {
        if ($category->isDirty('title') && (empty($category->slug) || $category->getOriginal('title') !== $category->title)) {
            $category->slug = Str::slug($category->title);
        }
    }
}
