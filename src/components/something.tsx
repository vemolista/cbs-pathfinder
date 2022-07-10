import { Engine, Rule } from "json-rules-engine";

interface SomethingProps {
	rule: Rule;
	record: any;
}

export const Something = (props: SomethingProps) => {
	const { rule, record } = props;

	let poop: string = "poop";

	(() => {
		const engine = new Engine();

		engine.addRule(rule);

		console.log("record:", record);

		engine.on("success", () => console.log("success"));
		engine.on("failure", () => console.log("failure"));

		engine.run({
			IT: 30,
			"Business Administration": 25,
			Microeconomics: 5,
			Macroeconomics: 0,
		});
	})();

	return <div>{poop}</div>;
};
