const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "/images/avatar-vangogh.jpg",
        post: "/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "/images/avatar-courbet.jpg",
        post: "/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "/images/avatar-ducreux.jpg",
        post: "/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContainer = document.querySelector(".post");
let newPosts = "";

function renderPosts() {
    for (let post of posts) {
        newPosts += `
			<div class="user-desc">
				<img class="user-img" src=${post.avatar} />
				<div>
					<p class="name bold">${post.name}</p>
					<p class="location">${post.location}</p>
				</div>
			</div>

			<div class="post-img-wrapper">
				<img src=${post.post}>
			</div>

			<div class="post-desc">
				<div class="btn-wrapper">
					<button id="like-btn">
                        <img src="/images/icon-heart.png" id="heart-icon" >
                    </button>
					<button>
                        <img src="/images/icon-comment.png" >
                    </button>
					<button>
                        <img src="/images/icon-dm.png" >
                    </button>
				</div>
				<p id="likes" class="likes bold">${post.likes} likes</p>
				<p class="comments"><span class="bold">${post.username}</span> ${post.comment}</p>
			</div>
    `
    }
    postContainer.innerHTML = newPosts;
}

function renderLikes() {
    const likeBtns = document.querySelectorAll("#like-btn");
    const likesEl = document.querySelectorAll("#likes");
    const heartIcons = document.querySelectorAll("#heart-icon");
    const imagesEl = document.querySelectorAll(".post-img-wrapper");
    let isLiked = false;

    function handleInput(i) {
        if (isLiked === false) {
            heartIcons[i].style.filter = "invert(44%) sepia(94%) saturate(7473%) hue-rotate(353deg) brightness(91%) contrast(127%)";
            posts[i].likes += 1;
            likesEl[i].textContent = `${posts[i].likes} likes`;
            isLiked = true;
        } else {
            heartIcons[i].style.filter = "invert(0%) sepia(6%) saturate(7476%) hue-rotate(328deg) brightness(103%) contrast(106%)";
            posts[i].likes -= 1;
            likesEl[i].textContent = `${posts[i].likes} likes`;
            isLiked = false;
        }
    }

    for (let i = 0; i < posts.length; i++) {
        likeBtns[i].addEventListener("click", function () { handleInput(i) })
        imagesEl[i].addEventListener("dblclick", function () { handleInput(i) });
    }
}

renderPosts();
renderLikes();

// for (let btn of likeBtn) {
//     btn.addEventListener("click", function(e) {
//         let username = e.target.id;
//         console.log(username)
//         for (let post of posts) {
//             if (username === post.username) {
//                 post.likes += 1;
//                 console.log(post.likes);
//             }
//         }
//         postContainer.innerHTML = "";
//         console.log(postContainer.innerHTML);
//         renderPosts();
//     })
// }

