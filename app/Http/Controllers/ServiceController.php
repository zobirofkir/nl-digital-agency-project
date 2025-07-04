<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Http\Resources\ServiceResource;
use Illuminate\Http\JsonResponse;

class ServiceController extends Controller
{
    public function index(): JsonResponse
    {
        $services = Service::with('user')->latest()->get();
        return response()->json(ServiceResource::collection($services));
    }
}
