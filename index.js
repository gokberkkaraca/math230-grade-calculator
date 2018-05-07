function calculate() {

	var mt_weight = 0.50;
	var q_weight = 0.10;
	var hw_weight = 0.10;
	var final_weight = 0.30;

	var mt_avg = calculate_midterms();
	var q_avg = calculate_quizzes();
	var hw_avg = calculate_homeworks();

	var total = mt_avg*(100/100)*mt_weight + q_avg*(100/30)*q_weight + hw_avg*(100/20)*hw_weight;
	var A_grade = ((80-total) * (100/30)).toFixed(2);
	if (A_grade < 0) {
		A_grade = "&#x2714;";
	} else if (A_grade > 100) {
		A_grade = "&#x2718;";
	}
	var Aminus_grade = ((75-total) * (100/30)).toFixed(2);
	if (Aminus_grade < 0) {
		Aminus_grade = "&#x2714;";
	} else if (Aminus_grade > 100) {
		Aminus_grade = "&#x2718;";
	}
	var Bplus_grade = ((70-total) * (100/30)).toFixed(2);
	if (Bplus_grade < 0) {
		Bplus_grade = "&#x2714;";
	} else if (Bplus_grade > 100) {
		Bplus_grade = "&#x2718;";
	}
	var B_grade = ((65-total) * (100/30)).toFixed(2);
	if (B_grade < 0) {
		B_grade = "&#x2714;";
	} else if (B_grade > 100) {
		B_grade = "&#x2718;";
	}
	var Bminus_grade = ((60-total) * (100/30)).toFixed(2);
	if (Bminus_grade < 0) {
		Bminus_grade = "&#x2714;";
	} else if (Bminus_grade > 100) {
		Bminus_grade = "&#x2718;";
	}
	var Cplus_grade = ((55-total) * (100/30)).toFixed(2);
	if (Cplus_grade < 0) {
		Cplus_grade = "&#x2714;";
	} else if (Cplus_grade > 100) {
		Cplus_grade = "&#x2718;";
	}
	var C_grade = ((50-total) * (100/30)).toFixed(2);
	if (C_grade < 0) {
		C_grade = "&#x2714;";
	} else if (C_grade > 100) {
		C_grade = "&#x2718;";
	}
	var Cminus_grade = ((45-total) * (100/30)).toFixed(2);
	if (Cminus_grade < 0) {
		Cminus_grade = "&#x2714;";
	} else if (Cminus_grade > 100) {
		Cminus_grade = "&#x2718;";
	}
	var Dplus_grade = ((40-total) * (100/30)).toFixed(2);
	if (Dplus_grade < 0) {
		Dplus_grade = "&#x2714;";
	} else if (Dplus_grade > 100) {
		Dplus_grade = "&#x2718;";
	}
	var D_grade = ((35-total) * (100/30)).toFixed(2);
	if (D_grade < 0) {
		D_grade = "&#x2714;";
	} else if (D_grade > 100) {
		D_grade = "&#x2718;";
	}

	document.getElementById("final-grade").innerHTML = 
		`<table class="table table-bordered table-sm output-table">
		<tr class="table-info"><td>Letter Grade</td><td>Final Grade</td></tr> 
		<tr><td>A</td><td>` + A_grade + `</td></tr>
		<tr><td>A-</td><td>` + Aminus_grade + `</td></tr>
		<tr><td>B+</td><td>` + Bplus_grade + `</td></tr>
		<tr><td>B</td><td>` + B_grade + `</td></tr>
		<tr><td>B-</td><td>` + Bminus_grade + `</td></tr>
		<tr><td>C+</td><td>` + Cplus_grade + `</td></tr>
		<tr><td>C</td><td>` + C_grade + `</td></tr>
		<tr><td>C-</td><td>` + Cminus_grade + `</td></tr>
		<tr><td>D+</td><td>` + Dplus_grade + `</td></tr>
		<tr><td>D</td><td>` + D_grade + `</td></tr>
		</table>`;

		document.getElementById("final-title").innerHTML = "Final Grades";

	document.getElementById("hw-avg").innerHTML = hw_avg.toFixed(2);
	document.getElementById("q-avg").innerHTML = q_avg.toFixed(2);
	document.getElementById("mt-avg").innerHTML = mt_avg.toFixed(2);
}

function calculate_midterms() {
	var mt1_score = document.getElementById("mt1-score").value;
	var mt2_score = document.getElementById("mt2-score").value;
	return (Number(mt1_score) + Number(mt2_score)) / 2;
}

function calculate_quizzes() {
	var q1_score = document.getElementById("q1-score").value; 
	var q2_score = document.getElementById("q2-score").value;
	var q3_score = document.getElementById("q3-score").value; 
	var q4_score = document.getElementById("q4-score").value;
	var q5_score = document.getElementById("q5-score").value;

	var total = Number(q1_score) + Number(q2_score) + Number(q3_score) + Number(q4_score) + Number(q5_score);
	var min = Math.min(Number(q1_score), Number(q2_score), Number(q3_score), Number(q4_score), Number(q5_score));

	console.log(total + ", " + min + ", " + (Number(total) - Number(min)) / 4);
	return (Number(total) - Number(min)) / 4;
}

function calculate_homeworks() {
	var hw1_score = document.getElementById("hw1-score").value; 
	var hw2_score = document.getElementById("hw2-score").value;
	var hw3_score = document.getElementById("hw3-score").value; 
	return (Number(hw1_score) + Number(hw2_score) + Number(hw3_score)) / 3;
}