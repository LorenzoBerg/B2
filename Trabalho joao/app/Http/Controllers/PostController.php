<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;


class PostController extends Controller
{
    /*mostrar todos*/
    public function index(Request $request)
    {
        
    }

    /*gravar*/
    public function store(Request $request)
    {
        new Post;
        new Comment;
    }

    /*mostrar um item*/
    public function show(Request $request)
    {
        //
    }

    public function edit(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
