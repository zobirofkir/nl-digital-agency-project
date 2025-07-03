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
            'slug' => $this->slug,
            'excerpt' => $this->excerpt,
            'content' => $this->content,
            'featured_image' => $this->featured_image ? '/storage/' . $this->featured_image : null,
            'author' => $this->user->name ?? 'Admin',
            'date' => $this->published_at->format('d M Y'),
            'category' => $this->category->name ?? 'General',
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'published_at' => $this->published_at->format('Y-m-d H:i:s'),
        ];
    }
}