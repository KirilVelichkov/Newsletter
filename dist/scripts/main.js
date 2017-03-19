"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Utils=function(){function e(t){_classCallCheck(this,e),this.requester=t}return _createClass(e,[{key:"isUserLogged",value:function(){return this.requester.getJSON("/api/auth/getLoggedUser")}},{key:"toggleUserControlElements",value:function(){this.isUserLogged().then(function(e){$(".nav-link-user-control").addClass("hidden"),$(".nav-link-profile").removeClass("hidden"),$("#logout").removeClass("hidden"),e.roles.indexOf("admin")!=-1&&$(".nav-link-admin").removeClass("hidden")}).catch(function(){$(".nav-link-user-control").removeClass("hidden"),$(".nav-link-profile").addClass("hidden"),$("#logout").addClass("hidden"),$(".nav-link-admin").addClass("hidden")})}},{key:"getUserRoles",value:function(){return this.requester.getJSON("/api/auth/getUserRoles")}},{key:"sortArticles",value:function(e){var t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],n=e.map(function(e){var n=new Date(e.date);return e.date={monthIndex:n.getMonth(),month:t[n.getMonth()],day:n.getDate(),hour:n.getHours(),minutes:n.getMinutes()},e});return n=n.sort(function(e,t){return e.date.monthIndex>t.date.monthIndex?-1:e.date.monthIndex<t.date.monthIndex?1:e.date.day>t.date.day?-1:e.date.day<t.date.day?1:e.date.hour>t.date.hour?-1:e.date.hour<t.date.hour?1:e.date.minutes>t.date.minutes?-1:e.date.minutes<t.date.minutes?1:0})}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),REQUEST_URL="https://newsletter-project.herokuapp.com",Requester=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"get",value:function(e){var t=new Promise(function(t,n){$.ajax({url:e,method:"GET",success:function(e){t(e)}})});return t}},{key:"putJSON",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=window.localStorage.getItem("jwt-token"),r=new Promise(function(r,o){var i=n.headers||{};i.authrorization=a,$.ajax({url:REQUEST_URL+e,headers:i,method:"PUT",contentType:"application/json",data:JSON.stringify(t),success:function(e){r(e)},error:function(e){o(e)}})});return r}},{key:"postJSON",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=window.localStorage.getItem("jwt-token"),r=new Promise(function(r,o){var i=n.headers||{};i.authrorization=a,$.ajax({url:REQUEST_URL+e,type:"POST",data:JSON.stringify(t),async:!0,cache:!1,processData:!1,headers:{authorization:a},contentType:"application/json",success:function(e){r(e)},error:function(e){o(e)}})});return r}},{key:"postWithFile",value:function(e,t){var n=window.localStorage.getItem("jwt-token");return new Promise(function(a,r){$.ajax({url:REQUEST_URL+e,type:"POST",data:t,headers:{authorization:n},async:!0,cache:!1,processData:!1,contentType:!1,enctype:"multipart/form-data",success:function(e){a(e)},error:function(e){r(e)}})})}},{key:"putWithFile",value:function(e,t){var n=window.localStorage.getItem("jwt-token");return new Promise(function(a,r){$.ajax({url:REQUEST_URL+e,headers:{authorization:n},type:"PUT",data:t,async:!0,cache:!1,contentType:!1,enctype:"multipart/form-data",processData:!1,success:function(e){a(e)},error:function(e){r(e)}})})}},{key:"getJSON",value:function(e){var t=window.localStorage.getItem("jwt-token"),n=new Promise(function(n,a){$.ajax({url:REQUEST_URL+e,headers:{Authorization:t},method:"GET",contentType:"application/json",success:function(e){n(e)},error:function(e){a(e)}})});return n}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),handlebars=handlebars||Handlebars,HandlebarsTemplate=function(){function e(){_classCallCheck(this,e),this.cache={}}return _createClass(e,[{key:"getTemplate",value:function(e){var t=this.cache,n=this;return new Promise(function(a,r){t[e]?a(t[e]):($.get("./views/"+e+".handlebars",function(n){var r=handlebars.compile(n);t[e]=r,a(r)}),n.cache=t)})}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),HomeData=function(){function e(t){_classCallCheck(this,e),this.requester=t}return _createClass(e,[{key:"getArticlesCount",value:function(){return this.requester.getJSON("/api/article/all/count")}},{key:"getArticlesCountByCategory",value:function(e){return this.requester.getJSON("/api/article/all/count/"+e)}},{key:"getAllArticles",value:function(e,t){return this.requester.getJSON("/api/article/all/pageAndSize/?pageNumber="+e+"&pageSize="+t)}},{key:"getFilteredArticles",value:function(e){return this.requester.getJSON("/api/article/search/"+e)}},{key:"getArticlesByCategory",value:function(e,t,n){return this.requester.getJSON("/api/article/category/?category="+e+"&pageNumber="+t+"&pageSize="+n)}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),ArticleData=function(){function e(t){_classCallCheck(this,e),this.requester=t}return _createClass(e,[{key:"getArticle",value:function(e){return this.requester.getJSON("/api/article/article/"+e)}},{key:"replyToComment",value:function(e,t,n){return this.requester.postJSON("/api/article/replyComment/"+e+"/"+t,n)}},{key:"addComment",value:function(e,t){return this.requester.postJSON("/api/article/addComment/"+e,t)}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),UserData=function(){function e(t){_classCallCheck(this,e),this.requester=t}return _createClass(e,[{key:"register",value:function(e){return this.requester.postWithFile("/api/auth/register",e)}},{key:"login",value:function(e){return this.requester.postJSON("/api/auth/login",e)}},{key:"updateSettings",value:function(e){return this.requester.putWithFile("/api/users/updateSettings",e)}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),AdminData=function(){function e(t){_classCallCheck(this,e),this.requester=t}return _createClass(e,[{key:"createArticle",value:function(e){return this.requester.postWithFile("/api/article/create",e)}},{key:"getAllArticles",value:function(){return this.requester.getJSON("/api/article/allArticles")}},{key:"updateArticle",value:function(e,t){return this.requester.putWithFile("/api/article/update/"+e,t)}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),HomeController=function(){function e(t,n,a){_classCallCheck(this,e),this.homeData=t,this.template=n,this.utils=a}return _createClass(e,[{key:"loadHomePageTemplate",value:function(e,t,n,a){var r=e,o=this,i=void 0,l=void 0;o.homeData.getArticlesCount().then(function(e){return l=e}).then(function(){return o.homeData.getAllArticles(n,a)}).then(function(e){return i=o.utils.sortArticles(e),o.template.getTemplate("home-template")}).then(function(e){var t=Math.round(l/a),n=Array.from({length:t},function(e,t){return t+1});r.html(e({articles:i,pageNumbers:n,pageSize:a,count:t,pagination:!0})),$("#search-box").focus()})}},{key:"loadFilteredHomePageTemplate",value:function(e,t,n){var a=this,r=e,o=this,i=void 0;this.homeData.getFilteredArticles(n).then(function(e){return i=o.utils.sortArticles(e),a.template.getTemplate("home-template")}).then(function(e){r.html(e({articles:i,pagination:!1})),$("#search-box").focus()})}},{key:"loadArticlesByCategory",value:function(e,t,n,a,r){var o=this,i=e,l=this,s=void 0,c=void 0;this.homeData.getArticlesCountByCategory(n).then(function(e){return c=e}).then(function(){return l.homeData.getArticlesByCategory(n,a,r)}).then(function(e){return s=l.utils.sortArticles(e),o.template.getTemplate("article-category-template")}).then(function(e){var t=Math.round(c/r),a=Array.from({length:t},function(e,t){return t+1});n=n.toLowerCase().replace(/(^| )(\w)/g,function(e){return e.toUpperCase()}),i.html(e({articles:s,category:n,pageNumbers:a,pageSize:r,count:t,pagination:!0})),$("#search-box").focus()})}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),ArticleController=function(){function e(t,n,a){_classCallCheck(this,e),this.articleData=t,this.template=n,this.utils=a}return _createClass(e,[{key:"loadArticleTemplate",value:function(e,t,n){var a=this,r=e,o=this,i=void 0,l=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];o.articleData.getArticle(n).then(function(e){i=e;var t=new Date(i.date);return i.date={month:l[t.getMonth()],day:t.getDate()},i.author=e.author.toUpperCase(),i.tags.forEach(function(e,t){i.tags[t]=e.toUpperCase()},a),i.comments.forEach(function(e,t){var n=new Date(e.date);i.comments[t].date={month:l[n.getMonth()],day:n.getDate()},i.comments[t].author=i.comments[t].author.toUpperCase(),i.comments[t].replies.forEach(function(e,n){var a=new Date(e.date);i.comments[t].replies[n].date={month:l[a.getMonth()],day:a.getDate()},i.comments[t].replies[n].author=i.comments[t].replies[n].author.toUpperCase()})}),o.template.getTemplate("singe-article-template")}).then(function(e){var n=i.category.toLowerCase().replace(/(^| )(\w)/g,function(e){return e.toUpperCase()});r.html(e({article:i,category:n})),$("#search-box").focus(),o.utils.isUserLogged().then(function(e){e?$(".add-comment-toggler").removeClass("hidden"):$(".add-comment-toggler").addClass("hidden")}).catch(function(){$(".add-comment-toggler").addClass("hidden")}),$(".da-image-container").on("mouseenter",function(){$(this).addClass("image-large")}),$(".da-image-container").on("mouseout",function(){$(this).removeClass("image-large")}),$(".custom-form-submit").on("click",function(e){e.preventDefault();var n=$(this).parent("div").prev("textarea").val(),a=t.params.id,r=$(this).data("id"),i={content:n};return o.articleData.replyToComment(a,r,i).then(function(e){e.success&&window.refreshState()}),!1}),$("#submit-comment").on("click",function(e){e.preventDefault();var n=$("#comment-box").val(),a=t.params.id,r={content:n};return o.articleData.addComment(a,r).then(function(e){e.success&&window.refreshState()}),!1}),$(".reply-comment-button").on("click",function(){$(".reply-comment-container").hide(),$(this).parent(".comments-list-item").next("div.reply-comment-container").animate({opacity:"show",paddingTop:0})})})}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),UserController=function(){function e(t,n,a){_classCallCheck(this,e),this.userData=t,this.template=n,this.utils=a}return _createClass(e,[{key:"loadRegisterTemplate",value:function(e,t){var n=e,a=this;this.template.getTemplate("register-template").then(function(e){n.html(e),$("#username").focus(),$("#register-modal").click(),$("#register-form").submit(function(e){e.preventDefault();var n=new FormData($(this)[0]);return a.userData.register(n).then(function(e){$("#registerModal").modal("hide"),$(".modal-backdrop").hide(),t.redirect("#/home")}),!1}),$("#modal-close-button").on("click",function(){$("#registerModal").modal("hide"),$(".modal-backdrop").hide(),t.redirect("#/home")})})}},{key:"loadLoginTemplate",value:function(e,t){var n=e,a=this;this.template.getTemplate("login-template").then(function(e){n.html(e),$("#username").focus(),$("#login-modal").click(),$("#login-form").submit(function(e){e.preventDefault();var n={username:$("#username").val(),password:$("#password").val()};return a.userData.login(n).then(function(e){e.success?(localStorage.setItem("jwt-token",e.token),a.utils.toggleUserControlElements(),$("#loginModal").modal("hide"),$(".modal-backdrop").hide(),t.redirect("#/home")):$(".login-error span").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).removeClass("hidden")}),!1}),$("#modal-close-button").on("click",function(){$("#loginModal").modal("hide"),$(".modal-backdrop").hide(),t.redirect("#/home")})})}},{key:"loadUpdateSettingsTemplate",value:function(e,t){var n=e,a=this;a.template.getTemplate("update-settings-template").then(function(e){n.html(e),$("#email").focus(),$("#updateSettings-form").submit(function(e){e.preventDefault();var n=new FormData($(this)[0]);return a.userData.updateSettings(n).then(function(e){t.redirect("#/home")}),!1})})}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),AdminController=function(){function e(t,n,a){_classCallCheck(this,e),this.adminData=t,this.template=n,this.utils=a}return _createClass(e,[{key:"loadAdminTemplate",value:function(e,t){var n=this,a=e,r=this,o=void 0;this.utils.getUserRoles().then(function(e){e.indexOf("admin")!=-1?n.template.getTemplate("admin-template").then(function(e){a.html(e),$("#create-article-form").submit(function(e){e.preventDefault();var t=new FormData($(this)[0]);return r.adminData.createArticle(t).then(function(e){e.success&&$("#create-article-form")[0].reset()}),!1}),$(".tab").on("click",function(e){e.preventDefault(),$(".tab").each(function(){$(this).removeClass("tab-active")}),$(this).addClass("tab-active");var t=$(".tab").index(this);return $(".tab-content").addClass("hidden"),$(".tab-content").eq(t).removeClass("hidden"),r.adminData.getAllArticles().then(function(e){return o=e,r.template.getTemplate("edit-articles-template")}).then(function(e){$("#articles").html(e({articles:o})),$("*[id*=ID]").change(function(e){var t=new FileReader,n=$(this).siblings("img");t.onload=function(e){n.attr("src",e.target.result)},t.readAsDataURL(this.files[0])}),$(".edit-article-form").submit(function(e){e.preventDefault();var t=this,n=$(this).data("id"),a=new FormData($(this)[0]);return r.adminData.updateArticle(n,a).then(function(e){e.success&&$(t).prev().removeClass("hidden")}),!1})}),!1})}):t.redirect("#/home")}).catch(function(){t.redirect("#/home")})}}]),e}(),router=Sammy("#content",function(e){var t=$("#content"),n=new Requester,a=new HandlebarsTemplate,r=new Utils(n),o=new UserData(n),i=new ArticleData(n),l=new AdminData(n),s=new HomeData(n),c=new HomeController(s,a,r),u=new ArticleController(i,a,r),h=new UserController(o,a,r),f=new AdminController(l,a,r);this.get("#/home",function(e){e.redirect("#/home/?pageNumber=1&pageSize=5")}),this.get("#/home/?",function(e){var n=this.params.pageNumber,a=this.params.pageSize;c.loadHomePageTemplate(t,e,n,a)}),this.get("#/home/search/?:query",function(e){var n=this.params.query;c.loadFilteredHomePageTemplate(t,e,n)}),this.get("#/home/category/?",function(e){var n=this.params.category,a=this.params.pageNumber,r=this.params.pageSize;c.loadArticlesByCategory(t,e,n,a,r)}),this.get("#/article/?:id",function(e){var n=this.params.id;u.loadArticleTemplate(t,e,n)}),this.get("#/admin",function(e){f.loadAdminTemplate(t,e)}),this.get("#/register",function(e){h.loadRegisterTemplate(t,e)}),this.get("#/login",function(e){h.loadLoginTemplate(t,e)}),this.get("#/profile",function(e){h.loadUpdateSettingsTemplate(t,e)}),this.get("",function(e){e.redirect("#/home/?pageNumber=1&pageSize=5")}),r.toggleUserControlElements(),$("#logout").on("click",function(){localStorage.removeItem("jwt-token"),r.toggleUserControlElements()}),$("#search-box").keyup(function(e){if(13===e.keyCode){var t=$("#search-box").val();window.location.replace("#/home/search/"+t)}}),$(".nav-link").on("click",function(){$(".nav-link").each(function(){$(this).removeClass("nav-link-active")}),$(this).addClass("nav-link-active")})});window.refreshState=function(){return router.refresh()},router.run("#/");