!function(){var e=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horor"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"War"}],n="https://image.tmdb.org/t/p/w500",a=document.getElementById("movie-container");function i(i,t){return fetch("".concat("https://api.themoviedb.org/3/","discover/movie?sort_by=popularity.desc&api_key=").concat("9ce408291b177c2a2e598968d33c0b4a","&page=").concat(i)).then((function(e){return e.json()})).then((function(i){var c=i.total_results;console.log(i),console.log(c);var o=i.results,r=o.slice(0,t);console.log(o.slice(0,t)),function(i){a.innerHTML=" ",i.forEach((function(i){var t,c=i.title,o=i.poster_path,r=i.genre_ids,d=i.release_date,m=document.createElement("div");m.classList.add("movie-card"),m.innerHTML='<img src ="'.concat(n).concat(o,' alt="').concat(c,'"/>\n            <div class="movie-card-text">\n            <h2 class="movie-title">').concat(c,'</h2>\n            <p class="movie-card-genre">').concat((t=r,t.map((function(n){return e.find((function(e){return e.id===n})).name})).join(",")),' \n            <span class="movie-release">| ').concat(new Date(d).getFullYear(),"</span>\n            </p>\n            </div>"),a.appendChild(m)}))}(r)})).catch((function(e){return e}))}i(1,18),i()}();
//# sourceMappingURL=index.593aac15.js.map
