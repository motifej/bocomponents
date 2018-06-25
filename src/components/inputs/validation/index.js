export const required = value => (value ? undefined : "Required");

export const minLength = min => value =>
	value && value.length < min
		? `Must be ${min} characters or less`
		: undefined;

export const maxLength = max => value =>
	value && value.length > max
		? `Must be ${max} characters or less`
		: undefined;

export const minValue = min => value =>
	value && value < min ? `Minimum is ${min}` : undefined;

export const maxValue = max => value =>
	value && value > max ? `Maximum is ${max}` : undefined;

export const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? "Invalid email address"
		: undefined;
export const number = value =>
	value && isNaN(Number(value)) ? "Must be a number" : undefined;
