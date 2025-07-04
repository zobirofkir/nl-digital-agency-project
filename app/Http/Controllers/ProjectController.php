<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function api(): JsonResponse
    {
        $projects = Project::with('user:id,name')
            ->select('id', 'title', 'image', 'description', 'user_id', 'created_at')
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'data' => ProjectResource::collection($projects)
        ]);
    }

    public function apiShow($id): JsonResponse
    {
        $project = Project::with('user:id,name')->findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => new ProjectResource($project)
        ]);
    }
}
