
//1 add button event hendler
document.getElementById('submit-comment').addEventListener('click',function(){
    //2.get user comment
     const commentBox = document.getElementById('new-comment');
    // const userComment = commentBox.value ;

    //3. create comment paragraph
     const newComment = document.createElement('p');
     newComment.innerText = commentBox.value ;

    //4. Appent the comment
    const commentContainer = document.getElementById('comment-container');
    
     commentContainer.appendChild(newComment);

     //5. clean the comment box
     commentBox.value = "";
})
//=======================================================================================================

// Delete section
// document.getElementById('delete-btn').addEventListener('click',function(){
//     document.getElementById('secret-info').style.display = 'none';
// });
document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('comment-container').style.display = 'none';
});

//key-up / key-dowon
document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const deleteBtn = document.getElementById('delete-btn');
    if ( event.target.value == 'Delete') {
        deleteBtn.removeAttribute('disabled');
    }
    else{
         deleteBtn.setAttribute ('disabled',true)
    }
});
//change
document.getElementById('delete-confirm').addEventListener('change',function(){
    const deleteField = document.getElementById('delete-confirm');
    // console.log(deleteField.value);
});