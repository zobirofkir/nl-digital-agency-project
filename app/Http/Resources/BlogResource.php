<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'excerpt' => $this->excerpt,
            'featured_image' => $this->featured_image,
            'author' => $this->user->name ?? 'Admin',
            'date' => $this->published_at->format('d M Y'),
            'category' => $this->category->name ?? 'General',
            'slug' => $this->slug,
        ];
    }
}