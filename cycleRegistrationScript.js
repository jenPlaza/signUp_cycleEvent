function imageDisplay() {
    var data ='<section id="cycleList" class="cycleList"><ul>';
    //here I'm looping through the images object to change html content with new content.
    for (var i = 0; i < imageObjectArray.length; i++) {
        data += '<li><figure>';
        data += '<img src="' + imageObjectArray[i].img + '" alt="' + imageObjectArray[i].alt + '" class="hover"/>';
      data +='<figcaption><h3  id="' + imageObjectArray[i].id + '" onclick="' + imageObjectArray[i].onclickSignUp + '" >Sign Up</h3></figcaption>'
        data += '</figure></li>';
  }
  data += '</ul></section>';
    
  //setting new content for cycleregistration html page,
  var sectionBikes= document.getElementById('cycleSignUp');
  sectionBikes.innerHTML = data;
}
imageDisplay();

function closeForm(){
  document.querySelector(".modalForm").style.display = "none";
}
function getRegistered() {
  var registration ='<section id="cycleRegistrationForm" class="modalForm">';
  document.querySelector(".modalForm").style.display = "block";
    
  //injecting new form element.
  registration += '<div class="modalBody">';
  registration += '<fieldset class="field1">';
  registration += '<span class="close" onclick="closeForm()">&times;</span>';
  registration += '<h2><b>Trike Registration Form</b></h2>';
  registration += '</fieldset>';
  
  registration += '<form class="registerForm" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">';
  registration += '<div>';
 
   registration += '<input type=hidden name="oid" value="00D410000008Th8">';
  registration += '<input type=hidden name="retURL" value="http://https://forgottennotgone.org/">';

        {/*   ----------------------------------------------------------------------  
 NOTE: These fields are optional debugging elements. Please uncomment    
  these lines if you wish to test in debug mode.   */}                     
{/* 
   registration += '<input type="hidden" name="debug" value=1>';                              
 registration += '<input type="hidden" name="debugEmail"                                
 value="niranjan@astroforcesolutions.com">';   
*/}                            
  {/*   ----------------------------------------------------------------------  */ }
  
  registration += '<fieldset>';
  registration += '<h4>Personal Information</h4>';  
      /* First Name: */
 registration += '<label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" />';

      /* Last Name: */
  registration += '<label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" />';
  
        /* Birth Date: */
        registration +='<label for="00N3f000000uZR9">Birth Date:</label>';
  registration += '<span class="dateInput dateOnlyInput"><input  id="00N3f000000uZR9" name="00N3f000000uZR9" size="12" type="text" /></span>';
  
    /* Gender: */
    registration +='<label for="00N3f000000uZRE">Gender:</label>';
    registration += '<select  id="00N3f000000uZRE" name="00N3f000000uZRE" title="Gender">';
    registration +=' < option value = "" > --None--</option >';
    registration +=' <option value="Male">Male</option>';
    registration +=' <option value="Female">Female</option>';
  registration +=' </select>\n';
      /* Email: */
  registration +='<label for="00N3f000000uZR4">Email:</label>';
  registration += '<input  id="00N3f000000uZR4" maxlength="80" name="00N3f000000uZR4" size="20" type="text" placeholder="Non - Military Email Preferred" />';
  
   {/* Currently Homeless?: */ }
   registration +='<label for="00N3f000000uZRT">Currently Homeless?:</label>';
   registration += '<select id="00N3f000000uZRT" name="00N3f000000uZRT" title="Currently Homeless?">';
   registration += '< option value = "" > --None--</option >';
   registration += '<option value="No">No</option>';
   registration += '<option value="Yes">Yes</option>';
   registration += '</select>';

      /* Company: */
      registration +='<label for="company">Company</label><input  id="company" maxlength="40" name="company" size="20" type="text" />';

        /* Street: */
  registration += '<label>Street:</label><textarea name="street"></textarea></label>';

        /* City: */
  registration += '<label for="city">City</label><input  id="city" maxlength="40" name="city" size="20" type="text" />'; 
  
  /* State/Province: */
  registration += '<label for="state">State/Province</label><input  id="state" maxlength="20" name="state" size="20" type="text" />';

        /* Zip: */
    registration += '<label for="zip">Zip</label><input  id="zip" maxlength="20" name="zip" size="20" type="text" />';
    
     /* Country: */
 registration +='<label for="country">Country</label><input  id="country" maxlength="40" name="country" size="20" type="text" />';

     /* Mobile: */
 registration +='<label for="mobile">Mobile</label><input  id="mobile" maxlength="40" name="mobile" size="20" type="text" />';
   registration += '</fieldset>'; 
          
   registration += '<fieldset>';
   registration += '<h4>Military Information</h4>';    
  {/* Branch Of Service: */ }
  registration +='<label for="00N3f000000uZRi">Branch Of Service:</label>';
  registration += '<select id="00N3f000000uZRi" name="00N3f000000uZRi" title="Branch Of Service">';
  registration += '< option value = "" > --None--</option >';
  registration += '<option value="Air Force">Air Force</option>';
  registration += '<option value="Marine Corps">Marine Corps</option>';
  registration += '<option value="Army">Army</option>';
  registration += '<option value="Navy">Navy</option>';
  registration += '<option value="Coast Guard">Coast Guard</option>';
  registration += '<option value="Reserves">Reserves</option>';
  registration += '</select>';

  {/* Rank: */ }
  registration +='<label for="00N3f000000uZRn">Rank:</label>';
               registration +='<input id="00N3f000000uZRn" maxlength="255" name="00N3f000000uZRn" size="20" type="text" />';

  {/* Service Start Date: */ }
  registration +='<label for="00N3f000000uZRs">Service Start Date:</label>';
                 registration +='<span class="dateInput dateOnlyInput"><input id="00N3f000000uZRs" name="00N3f000000uZRs" size="12" type="text" /></span>';

  {/*     Service End Date: */ }
  registration +='<label for="00N3f000000uZRx">Service End Date:</label>';
               registration +='<span class="dateInput dateOnlyInput"><input id="00N3f000000uZRx" name="00N3f000000uZRx" size="12" type="text" /></span>';

  {/* Service Status: */ }
  registration +='<label for="00N3f000000uZS2">Service Statu:</label>';
  registration += '<select id="00N3f000000uZS2" name="00N3f000000uZS2" title="Service Status">';
  registration +='< option value = "" > --None--</option >';
    registration +='<option value="Active Duty">Active Duty</option>';
    registration +='<option value="National Guard">National Guard</option>';
    registration +='<option value="Veteran">Veteran</option>';
    registration +='<option value="Retired">Retired</option>';
    registration +='<option value="Reserves">Reserves</option>';
    registration +='<option value="Pending Med Board">Pending Med Board</option>';
    registration +='<option value="Permanent Disability Retirement List">Permanent Disability Retirement List</option>';
    registration +='<option value="Temporary Disability Retired List">Temporary Disability Retired List</option>';
    registration +='</select>';

  {/* Are you a Post 9/11 Veteran?: */ }
  registration +='<label for="00N3f000000uZS7">Are you a Post 9/11 Veteran?:</label>';
  registration += '<select id="00N3f000000uZS7" name="00N3f000000uZS7" title="Are you a Post 9/11 Veteran?">';
  registration += '< option value = "" > --None--</option >';
  registration += '<option value="Yes">Yes</option>';
  registration += '<option value="No">No</option>';
  registration += '</select>';

  {/* Type of Discharge: */ }
  registration +='<label for="00N3f000000uZSC">Type of Discharge:</label>';
  registration += '<select id="00N3f000000uZSC" name="00N3f000000uZSC" title="Type of Discharge">';
  registration += '< option value = "" > --None--</option >';
  registration += '< option value = "Honorable" > Honorable</option >';
  registration += '<option value="Other Than Honorable (OTH)">Other Than Honorable (OTH)</option>';
  registration += '<option value="Dishonorable">Dishonorable</option>';
  registration += '<option value="General">General</option>';
  registration += '<option value="Bad Conduct">Bad Conduct</option>';
  registration += '</select>';

  {/* Service connected or non-service Injury: */ }
  registration +='<label for="00N3f000000uZSH">Service connected or non-service Injury:</label>';
  registration += '<select id="00N3f000000uZSH" name="00N3f000000uZSH" title="Service connected or non-service Injury">';
  registration += '< option value = "" > --None--</option >';
  registration += '<option value="Yes">Yes</option>';
  registration += '<option value="No">No</option>';
  registration += '</select>';

  {/*  Injury Information: */ }
  registration +='<label for="00N3f000000uZSM">Injury Information:</label>';
  registration += '<select id="00N3f000000uZSM" multiple="multiple" name="00N3f000000uZSM" title="Injury Information size="5">';
  registration += '< option value = "Amputee" > Amputee</option >';
  registration += '<option value="Knees">Knees</option>';
  registration += '<option value="Back">Back</option>';
  registration += '<option value="Blind">Blind</option>';
  registration += '<option value="Burn">Burn</option>';
  registration += '<option value="Post-Traumatic Stress Disorder (PTSD)">Post-Traumatic Stress Disorder (PTSD)</option>';
  registration += '<option value="Military Sexual Trauma (MST)">Military Sexual Trauma (MST)</option>';
  registration += '<option value="Traumatic Brain Injury (TBI)">Traumatic Brain Injury (TBI)</option>';
  registration += '<option value="Vision Impairment">Vision Impairment</option>';
  registration += '<option value="Hearing Impairment">Hearing Impairment</option>';
  registration += '<option value="Other">Other</option>';
  registration += '</select>';
  registration += '</fieldset>';

  registration += '<fieldset>';
  registration += '<h4>Marital Status</h4>';      
  {/* Are You Married?: */ }
  registration +='<label for="00N3f000000uZRJ">Are You Married?:</label>';
  registration += '<select id="00N3f000000uZRJ" name="00N3f000000uZRJ" title="Are You Married?">';
  registration +=' < option value = "" > --None--</option >';
  registration +=' <option value="Single">Single</option>';
  registration +=' <option value="Married">Married</option>';
  registration +=' <option value="Divorced">Divorced</option>';
  registration +=' <option value="Widowed">Widowed</option>';
  registration += ' </select>';

  {/* Number Of Children: */ }
  registration +='<label for="00N3f000000uZRO">Number Of Children:</label>';
     registration +='<input id="00N3f000000uZRO" name="00N3f000000uZRO" size="20" type="text" />';
     registration += '<h4>Emergency Contact</h4>';     
  {/*  Emergency Contact First Name: */ }
  registration +='<label for="00N3f000000uZSR">Emergency Contact First Name:</label>';
                              registration +='<input id="00N3f000000uZSR" maxlength="255" name="00N3f000000uZSR" size="20" type="text" />';

  {/*  Emergency Contact Last Name: */ }
  registration +='<label for="00N3f000000uZSW">Emergency Contact Last Name:</label>';
                                 registration +='<input id="00N3f000000uZSW" maxlength="255" name="00N3f000000uZSW" size="20" type="text" />';

  {/* Emergency Contact Relationship: */ }
  registration +='<label for="00N3f000000uZSb">Emergency Contact Relationship:</label>';
                                   registration +='<input id="00N3f000000uZSb" maxlength="255" name="00N3f000000uZSb" size="20" type="text" />';

  {/* Emergency Contact Number: */ }
  registration +='<label for="00N3f000000uZSg">Emergency Contact Number:</label>';
  registration += '<input id="00N3f000000uZSg" maxlength="40" name="00N3f000000uZSg" onkeydown="formatPhoneOnEnter(this, event);" size="20" type="text" />';
  registration += '<h4>More Information</h4>';                            
    {/*  Las Vegas Casino / Sports Team Employee: */ }
    registration +='<label for="00N3f000000uZRY">Las Vegas Casino / Sports Team Employee:</label>';
    registration += '<select id="00N3f000000uZRY" name="00N3f000000uZRY" title="Las Vegas Casino / Sports Team Employee">';
    registration += '< option value = "" > --None--</option >';
    registration += '<option value="No">No</option>';
    registration += '<option value="Yes">Yes</option>';
    registration += '</select>';
  
    {/*  If so where?: */ }
    registration +='<label for="00N3f000000uZRd">If so where?:</label>';
            registration +='<textarea id="00N3f000000uZRd" name="00N3f000000uZRd" rows="3" type="text" wrap="soft"></textarea>';
  registration += '</fieldset>';
  registration += '</div>';
  registration += '<fieldset class="field6">'; 
  {/* Agreed to LIABILITY WAIVER &amp; ACKNOWLEDGE: */ }
  registration +='<label for="00N3f000000uZSl">Agreed to LIABILITY WAIVER &amp; ACKNOWLEDGE:</label>';
                                       registration +='<input id="00N3f000000uZSl" name="00N3f000000uZSl" type="checkbox" value="1" />';

  {/*  Full Legal Name-Electronic Signature: */ }
  registration +='<label for="00N3f000000uZSm">Full Legal Name-Electronic Signature:</label>';
                                         registration +='<input id="00N3f000000uZSm" maxlength="255" name="00N3f000000uZSm" size="20" type="text" />';

  {/*  Electronic Signature Date: */ }
  registration +='<label for="00N3f000000uZSq">Electronic Signature Date:</label>';
                                           registration +='<span class="dateInput dateOnlyInput"><input id="00N3f000000uZSq" name="00N3f000000uZSq" size="12" type="text" /></span>';

                                           registration +='<input type="submit" name="submit">';
  registration += '</fieldset>';
  
                                           registration +='</form>';
  registration += '</div>';
registration += '</section>';

//setting new content for cycleregistration html page,
var sectionRegistrationForm= document.getElementById('cycleRegistrationForm');
sectionRegistrationForm.innerHTML = registration;
}