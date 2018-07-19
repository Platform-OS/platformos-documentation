const getContributors = () => {
  var host = "https://api.github.com", 
    path = "/repos/mdyd-dev/nearme-documentation/commits",
    params = "?path=marketplace_builder/views/pages/" + window.location.pathname + ".liquid",
    pageLastUpdated;
  var pageUrl = host + path + params;

  $.get(pageUrl, function( data ) {
    if (data[0] != undefined ) {
      pageLastUpdated = getLastUpdateTime(data[0].commit);
      var parsedAuthors = new Set();
      var avatars = data.map(function(commit) {
        var authorId = commit.author.id;

        if (!parsedAuthors.has(authorId)) {
          parsedAuthors.add(authorId);
          return contributorHtml(commit.author);
        }
      });

     $(".contributors").html("Last edit: ");
     $(".contributors").append(pageLastUpdated) 
     // $(".contributors").append(" &#8226; ");
     // $(".contributors").append("1 minute to read");
     $(".contributors").append(" &#8226; Contributors: ");
     $(".contributors").append(avatars);
    }
  });

};

const getLastUpdateTime = (commit) => {
  var updatedAt = document.createElement("span"),
    dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  var parsedDate = new Date(commit.committer.date).toLocaleString("en-ENG", dateOptions)
  
  updatedAt.innerText = parsedDate + "";
  return updatedAt.outerHTML;
}

const contributorHtml = (contributor) => {
  var link = document.createElement("a");
  link.innerHTML = contributorImage(contributor).outerHTML;
  link.href = contributor.html_url;
  link.target = "_blank";

  return link.outerHTML;
}

const contributorImage = (contributor) => {

  var img = document.createElement("IMG");
  img.src = contributor.avatar_url
  img.height = 25;
  img.width = 25;
  img.alt = contributor.login;

  return img 
}

export default getContributors;
