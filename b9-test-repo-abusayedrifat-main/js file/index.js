const loadCard = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const cardData = data.posts ;
    console.log(cardData);

    displayCards(cardData);
   
    

}

const displayCards = (cardData) =>{
         
    const cardContainer = document.getElementById('dicuss-card-container');

    cardData.forEach(card =>{
        //    console.log(card);

        const cardElement = document.createElement('div');
        cardElement.classList = `flex gap-7 bg-[#F3F3F5] rounded-2xl p-8`;

        // const indicator = document.getElementById('indicator');
        // const IsActive = ${card.isActive};
        // if ( IsActive === true) {
        //     IsActive.classList = `indicator-item badge badge-success`
        // }
        // else{
        //     IsActive.classList = `indicator-item badge badge-danger`
        // }

        cardElement.innerHTML = `
        
        <div class="indicator">
                <span id="indicator" class="">  </span> 
                <div class="grid w-16 h-16 rounded-xl bg-base-300 place-items-center"><img src=" ${card.image} " alt="" class="rounded-xl"></div>
               </div>
              <!-- card right side -->
             <div class="w-full space-y-6">
                 <div class="flex gap-4">
                    <span id="category"> #${card.category} </span>
                    <p class="p-primary">author :  ${card.author.name}</p>
                 </div> 
                 <h2 id="content-title" class="text-xl text-[#12132D] font-semibold"> ${card.title} </h2>
                 <p> ${card.description} </p>
                 <div class=" border-b border-dashed border-[#12132D40]"></div>
                 <div class="flex justify-between">
                    <div class="flex gap-9">
                      <div>
                        <i class="fa-solid fa-message"></i> 
                        <span>${card.comment_count}</span> 
                    </div>
                    <div>
                        <i class="fa-regular fa-eye"></i>
                        <span>${card.view_count}</span>
                    </div>
                    <div>
                        <i class="fa-regular fa-clock"></i>
                        <span>${card.posted_time} min</span>
                    </div>
                    </div>
                    <div class="pr-[15px]">
                    <button>
                        <img  onclick="displaySmallCard()" src="images/vector.svg" alt="">
                      </button>
                    </div>
                 </div>

             </div>
        `;
        cardContainer.appendChild(cardElement)


        // const smallCardContainer = document.getElementById('small-card-container')

      
        
        });
               

    for (const smallCard of cardData) {
        const smallCardContainer = document.getElementById('small-card-container')

        document.addEventListener('click', function displaySmallCard() {

           const smallCardElement = document.createElement('div');
           //  smallCardElement.classList = ` w-full h-full bg-[#12132D0D] p-6 rounded-2xl `
             smallCardElement.innerHTML = `
             <div class="flex justify-between items-center bg-white rounded-xl p-4">
                 <h4> ${smallCard.title} </h4>
                 <div class="flex gap-4 items-center">
                 <i class="fa-regular fa-eye"></i>
                 <span>${smallCard.view_count}</span>
                 </div>
             </div>
             `;
            smallCardContainer.appendChild(smallCardElement)
    })

  
    
}

}


// const displaySmallCard = (cardData) =>{
//     const smallCardContainer = document.getElementById('small-card-container')
//     cardData.forEach(smallCard =>{
//         const smallCardElement = document.createElement('div');
//         //  smallCardElement.classList = ` w-full h-full bg-[#12132D0D] p-6 rounded-2xl `
//           smallCardElement.innerHTML = `
//           <div class="flex justify-between items-center bg-white rounded-xl p-4">
//               <h4> ${smallCard.title} </h4>
//               <div class="flex gap-4 items-center">
//               <i class="fa-regular fa-eye"></i>
//               <span>${smallCard.view_count}</span>
//               </div>
//           </div>
//           `;
//          smallCardContainer.appendChild(smallCardElement)
        

//     })

//         }

loadCard()

const loadLatestPost = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    const latestPosts = data;
    console.log(latestPosts);
    displayPost(latestPosts)
}

const displayPost = (latestPosts) =>{
      const latestPostContainer = document.getElementById('latest-post-container');

      latestPosts.forEach(latestPost =>{

        const latestPostCard = document.createElement('div');
        latestPostCard.classList = `flex flex-col gap-9 lg:flex-row `

        latestPostCard.innerHTML = `
        <div class="rounded-xl border border-[#12132D26] p-6 space-y-4">
        <img src=" ${latestPost.cover_image} " alt="" class="rounded-xl">
        <h4><i class="fa-solid fa-calendar-days"></i> 
         <span>  ${latestPost?.author?.posted_date}  </span> </h4>
        <p class="text-[#12132D] font-bold"> ${latestPost.title} </p>
         <p>${latestPost.description}</p>
         <div class="flex gap-4">
           <img src="${latestPost.profile_image} " alt="" class="rounded-[100%] w-[50px]">
           <div>
             <h3 class="text-[#12132D] font-bold"> ${latestPost.author.name} </h3>
             <p> ${latestPost.author?.designation} </p>
           </div>
         </div>
       </div>
        
        `
latestPostContainer.appendChild(latestPostCard)
      })
      
}

loadLatestPost()