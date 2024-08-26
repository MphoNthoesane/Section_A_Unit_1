let name = prompt("Enter your name: ")
document.getElementById("name").innerHTML = name
let points = 0
let questions = 1
let option_1
let option_2
let option_3
let option_4
let list = document.getElementById("list")

//timer
let countdown = setInterval(bala,1000)
let count = 600
let everything = document.getElementById("everything")
function bala(){
    count--
    document.getElementById("clock").innerHTML = count
    if(count<0){
        everything.style.fontSize = "250px"
        everything.innerHTML = "Time is up!"
    }
}
//Lists of topics
let Objectives_of_Air_Traffic_Services = ["Prevent collisions between aircraft","Prevent collisions between aircraft moving on the manoeuvring area and between aircraft and Obstructions on the manoeuvring area","Expedite and maintain a safe and orderly flow of air traffic","Provide advice and information useful for the safe and efficient conduct of flights","Notify appropriate organisations regarding aircraft in need of SAR aid, and assist such organisations as required"]
let a = Math.floor(Math.random()*Objectives_of_Air_Traffic_Services.length)
let Aerodrome_Controllers = ["providing information and clearances to aircraft under their control to achieve a safe, orderly and expeditious flow of air traffic","Prevent collisions between Aircraft flying in the aerodrome traffic zone or the traffic circuits around the aerodrome","Prevent collisions Aircraft operating on the manoeuvring area, excluding the apron","Prevent collisions Aircraft and vehicles on the manoeuvring area, excluding the apron","Prevent collisions Aircraft and obstructions on the manoeuvring area, excluding the apron"]
let b = Math.floor(Math.random()*Aerodrome_Controllers.length)
let Services_provided_by_Aerodrome_Controllers = ["Aerodrome Control Service ","Flight Information Service","Alerting Service","Air Display Service"]
let c = Math.floor(Math.random()*Services_provided_by_Aerodrome_Controllers.length)
let Aerodrome_Control_Unit = ["provides services principally to aircraft flying with visual reference to the surface in an Aerodrome Traffic Zone where one is established, or, in the aerodrome traffic circuit when the aerodrome is situated within a Control Zone","normally a separate unit, but may be combined, either permanently or temporarily, with an Approach Control Unit"]
let d = Math.floor(Math.random()*Aerodrome_Control_Unit.length)
let Approach_Control = ["provide radar and non-radar approach control services to aircraft arriving, departing, or transiting airspace controlled by the unit","management is very complex because the density of aircraft around busy airports is high and most aircraft are in a dynamic mode of flight due to speed and altitude changes","Depending on the complexity of air traffic within the controlled airspace, approach controllers can "]
let e = Math.floor(Math.random()*Approach_Control.length)
let Area_Control= ["mainly responsible for the safe and efficient conduct of flights on the en- route phase of flight","control service shall be provided an area control centre (ACC)","control service shall be provided by the unit providing approach control service in a control zone or in a control area of limited extent, which has been designated primarily for the provision of approach control service, where no ACC is established."]
let f = Math.floor(Math.random()*Area_Control.length)
let Responsible_ATSU = ["responsibility for the control of an aircraft shall be transferred from a unit providing area control service in a control area to the unit providing area control service in the adjacent control area at the time of crossing the common control area boundary as estimated by the ACC having control of the aircraft or at such other point, level or time as has been agreed between the two units","responsibility for the control of an aircraft shall be transferred from one control sector/position to another control sector/position within the same ATCU at a point, level or time, as specified in local Station Standing Instructions","Transfer of control in accordance with SSI"]
let g = Math.floor(Math.random()*Responsible_ATSU.length)
let Flight_Information_Services = ["shall be provided to all aircraft which are likely to be affected by the information and which are provided with air traffic control service","shall be provided to all aircraft which are likely to be affected by the information and which are otherwise known to the relevant air traffic service units","Include Weather conditions reported or forecast at departure, destination and alternate aerodromes","Include For flight over water areas, in so far as practicable and when requested by a pilot, any available information such as radio callsign, position, true track, speed, etc., of surface vessels in the area"]
let h = Math.floor(Math.random()*Flight_Information_Services.length)
let Scope_of_Flight_Information_Service = ["SIGMET and AIRMET information","Information concerning pre-eruption volcanic activity, volcanic eruptions and volcanic ash clouds","Information concerning the release into the atmosphere of radioactive materials or toxic chemicals","Information on changes in the serviceability of navigation aids","Information on changes in conditions of aerodromes and associated facilities, including information on the state of the aerodrome movement areas when they are affected by snow, ice or significant depth of water","Information on unmanned free balloons","And any other information likely to affect safety"]
let i = Math.floor(Math.random()*Scope_of_Flight_Information_Service.length)
let Division_and_Classification_of_airspace = ["the space from the ground up! In other words 10cm above the ground is in airspace, 5km up from the ground is airspace, and it is in this airspace that aircraft operate"]
let j = Math.floor(Math.random()*Division_and_Classification_of_airspace.length)
let Controlled_Airspace = ["airspace of defined dimensions within which air traffic control service is provided to controlled flights","An Air Traffic Control service is one in which the controller assumes the management of the aircraft in the airspace","controller instructs the pilot at which point to climb, descend or when a radar control service is provided, when to turn","ATZ (Aerodrome Traffic Zone) , CTR (Control Zone) ,TMA (Terminal Control Area) , AWY (Airway) , CTA and UTA (Control area and Upper Control Area) ,RNAV Routes (Area Navigation Route)"]
let k = Math.floor(Math.random()*Controlled_Airspace.length)
let Aerodrome_Traffic_Zone = ["airspace of defined dimensions established around an aerodrome for the protection of aerodrome traffic.","VMC environment, and can therefore only be declared below F200 (no VFR above F200","could be classified as either Class C or Class G airspace, and an aerodrome control service or aerodrome flight information service will be provided respectively"]
let l = Math.floor(Math.random()*Aerodrome_Traffic_Zone.length)
let Control_Zone = ["like the ATZ found in the vicinity of an aerodrome","controlled airspace extending upwards from the surface of the earth to a specified upper limit"]
let m = Math.floor(Math.random()*Control_Zone.length)
let Airway = ["control area or portion thereof established in the form of a corridor. which has navigational radio aids along the route","highways in the sky and will generally only be established on busy routes","may be surrounded by uncontrolled or advisory airspace","depicted on the aeronautical chart as two solid parallel lines, indicating the width","naming is made up of a letter (A,B,G,R or W) followed by 2 to 3 numbers"]
let n = Math.floor(Math.random()*Airway.length)
let Terminal_Control_Area = ["control area normally established at the confluence of ATS routes in the vicinity of one or more major aerodromes","airspace where aircraft from many different places (usually from AWY's), converge, are re-routed and then passed on to controllers at the destination aerodromes"]
let o = Math.floor(Math.random()*Terminal_Control_Area.length)
let RNAV_Routes = ["An ATS route established for the use of aircraft capable of employing area navigation.","provides the potential for increasing airspace capacity both en- route and in the terminal area","determines aircraft position by processing data from one or more sensors. Determination of aircraft position is dependent on factors such as sensor availability and accuracy.","route structures can be modified quickly and easily to meet the changing requirements of the user community. The routes can be shorter, simpler and, where necessary, can be designed to minimise the environmental impact"]
let p = Math.floor(Math.random()*RNAV_Routes.length)
let Uncontrolled_Airspace = ["airspace in which an air traffic service is provided, but in which the service provided is either an Information service, or an Advisory service"]
let q = Math.floor(Math.random()*Uncontrolled_Airspace.length)
let Controlled_Service = ["An Air Traffic Control service is one in which the controller assumes the management of the aircraft in the airspace.","controller instructs the pilot at which point to climb, descend or when a radar control service is provided, when to turn."]
let r = Math.floor(Math.random()*Controlled_Service.length)
let Advisory_Service= ["one in which the pilot and the controller share in the responsibility for the effective management of the air traffic flow"]
let s = Math.floor(Math.random()*Advisory_Service.length)
let Information_Service = ["responsibility of effective and safe traffic flow is shifted to the pilot. This does not mean that the controller has no obligation; the obligation however is that of passing on information to the pilot (as with advisory airspace), but then leaving the decisions and actions to be taken in the hands of the pilot.","controller therefore becomes the co-ordinator between pilots."]
let t = Math.floor(Math.random()*Information_Service.length)
let Advisory_Airspace = ["airspace of defined dimensions, or designated route within which air traffic advisory service is provided","like highways in the sky and will generally only be established on busy routes","indicated on an aeronautical chart by means of a letter A, B, G, R or W, followed by 2 to 3 a numbers, and ending in the letter D","represented by two parallel dashed lines indicating the width of the route with the minimum and maximum levels of the airspace indicated","any type is Class F airspace","manned by an Area Controller, and is addressed on the radio as the station name followed by the service being provided","same controller controlling the Airway, and providing information to aircraft on an Information Route"]
let u = Math.floor(Math.random()*Advisory_Airspace.length)
let Information_Airspace = ["airspace of defined dimensions, or a designated route within which air traffic information service is provided"]
let v = Math.floor(Math.random()*Information_Airspace.length)
let Aerodrome_Traffic_Zone_ATZ__Class_G_airspace = ["an Aerodrome Flight Information Service (AFIS) only will be provided inside","usually established at aerodromes which are relatively busy, but do not require an aerodrome control service","may be established at an aerodrome on a temporary basis due to special events taking place, etc","contrasted by an ATZ (Class C) airspace which will be established at an aerodrome when an aerodrome control service is to be provided."]
let w = Math.floor(Math.random()*Aerodrome_Traffic_Zone_ATZ__Class_G_airspace.length)
let Flight_Information_Route = ["is the information version of the Airway (controlled service), and the Advisory Route (advisory service)","a route on which an information service is provided","has an upper and a lower limit, and on the aeronautical chart is represented by a single, dashed line","identified (as is the case with the airway and advisory route), by a single letter, being either A, B, G R or W, a number and followed by 2 to 3 numbers, ending by letter F."]
let x = Math.floor(Math.random()*Flight_Information_Route.length)
let Danger_Areas_FAD = ["airspace of defined dimensions, in which there are activities (either in the air or on the ground) that may be considered dangerous to the flight of aircraft.","Flying training areas are generally declared","The pilot will be required to co- ordinate his own passage through such airspace, either on a dedicated frequency, or on the general VFR frequency for that specific area."]
let y = Math.floor(Math.random()*Danger_Areas_FAD.length)
let Restricted_Areas_FAR = ["airspace of defined dimensions, through which the passage of aircraft movements is restricted","aircraft may only be allowed to pass through such airspace under certain conditions"]
let z = Math.floor(Math.random()*Restricted_Areas_FAR.length)
let Prohibited_Area_FAP = ["airspace of defined dimensions, through which all flights are at all times prohibited"]
let aa = Math.floor(Math.random()*Prohibited_Area_FAP.length)
let Special_Rules_Area = ["declared, in those areas that are considered to be of such a nature that normal regulations (as applicable to all other uncontrolled airspace) will not provide a safe and efficient flow of traffic","pilots operating in such areas are to follow the special rules"]
let bb = Math.floor(Math.random()*Special_Rules_Area.length)
let ATSU_may_undertake_one_or_more_of_the_ATS_functions = ["Approach Control may be combined with Aerodrome Control, in which case the combined service will be identified by the call-sign of the TWR, i.e. ... (name of aerodrome) ... Tower","Approach Control may be combined with Area Control, in which case the combined service may be identified by the call sign of the ACC i.e. ....(name of city) Control, or by the name of the city followed by the word APPROACH"]
let cc = Math.floor(Math.random()*ATSU_may_undertake_one_or_more_of_the_ATS_functions.length)
let Military_aircraft_operating_In_Controlled_Airspace = ["comply with civil air traffic control procedures","Air Traffic Service Units (ATSUs) will provide such military aircraft with normal air traffic services and facilities."]
let dd = Math.floor(Math.random()*Military_aircraft_operating_In_Controlled_Airspace.length)
let Military_aircraft_operating_Outside_Controlled_Airspace = ["will normally comply with civil air traffic procedures.","ATSUs will provide all known military aircraft operating in the FIRs with normal air traffic services and facilities."]
let ee = Math.floor(Math.random()*Military_aircraft_operating_Outside_Controlled_Airspace.length)
let Reduced_Weather_Minima_for_South_African_Air_Force_Helicopters = ["may be allowed to operate outside of controlled airspace below 700 ft above the ground or water, clear of cloud and with a flight visibility of ¼ NM (453 metres).","may also be granted Special VFR clearance to operate in a CTR clear of cloud with a ground visibility of ¼ NM (453 metres).","Apart from the reduced weather minima, SAAF helicopters are subject to the normal rules applicable to Special VFR operations within CTRs"] 
let ff = Math.floor(Math.random()*Reduced_Weather_Minima_for_South_African_Air_Force_Helicopters.length)
let Unmanned_Free_Balloons = ["The permission is subject to conditions that the balloon will not endanger air traffic.","Under special conditions the Commissioner may exempt the balloon from all of these regulations"]
let gg = Math.floor(Math.random()*Unmanned_Free_Balloons.length)
let Classification_of_Unmanned_Free_Balloons = ["Light: an unmanned free balloon which carries a payload of one or more packages with a combined mass of less than 4 kg","Medium: an unmanned free balloon which carries a payload of two or more packages with a combined mass of 4 kg or more, but less than 6 kg","Heavy: an unmanned free balloon which carries a payload which has a combined mass of 6 kg or more"]
let hh = Math.floor(Math.random()*Classification_of_Unmanned_Free_Balloons.length)
let General_operating_rules_Unmanned_Free_Balloons = ["No operation shall take place without the prior written permission of the Commissioner and on the conditions determined","other than a light balloon used exclusively for meteorological purposes and operated in the manner prescribed by the appropriate authority, shall not be operated across the territory of another State without appropriate authorization from the other State concerned. This authorisation shall be obtained prior to the launching of the balloon if there is reasonable expectation, when planning the operation that the balloon may drift into airspace over the territory of another State. Such authorisation may be obtained for a series of balloon flights or for a particular type of recurring flight, e.g. atmospheric research balloon flights.","operated in accordance with conditions specified by the State of Registry and the State(s) expected to be overflown.","shall not be operated in such a manner, that impact of the balloon, (or any part thereof including its payload), with the surface of the earth, creates a hazard to persons or property not associated with the operation","heavy balloon shall not be operated over the high seas without prior co-ordination with the appropriate ATS authority."]
let ii = Math.floor(Math.random()*General_operating_rules_Unmanned_Free_Balloons.length)
let Pilot_or_Ceiling_Balloons = ["are used to ascertain the cloud height, wind speed, direction and high altitude wind speed and direction. These balloons are normally launched with a theodolite and are not designed to carry a heavy load. The weight and size of the balloon has great significance and should be selected, based on altitude and ascent rate required"]
let jj = Math.floor(Math.random()*Pilot_or_Ceiling_Balloons.length)
let Sounding_Balloons = ["are larger in size when compared to Pilot or Ceiling balloons and are designed to carry a load, i.e. Radio-sonde or Radar target, etc. These balloons are usually launched from a tracking station. The required burst altitude should be used to ascertain the weight of balloon."]
let kk = Math.floor(Math.random()*Sounding_Balloons.length)
let No_captive_balloon_operation_shall_be_conducted = ["By Night","Higher than 150 feet above the surface","From or above a public road"," Less than 8 km from the aerodrome reference point of a licensed or appropriately approved aerodrome"]
let ll  = Math.floor(Math.random()*No_captive_balloon_operation_shall_be_conducted.length)

