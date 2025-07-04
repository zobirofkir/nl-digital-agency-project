<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'image' => $this->image ? asset('storage/' . $this->image) : null,
            'description' => strip_tags($this->description),
            'author' => $this->user->name ?? 'Unknown',
            'created_at' => $this->created_at->format('M j, Y')
        ];
    }
}