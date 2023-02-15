type Settings = {
	color: string;
	delay: number;
	retry: boolean;
};

const settings: Settings = {
	color: "#f00",
	delay: 2000,
	retry: false,
};


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
	arrStr: ["1", "2", "3"],
	arrNum: [1, 2, 3],
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


abstract class Snake {
	private readonly _length: number;

	public get length(): number {
		return this._length/100;
	};

	constructor(length: number) {
		this._length = length;
	};

	protected abstract makeSound(): void;

}
