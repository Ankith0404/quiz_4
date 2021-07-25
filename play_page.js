player1_name = localStorage.getItem("player_1_name");
player2_name = localStorage.getItem("player_2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player1_name + " : ";
document.getElementById("player_2_name").innerHTML = player2_name + " : ";

document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name;


function send(){

    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>"+ number1  +  " X "  +  number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_box = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row = question_number + input_box + check_box ;

    document.getElementById("output").innerHTML = row ;
    document.getElementById("number_1").innerHTML = "";
    document.getElementById("number_2").innerHTML = "";
}



function check()
{

      get_answer = document.getElementById("input_check_box").value;

      if(get_answer == actual_answer)
      {

        if(answer_turn == "player_1")
        {

            updated_player1_score = player1_score + 1;
            document.getElementById("player_1_score").innerHTML = updated_player1_score;
        }

        else{
     
            updated_player2_score = player2_score + 1;
            document.getElementById("player_1_score").innerHTML = updated_player2_score;
        }
      }

      if(answer_turn == "player_1"){

        answer_turn = "player_2";
        document.getElementById("answer_turn").innerHTML = "Answer turn - " + player2_name ; 
      }

      else{

        answer_turn = "player_1";
        document.getElementById("answer_turn").innerHTML = "Answer turn - " + player1_name ; 
      }

      if(answer_turn == "player_1"){

        answer_turn = "player_2";
        document.getElementById("answer_turn").innerHTML = "Answer turn - " + player2_name ; 
      }

      else{

        answer_turn = "player_1";
        document.getElementById("answer_turn").innerHTML = "Answer turn - " + player1_name ; 
      }

      

}

document.getElementById("number_1").innerHTML = "";
document.getElementById("number_2").innerHTML = "";