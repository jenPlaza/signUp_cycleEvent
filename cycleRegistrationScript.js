function imageDisplay() {
    var data ='<section id="cycleList" class="cycleList"><ul>';
    //here I'm looping through the images object to change html content with new content.
    for (var i = 0; i < imageObjectArray.length; i++) {
        data += '<li><figure>';
        data += '<img src="' + imageObjectArray[i].img + '" alt="' + imageObjectArray[i].alt + '" class="hover"/>';
      data +='<figcaption><h3  id="' + imageObjectArray[i].id + '" onclick="' + imageObjectArray[i].onclick + '" >Sign Up</h3></figcaption>'
        data += '</figure></li>';
  }
  data += '</ul></section>';
    
  //setting new content for cycleregistration html page,
  var sectionBikes= document.getElementById('cycleSignUp');
  sectionBikes.innerHTML = data;
}
imageDisplay();