const e=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horor"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"War"}],n=document.getElementById("movie-container");function a(a,i){return fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9ce408291b177c2a2e598968d33c0b4a&page=${a}`).then((e=>e.json())).then((a=>{const t=a.total_results;console.log(a),console.log(t);const o=a.results,d=o.slice(0,i);console.log(o.slice(0,i)),function(a){n.innerHTML=" ",a.forEach((a=>{const{title:i,poster_path:t,genre_ids:o,release_date:d}=a,m=document.createElement("div");var s,c;m.classList.add("movie-card"),m.innerHTML=`<img src ="https://image.tmdb.org/t/p/w500${t} alt="${i}"/>\n            <div class="movie-card-text">\n            <h2 class="movie-title">${i}</h2>\n            <p class="movie-card-genre">${c=o,c.map((n=>e.find((e=>e.id===n)).name)).join(",")} \n            <span class="movie-release">| ${s=d,new Date(s).getFullYear()}</span>\n            </p>\n            </div>`,n.appendChild(m)}))}(d)})).catch((e=>e))}a(1,18),a();
//# sourceMappingURL=index.3f369109.js.map