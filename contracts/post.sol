// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CrudPostApp {
    uint public postCount = 0;

    struct Post {
        uint id;
        string title;
        string content;
    }

    mapping(uint => Post) public posts;
    event AddPost(uint id, string memory _title, string memory _content);
    event DeletePost(uint id, string memory _title, string memory _content);
    event EditPost(uint id, string memory _title, string memory _content);

    // create post
    function addPost(string memory _title, string memory _content) public {
       postCount++;
       posts[postCount] = Post(postCount, _title, _content);
       emit AddPost(postCount, _title, _content);
    }

    // view post
    function getPost(uint _postId) public view returns(Post memory post){
        return posts[_postId];
    }

    // view all posts
    function getPosts() public view returns (Post[] memory){
      Post[] memory id = new Post[](postCount);
      for (uint i = 0; i < postCount; i++) {
          Post storage post = posts[i];
          id[i] = post;
      }
      return id;
    }

    // delete post
    function deletePost(uint _postId) public {
        postCount--;
        delete posts[_postId];
        emit DeletePost(_postId, _title, _content);
    }

    // edit post
    function editPost(string memory _title, string memory _content, uint _postId) public {
        Post storage _post = posts[_postId];
        _post.title = _title;
        _post.content = _content;
        emit EditPost(_postId, _title, _content);
    }
}