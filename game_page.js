
    player1_name=localStorage.getItem("player1_name");
    player2_name=localStorage.getItem("player2_name");
    
    player1_score=0;
    player2_score=0;
    
    document.getElementById("player1_name").innerHTML= player1_name +" : ";
    document.getElementById("player2_name").innerHTML= player2_name +" : ";
    
    document.getElementById("player1_score").innerHTML= player1_score;
    document.getElementById("player2_score").innerHTML= player2_score;
    
    document.getElementById("player_question").innerHTML= " Question Turn -"+player1_name;
    document.getElementById("player_answer").innerHTML= " Answer Turn -"+player2_name;
    
    function send() {
        get_word=document.getElementById("word").value;
        word = get_word.toLowerCase();
        console.log("word in lowercase =" + word);
    
        chartAt1 = word.charAt(1);
        console.log(chartAt1);
    
        length_divide_2 = Math.floor(word.length/2);
        chartAt2 = word.charAt(length_divide_2);
        console.log(chartAt2);
    
        length_minus_1 = word.length - 1;
        chartAt3 = word.charAt(length_minus_1);
        console.log(chartAt3);
    
        remove_chartAt1=word.replace(chartAt1," - ");
        remove_chartAt2=remove_chartAt1.replace(chartAt2, " - ");
        remove_chartAt3 = remove_chartAt2.replace(chartAt3," - ");
        console.log(remove_chartAt3);
    
        question_word ="<h4 id='word_display'> Q. " +remove_chartAt3+"</h4>";
        input_box="<br> Answer : <input type='text' id='input_check_box'> ";
        check_button="<br><br><button class='btn btn-info' onclick='check()'.>CHECK</button>";
        row=question_word=input_box+check_button;
        document.getElementById("word").value= "";
    }