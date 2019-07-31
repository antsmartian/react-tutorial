export default function calculate(state, name) {
	
	const operators = ["x", "+", "-"];

	if (name === "C") {
		return {
			total: null, 
			operation: null, 
			next: null
		}
	}

	if(isNumber(name)) {
		return { 
			next: name, 
			total: state.total, 
			operation: state.operation
		}
	}

	const result = operators.map((operator) => {
		console.log(operator, name)
		if ( name === operator) {
			return { 
				total: state.next, 
				operation: operator,
				next: null
			}
		}
	})

	/*
	if ( name === "x") {
		return { 
			total: state.next, 
			operation: "x",
			next: null
		}
	}

	if (name === "+") {
		return {
			total: state.next, 
			operation: "+",
			next: null
		}
	}

	if (name === "-") {
		return {
			total: state.next, 
			operation: "-",
			next: null
		}
	} */

	// final calculation
	if (name === "=") {
		if (state.operation === "x") {
			return {
				total: state.total * state.next,
				operation: null, 
				next: null,
				ab : "something"
			}
		} else if (state.operation === "+") {
			return {
				total : String(+(state.total) + (+state.next)), 
				operation: null, 
				next: null
			}
		} else if (state.operation === "-") {
			return {
				total : String(+(state.total) - (+state.next)), 
				operation: null, 
				next: null
			}
		}
	} 

	return result[0];
}

function isNumber(state) {
	return /[0-9]+/.test(state)
}