<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Http\Requests\ContactRequest;
use App\Http\Resources\ContactResource;

class ContactController extends Controller
{
    public function index()
    {
        return inertia('ContactPage');
    }

    public function store(ContactRequest $request)
    {
        return ContactResource::make(
            Contact::create($request->validated())
        );
    }
}
