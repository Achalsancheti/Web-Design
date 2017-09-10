var app = angular.module('eventsApp', []);

app.controller('eventsCtrl', 
function($scope,$http){
  /*$scope.posts = [
  {id:'odd', day: '26', month: 'Dec', year:'2016', time:'11:00 AM', alt:'Event 3', src:'images/event3.jpg', title:'FINDING FACULTY MENTORS', desc:'This workshop presents strategies for connecting with faculty members and sustaining the researcher-mentor relationship. Hear advice garnered from successful student researchers and professors about topics including: locating potential mentors; making the initial contact; discussing mentor/mentee expectations and responsibilities; communicating throughout the project; and nurturing the relationship into the future. ...... ', hrf:'https://www.eventbrite.com/e/finding-faculty-mentors-tickets-29058768559'},
  {id:'even', day: '25', month: 'Dec', year:'2016', time:'2:00 PM', alt:'Event 2', src:'images/event2.jpg', title:'CAREER FAIR 2016 - Information Systems', desc:'Meet with employers in an informal setting and learn more about job and internship opportunities offered by companies, government agencies, and non-profit organizations where you might like to work. .......', hrf:'https://www.eventbrite.com'},
  {id:'odd',day: '15', month: 'Dec', year:'2016', time:'6:00 PM', alt:'Event 1', src:'images/event1.jpg', title:'Seminar on \'EMERGING TRENDS IN INFORMATION TECHNOLOGY\'', desc:'21st century has been defined by application of and advancement in information technology. Information technology has become an integral part of our daily life. According to Information Technology Association of America, information technology is defined as “the study, design, development, application, implementation, support or management of computer-based information systems.” ......', hrf:'https://www.eventbrite.com'} */
  
  $http.get("http:localhost/events.php")
    .then(function (response) {
		alert(response);
		$scope.posts = response.data.records;});
 
});