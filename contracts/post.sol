// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title CrudPostApp
 * @notice This contract serves as a social-media dapp backend.
 *         CRUD operations*
 */
import "./PostToken.sol";

contract CrudPostApp {
    //set post counter
    uint public postCount = 0;
    PostToken postToken;

    constructor(address _postToken){
        postToken = PostToken(_postToken);
    }

    //define Post data structure
    struct Post {
        uint id;
        address owner;
        string title;
        string content;
        uint validation;
    }

    //track the id of the posts
    mapping(uint => Post) public posts;

    //track status of post
    mapping(uint => bool) public deleted;

    //custom error
    error EditDeletedPost();
    error ValidateDeletedPost();
    error NeedTokenToValidate();


    //event handlers
    event AddPost(uint id, string _title, string _content, address owner);
    event DeletePost(uint id);
    event EditPost(uint id, string _title, string _content, address editor);
    event ValidatePost(uint id, address validator, uint validations);

    //modifiers
    modifier onlyTokenOwner(){
        if (postToken.balanceOf(msg.sender) < 0)
            revert NeedTokenToValidate();
        _;
    }

    // create post
    function addPost(string memory _title, string memory _content) public returns(uint _postId){
        //incremment counter
       postCount++;
        //create instance of data structure in memory and assign arguments
       Post memory newPost = Post(postCount, msg.sender, _title, _content, 0);
       //assign post to mapping pf ids to post
       posts[postCount] = newPost;
       deleted[postCount] = false;
       postToken.creatorMint(msg.sender);
       //emit event AddPost
       emit AddPost(postCount, _title, _content, msg.sender);

       return postCount;
    }

    // view post
    function getPost(uint _postId) public view returns(Post memory post){
        return posts[_postId];
    }

    // view all posts
    function getPosts() public view returns (Post[] memory){
      Post[] memory id = new Post[](postCount);
      for (uint i = 1; i <= postCount; i++) {
          Post memory post = posts[i];
          id[i-1] = post;
      }
      return id;
    }
    

    // delete post
    function deletePost(uint _postId) public {
        deleted[_postId] = true;
        delete posts[_postId];
        emit DeletePost(_postId);
    }

    // edit post
    function editPost(string memory _title, string memory _content, uint _postId) public {
        if (deleted[_postId]) revert EditDeletedPost();
        Post storage _post = posts[_postId];
        _post.title = _title;
        _post.content = _content;
        emit EditPost(_postId, _title, _content, msg.sender);
    }

    // validate post
    function validatePost(uint _postId, uint _clicks) public onlyTokenOwner {
        if (deleted[_postId]) revert ValidateDeletedPost();
        Post storage _post = posts[_postId];
        _post.validation += _clicks;
        address owner =_post.owner;
        postToken.validatedMint(owner);
        emit ValidatePost(_postId, msg.sender, _clicks);
    }
}   