//Changing of topics
let topics = ["Objectives of Air Traffic Services",
    "Aerodrome Controllers",
    "Services provided by Aerodrome Controllers",
    "Aerodrome Control Unit",
    "Approach Control",
    "Area Control",
    "Responsible ATSU",
    "Flight Information Services",
    "Scope of Flight Information Service",
    "Division and Classification of airspace",
    "Controlled Airspace",
    "Aerodrome Traffic Zone",
    "Control Zone",
    "Airway",
    "Terminal Control Area",
    "RNAV Routes",
    "Uncontrolled Airspace",
    "Controlled Service",
    "Advisory Service",
    "Information Service",
    "Advisory Airspace",
    "Information Airspace",
    "Aerodrome Traffic Zone (ATZ) - Class G airspace",
    "Flight Information Route",
    "Danger Areas (FAD)",
    "Restricted Areas (FAR)",
    "Prohibited Area (FAP)",
    "Special Rules Area",
    "ATSU may undertake one or more of the ATS functions",
    "Military aircraft operating - In Controlled Airspace",
    "Military aircraft operating - Outside Controlled Airspace",
    "Reduced Weather Minima for South African Air Force Helicopters",
    "Unmanned Free Balloons",
    "Classification of Unmanned Free Balloons",
    "General operating rules: Unmanned Free Balloons",
    "Pilot or Ceiling Balloons",
    "Sounding Balloons",
    "No captive balloon operation shall be conducted"

]
//Shuffling topics
function shuffle(){
    let currentindex = topics.length;
    while(currentindex!=0){
        let randomindex = Math.floor(Math.random()*topics.length)
        currentindex--
        let x = topics[currentindex]
        topics[currentindex] = topics[randomindex]
        topics[randomindex] = x
    }
    return topics
}


