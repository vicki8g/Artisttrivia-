var data = [
	{
		question:'Who is the artist that painted this?',
		answer1:'Monet',
		answer2:'Pabllo Picasso',//correct
		answer3:'Andy Warhol',
		answer4:'Sia',
		answer5:'Emily Dickenson', 
		image:'assets/images/painting1.jpg',
		correct: '2'
	},

	{
		question:'Who is the artist that painted this?',
		answer1:'Gustav Klimt', //correct
		answer2:'Botticelli',
		answer3:'Leonardo da Vinci',
		answer4:'Edvard Munch',
		answer5:'Michaeles Aronic',  
		image:'assets/images/painting2.jpg',
		correct:'1'
	},
	
	{
		question:'Who is the artist that painted this?',
		answer1:'Raphael',
		answer2:'Botticelli',
		answer3:'Gustav Klimit',
		answer4:'Johannes Vermeer',//correct
		answer5:'Augustus IV', 
		image:'assets/images/painting3.jpg',
		correct: '4'
	},
	
	{
		question:'Who is the artist that painted this?',
		answer1:'Andy Warhol',
		answer2:'Rembrandt Harmenszoon van Rijn',
		answer3:'Monet', //correct
		answer4:'Micheal Angelo',
		answer5:'Picasso',  
		image:'assets/images/painting4.jpg',
		correct:'3'
	},

	{
		question:'Who painted this?',
		answer1:'Clemenceua',
		answer2:'Rembrandt',
		answer3:'Munch',
		answer4:'Picasso',
		answer5:'Monet', //correct 
		image:'assets/images/painting5.jpg',
		correct:'5'
	}
];

$( document ).ready(function() { 
	

	$('#question').hide();	

	var correct = 0
	var count = 1
	var countdown = 30
	var stop = function () {  //stop function
		countdown = countdown;
	}
	var final = function () {
	// give out final stats for the player
	$('#start').show();
	$('#question').hide();
	$('#start h1').text('All Done!')
	$('#start p').text('Here\'s how you did:')
	$('#button').off('click')
	$('#button').animate({
		width:'300px',
		height:'100px'
	})
	$('#button').text('correct: '+ correct)
	}
//game function below
	var questionBlock = function () { 
		
		// time with 30 seconds countdown player
		countdown = 30 ;
		//displays how many secs are left
		$('#secs').text(countdown); 
		//sets count down interval from 30 
		var setIntervalID = setInterval(function counter(){ 

			if (countdown == 30 && count > data.length) {
				clearInterval(setIntervalID)
				stop();
				$('#questions').hide();
				final();
			} else if (countdown == 0) {
				clearInterval(setIntervalID)
				stop();
				count++
				questionBlock();

			} else if (count <= data.length){
				countdown = countdown - 1;
			} 
			$('#sec').text(countdown + " secs");

		}, 1000);
		
		$('#start').hide();  //Hide the starting page
		$('.number').text(count);  //Displays the question player is on
		

		for (i=1;i<6;i++){  // 
			if (count <= data.length) { //if you're count is less than 
				
			$('#a'+i).text(data[count-1]["answer"+i]) ///uses var count as index to load questions
		
			} else if (count > data.length) {
				$('#start').show();
				$('#question').hide();
			
			};

		};
		//put image based on count to pop up - only number differs in name
		$('img').attr('src', 'assets/images/painting'+count+'.jpg'); 
		$('#question').show();
		
		$('input').on('click', function (){
			if(count <= data.length){
				var chosen = $("input:checked").val();
				console.log(data[count-1]['answer' + chosen])

				if(chosen != data[count-1].correct && chosen != null){
					debugger;
					clearInterval(setIntervalID);
					stop();
					$(this).prop('checked', false)
					chosen = null
					$('input').off('click');
				};

				if(chosen == data[count-1].correct){
					debugger;
					correct++
					// increase correct count when checked
					clearInterval(setIntervalID);
					stop();
					$(this).prop('checked', false)
					chosen = null
					$('input').off('click')
				}; 
				//increment count 
				count++
			};
			//terms to end game and provide final stats
			if(count > data.length && !($('input').is(':checked'))){
				final()
			};
			if(count > data.length){
				final();
			};

			if(count <= data.length){
				questionBlock();
			};
		});

	};

	$('#button').on('click', function () {
		//give click function to questionBlock
		questionBlock();
		

	});

}); 









