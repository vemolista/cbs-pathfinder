import { Engine, Rule } from "json-rules-engine";

interface SomethingProps {
	rule: Rule;
	fact: Record<string, number>;
}

export const Something = (props: SomethingProps) => {
	const { rule, fact } = props;

	(() => {
		const engine = new Engine();

		engine.addRule(rule);

		engine.run(fact);
	})();

	return <div></div>;
};

export const crunchIt = (rule: Rule, fact: Record<string, number>) => {
	const engine = new Engine();

	engine.addRule(rule);
	engine.run(fact);

	engine.on("failure", (event, almanac, ruleResult) =>
		console.log("pooop", ruleResult)
	);
	engine.on("success", () => console.log("not poop"));
};