//dictionary
const dictionary_of_topics = new Map([
    [topics[0],Objectives_of_Air_Traffic_Services[a]],
    [topics[1],Aerodrome_Controllers[b]],
    [topics[2],Services_provided_by_Aerodrome_Controllers[c]],
    [topics[3],Aerodrome_Control_Unit[d]],
    [topics[4],Approach_Control[e]],
    [topics[5],Area_Control[f]],
    [topics[6],Responsible_ATSU[g]],
    [topics[7],Flight_Information_Services[h]],
    [topics[8],Scope_of_Flight_Information_Service[i]],
    [topics[9],Division_and_Classification_of_airspace[j]],
    [topics[10],Controlled_Airspace[k]],
    [topics[11],Aerodrome_Traffic_Zone[l]],
    [topics[12],Control_Zone[m]],
    [topics[13],Airway[n]],
    [topics[14],Terminal_Control_Area[o]],
    [topics[15],RNAV_Routes[p]],
    [topics[16],Uncontrolled_Airspace[q]],
    [topics[17],Controlled_Service[r]],
    [topics[18],Advisory_Airspace[s]],
    [topics[19],Information_Service[t]],
    [topics[20],Advisory_Airspace[u]],
    [topics[21],Information_Airspace[v]],
    [topics[22],Aerodrome_Traffic_Zone_ATZ__Class_G_airspace[w]],
    [topics[23],Flight_Information_Route[x]],
    [topics[24],Danger_Areas_FAD[y]],
    [topics[25],Restricted_Areas_FAR[z]],
    [topics[26],Prohibited_Area_FAP[aa]],
    [topics[27],Special_Rules_Area[bb]],
    [topics[28],ATSU_may_undertake_one_or_more_of_the_ATS_functions[cc]],
    [topics[29],Military_aircraft_operating_In_Controlled_Airspace[dd]],
    [topics[30],Military_aircraft_operating_Outside_Controlled_Airspace[ee]],
    [topics[31],Reduced_Weather_Minima_for_South_African_Air_Force_Helicopters[ff]],
    [topics[32],Unmanned_Free_Balloons[gg]],
    [topics[33],Classification_of_Unmanned_Free_Balloons[hh]],
    [topics[34],General_operating_rules_Unmanned_Free_Balloons[ii]],
    [topics[35],Pilot_or_Ceiling_Balloons[jj]],
    [topics[36],Sounding_Balloons[kk]],
    [topics[37],No_captive_balloon_operation_shall_be_conducted[ll]],
    
])

