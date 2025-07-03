<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function api(): JsonResponse
    {
        try {
            $projects = Project::with('user:id,name')
                ->select('id', 'title', 'image', 'description', 'user_id', 'created_at')
                ->latest()
                ->get()
                ->map(function ($project) {
                    return [
                        'id' => $project->id,
                        'title' => $project->title,
                        'image' => $project->image ? asset('storage/' . $project->image) : null,
                        'description' => strip_tags($project->description),
                        'author' => $project->user->name ?? 'Unknown',
                        'created_at' => $project->created_at->format('M j, Y')
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $projects
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch projects'
            ], 500);
        }
    }

    public function apiShow($id): JsonResponse
    {
        try {
            $project = Project::with('user:id,name')
                ->findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => [
                    'id' => $project->id,
                    'title' => $project->title,
                    'image' => $project->image ? asset('storage/' . $project->image) : null,
                    'description' => $project->description,
                    'author' => $project->user->name ?? 'Unknown',
                    'created_at' => $project->created_at->format('M j, Y')
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Project not found'
            ], 404);
        }
    }
}
