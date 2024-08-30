<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\RedirectSession;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use RedirectSession;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $this->initPrevious('user.index', 'user.index');

        $search = $request->query('search', '');
        $layout = $request->query('layout', 'list');

        if (!empty($search)) {
            $result = User::withTrashed(true)
                ->where('name', 'like', "%{$search}%")
                ->orWhere('username', 'like', "%{$search}%")
                ->orWhere('email', 'like', "%{$search}%");
        } else {
            $result = User::withTrashed(true);
        }

        $users = $result ? UserResource::collection($result->paginate(8)->withQueryString()) : null;


        return inertia()->render('User/Index', compact('users', 'layout', 'search'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $this->initPrevious('user.show', 'profile.show', ['user' => $user->username]);
        return inertia()->render('User/Show', ['user' => UserResource::make($user)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