//Shuffle the list

//Choosing topics
let topic1 = topics[0]
let topic2 = topics[1]
let topic3 = topics[2]
let topic4 = topics[3]
let topic5 = topics[4]
let topic6 = topics[5]
let topic7 = topics[6]
let topic8 = topics[7]
let topic9 = topics[8]
let topic10 = topics[9]
let topic11 = topics[10]
let topic12 = topics[11]
let topic13 = topics[12]
let topic14 = topics[13]
let topic15 = topics[14]
let topic16 = topics[15]
let topic17 = topics[16]
let topic18 = topics[17]
let topic19 = topics[18]
let topic20 = topics[19]
let topic21 = topics[20]
let topic22 = topics[21]
let topic23 = topics[22]
let topic24 = topics[23]
let topic25 = topics[24]
let topic26 = topics[25]
let topic27 = topics[26]
let topic28 = topics[27]
let topic29 = topics[28]
let topic30 = topics[29]

quiz_project()
function quiz_project(){
    shuffle(topics)
    //topic screen
    document.getElementById("topic").innerHTML = topics[0]
    //options taken
    option_1 = dictionary_of_topics.get(topics[0])
    option_2 = dictionary_of_topics.get(topics[1])
    option_3 = dictionary_of_topics.get(topics[2])
    option_4 = dictionary_of_topics.get(topics[3])
    //options transferred

    //options shuffled
    for(let i = list.children.length;i>=0;i--){
        list.appendChild(list.children[Math.random()*i|0])
    }

    //options displayed
    document.getElementById("option-1").innerHTML = option_1
    document.getElementById("option-2").innerHTML = option_2
    document.getElementById("option-3").innerHTML = option_3
    document.getElementById("option-4").innerHTML = option_4

    //countdown started
    


}
let marker1 = document.getElementById("right")
let marker2 = document.getElementById("wrong")
document.getElementById("mark").onclick = function(){
    if(document.getElementById("answer").checked){
        points++
        setTimeout(timer,400)
        function timer(){
            marker1.style.visibility = "visible"
            marker2.style.visibility = "hidden"
        }
        document.getElementById("points").innerHTML = points
        
    }
    else{
        setTimeout(timer,400)
        function timer(){
            marker2.style.visibility = "visible"
            marker1.style.visibility = "hidden"
        }
        
    }
}
document.getElementById("next").onclick = function(){
    questions++
    marker1.style.visibility = "hidden"
    marker2.style.visibility = "hidden"
    quiz_project()
    document.getElementById("question-num").innerHTML = questions


    if(questions>=30){
        questions = 30
        let marker = document.getElementById("box1")
        marker.style.visibility = "visible"
        marker.style.fontSize = "120px"
        marker.innerHTML = "Done!"
        clearInterval(bala)
        let button1 = document.getElementById("mark")
        let button2 = document.getElementById("next")
        let qetile = document.getElementById("clock")
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        qetile.style.visibility = "hidden"
    }
}