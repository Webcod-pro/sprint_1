let object: {
	num: number;
	str: string;
	arrStr: string[];
	arrNum: number[];
	bool: boolean;
	tuple: [number, string];
} = {
	num: 123,
	str: "string",
	arrNum: [1, 2, 3],
	arrStr: ["1", "2", "3"],
	bool: true,
	tuple: [4, "str"],
}

const counter: { 
	[key: string]: number 
} = {
	apples: 1,
	orange: 8,
	banana: 6,
	grape: 5
};

const price: { 
	name: string;
	price?: number;
} = {
	name: "Товар 1"
}

let cancelTimeoutCb: () => void;

cancelTimeoutCb = () => {
	console.log(123);
	return 1456;
};


function hof(cb: () => number): void {
  cb();
}

function func(): string {
	console.log('this is not void');
  	return 'this is not void';
}

hof(func); // тут не будет ошибки
