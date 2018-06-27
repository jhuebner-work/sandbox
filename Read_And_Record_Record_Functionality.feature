

Feature: Read and Record Word Window

	Scenario Outline: Ready to record
	
		Given that the recording instructions have played 
		And the student named <student> has been prompted to record the word
		Then the student named <student> may record	
		|student|Persona|
		|Latisha|5th grade student who needs interventional help|
		|Jimmy|An average performing 7th grade student| 

	Scenario: Record word when prompted
	
		Given that the recording instructions have played
		And the student has been prompted to record the word
		When the student starts recording
		And the student speaks into the microphone
		Then the student's voice is recorded
		
	Scenario: Ready to play recording
	
		Given that the student has been prompted to record 
		And the student has started recording
		When the student has finished recording
		Then the student may play the recording
		
	Scenario: Play button plays recorded word
	
		Given the student has made a recording
		When the student decides to listen to the recording
		Then the student's recording and the pronouncer's recording are played

	Scenario: Student is able to continue

		Given that the student has recorded the word 
		And the student has listened to the recorded word 
		When the student is finished
		Then the student is able to continue to the Study section


