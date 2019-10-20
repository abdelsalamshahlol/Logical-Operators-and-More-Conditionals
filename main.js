// Basic Requirments

// A - 1

// ! operator is a unary.

// A - 2

 !(2 >= 2) 		//	false
 !(4 === 4) 	//	false
 !(5 !== 5)		//	true

 // A - 3

 1 > 2 || 2 > 2 || 3 > 2  	//	true
 5 < 5 || 75 < 74			//	false

 // A - 4

 //	'Either it is warm today, or it is cold today.'  
 //	'warm' || 'cold'

 //	'That dog is either a french bulldog or a boston terrier.'
 // 'french bulldog' || 'boston terrier'

 // A - 5

 var x = 6; 	// true x = 6 
 x = 4; 		// false x = 4
 x > 5 && x <= 12; 

// A - 6

// 'It is cold and raining outside.' 
// 'cold' && 'raining'

// 'That cat is hissing and growling.'
// 'hissing' && 'growling'

// A - 7

function rentalCar(name, age) {
		if(age >= 21 && name !=='Joe'){
			return 'Have fun driving, ' + name + '!';
		}
		else{
			return 'You cannot have the keys, .';
		}
}

// A - 8

function scoreToGrade(score) { 
 	if (score <= 100 && score >= 90){
		return "A";
	}else if (score < 90&& score >= 80){
		return "B";
	}else if (score < 80 && score >= 70){
		return "C";
	}else if (score < 70 && score >= 60){
		return "D";
	}else if (score < 60 && score >= 0){
		return "F";
	}
} 

// A - 9

function scoreToGrade(argument) {
	if (score <= 100 && score >= 90){
		return "A";
	}else if (score < 90&& score >= 80){
		return "B";
	}else if (score < 80 && score >= 70){
		return "C";
	}else if (score < 70 && score >= 60){
		return "D";
	}else if (score < 60 && score >= 0){
		return "F";
	} else {
		return "Invalid Grade";
	}
}

// More Practice

// A - 1

function whatToDoOutside(temp, cond){
	if ((temp<0) && (cond==="snowy")){
		return "The weather is ideal for: Snowboarding."
	}else if ((temp < 25) && (cond === "sunny")){
		return "The weather is ideal for: Baseball.";
	}else if ((temp < 40) && (cond === "sunny")){
		return "The weather is ideal for: Swimming.";
	}else if (temp > 40){
		return "Just stay home";
	}else{
		return "Figure Something Else";
	}
}

// A - 2

function randInt(n) {
	return Math.floor(Math.random() * (n - 0 + 1) + 0);
}

function guessMyNumber(num) {
	if(num > 5 || num < 0){
		return 'Out of bounds';
	}
	return num === randInt(5) ? 'You guessed my number!' : 'Nope! That wasn\'t it!';
}

// A - 3

function scoreToGrade(score) {
    if (score <= 100 && score >= 90) {
        if (score > 95) {
            return "A+";
        } else {
            return "A-";
        }
    } else if (score < 90 && score >= 80) {
        if (score > 85) {
            return "B+";
        } else {
            return "B-";
        }
    } else if (score < 80 && score >= 70) {
        if (score > 75) {
            return "C+";
        } else {
            return "C-";
        }
    } else if (score < 70 && score >= 60) {
        if (score > 65) {
            return "D+";
        } else {
            return "D-";
        }
    } else if (score < 60 && score >= 0) {
        return "F";
    } else {
        return "Invalid Grade";
    }
}

// Advanced

// A - 1

function rentalCar(name, age, day) {
    if (age > 21 && name !== 'Joe') {
        return 'Have fun driving, ' + name + '!';
    } else if (age >= 18 && age <= 21 && (day === 'Monday' || day === 'Tuesday') && name !== 'Joe') {
        return 'Have fun driving, ' + name + '!';
    } else {
        return 'You cannot have the keys, .';
    }
}

// A - 2

function letterGrade(letter, score) {
    if (score !== 100) {
        if (score % 10 >= 5) {
            letter += "+";
            return letter
        } else {
            letter += "-";
            return letter;
        }
    }
    letter += "+";
    return letter;
}

function scoreToGrade(score) {
    if ((score <= 100) && (score >= 90)) {
        var letter = "A"
        return letterGrade(letter, score);
    } else if ((score < 90) && (score >= 80)) {
        var letter = "B"
        return letterGrade(letter, score);
    } else if ((score < 80) && (score >= 70)) {
        var letter = "C"
        return letterGrade(letter, score);
    } else if ((score < 70) && (score >= 60)) {
        var letter = "D"
        return letterGrade(letter, score);
    } else if ((score < 60) && (score >= 0)) {
        return "F";
    } else {
        return "Invalid Grade";
    }
}

// A - 3 

// From Wikipedia
//not (A or B) = not A and not B; and
//not (A and B) = not A or not B

function likeOr(a, b) {
    return !a && !b;
}

function likeAnd(a, b) {
    return !a || !b;
}

// A - 4

//	Answer is 90

// A - 5

//	Answer is 36

// A - 6

//	Answer is 10

// A - 7

//	Answer is 15 